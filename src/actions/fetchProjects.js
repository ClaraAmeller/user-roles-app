import axios from "axios";
import { RECEIVE_PROJECTS } from "../constants/action-types";

// Projects list
export const fetchProjects = () => {
  return dispatch => {
    return axios.get("http://localhost:3000/projects")
      .then(res => {
        dispatch(receiveProjects(res.data));
        return res.data;
      })
  };
}

export const receiveProjects = payload => ({
  type: RECEIVE_PROJECTS,
  payload
});