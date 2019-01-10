import axios from "axios";
import omit from "lodash/omit";

import {
  ADD_ROLE_BEGIN,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_FAILURE
} from "../constants/action-types";

// Assign user role in new project
export const addRole = payload => {
  const payloadWithoutRole = omit(payload, "role_id");

  return dispatch => {
    dispatch(addRoleBegin());
    // check if user's already in that project
    axios.get("http://localhost:3000/project_users", {
      // passing it without role because, otherwise, we would be asking if user && role exist in the project, but we only care about that *user* being in that project
      params: { ...payloadWithoutRole }
    })
      .then(res => {
        // user's already in that project ? return addRoleFailure() : post it
        if (res.data.length > 0) return dispatch(addRoleFailure());
        axios.post("http://localhost:3000/project_users", payload)
          .then(res => {
            dispatch(addRoleSuccess(res.data));
            return res.data
          })
          .catch(error => console.log(error))
      })
  };
}

export const addRoleBegin = () => ({
  type: ADD_ROLE_BEGIN
});

export const addRoleSuccess = payload => ({
  type: ADD_ROLE_SUCCESS,
  payload
});

export const addRoleFailure = payload => ({
  type: ADD_ROLE_FAILURE,
  payload
});
