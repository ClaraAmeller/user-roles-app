import axios from "axios";
import { RECEIVE_USER_PROJECTS } from "../constants/action-types";

// User projects list
export const fetchUserProjects = userId => {
  return dispatch => {
    axios.get(`http://localhost:3000/project_users?user_id=${userId}`)
      .then(res => {
        dispatch(receiveUserProjects(res.data));
        return res.data;
      })
  };
}

export const receiveUserProjects = payload => ({
  type: RECEIVE_USER_PROJECTS,
  payload
});