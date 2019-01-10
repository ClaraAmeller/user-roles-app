import axios from "axios";
import { RECEIVE_USERS } from "../constants/action-types";

// Users list
export const receiveUsers = payload => ({
  type: RECEIVE_USERS,
  payload
});

export const fetchUsers = () => {
  return dispatch => {
    return axios.get("http://localhost:3000/users")
      .then(res => {
        dispatch(receiveUsers(res.data));
        return res.data;
      })
  };
}

