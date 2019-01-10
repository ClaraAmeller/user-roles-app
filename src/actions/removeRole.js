import axios from "axios";

import {
  REMOVE_ROLE_BEGIN,
  REMOVE_ROLE_SUCCESS,
} from "../constants/action-types";

// Remove user/role from that project
export const removeRole = projectId => {
  return dispatch => {
    dispatch(removeRoleBegin());
    return axios.delete(`http://localhost:3000/project_users/${projectId}`)
      .then(() => dispatch(removeRoleSuccess(projectId)))
      .catch(error => console.log(error));
  };
}

export const removeRoleBegin = () => ({
  type: REMOVE_ROLE_BEGIN
});

export const removeRoleSuccess = payload => ({
  type: REMOVE_ROLE_SUCCESS,
  payload
});
