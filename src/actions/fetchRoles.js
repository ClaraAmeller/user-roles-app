import axios from "axios";
import { RECEIVE_ROLES } from "../constants/action-types";

// Roles list
export const fetchRoles = () => {
  return dispatch => {
    return axios.get("http://localhost:3000/roles")
      .then(res => {
        dispatch(receiveRoles(res.data));
        return res.data;
      })
  };
}

export const receiveRoles = payload => ({
  type: RECEIVE_ROLES,
  payload
});
