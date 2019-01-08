import axios from "axios";
import omit from "lodash/omit";
import {
  SELECT_USER,
  RECEIVE_USERS,
  RECEIVE_ROLES,
  RECEIVE_PROJECTS,
  RECEIVE_USER_PROJECTS,
  ADD_ROLE_BEGIN,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_FAILURE,
  REMOVE_ROLE_BEGIN,
  REMOVE_ROLE_SUCCESS,
  CLOSE_ALERT,
} from "../constants/action-types";

// Set clicked user
export const selectUser = payload => {
  return dispatch => {
    dispatch({
      type: SELECT_USER,
      payload
    })
  }
};

// Users list
export const fetchUsers = () => {
  return dispatch => {
    return axios.get("http://localhost:3000/users")
      .then(res => {
        dispatch(receiveUsers(res.data));
        return res.data;
      })
  };
}

export const receiveUsers = payload => ({
  type: RECEIVE_USERS,
  payload
});

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

// Add role
export const addRole = payload => {
  const payloadWithoutRole = omit(payload, "role_id");

  return dispatch => {
    dispatch(addRoleBegin());
    axios.get("http://localhost:3000/project_users", {
      params: { ...payloadWithoutRole }
    })
      .then(res => {
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

// Remove role
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

// Close success/error alerts
export const closeAlert = () => ({
  type: CLOSE_ALERT
});