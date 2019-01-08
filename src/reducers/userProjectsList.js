import {
  ADD_ROLE_BEGIN,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_FAILURE,
  CLOSE_ALERT,
  RECEIVE_USER_PROJECTS,
  REMOVE_ROLE_BEGIN,
  REMOVE_ROLE_SUCCESS
} from "../constants/action-types";

const initialState = {
  userProjects: [],
  loading: false,
  error: null,
  alertType: null,
  displayAlert: false
}

function userProjectsListReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USER_PROJECTS:
      return {
        ...state,
        userProjects: action.payload
      }
    case ADD_ROLE_BEGIN:
      return {
        ...state,
        loading: true
      };
    case ADD_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        displayAlert: true,
        alertType: "success",
        userProjects: [ ...state.userProjects, action.payload ]
      }
    case ADD_ROLE_FAILURE:
      return {
        ...state,
        loading: false,
        alertType: "error",
        displayAlert: true
      };
    case REMOVE_ROLE_BEGIN:
      return {
        ...state,
        loading: true,
        displayAlert: false
      };
    case REMOVE_ROLE_SUCCESS:
      return {
        ...state,
        loading: false,
        userProjects: state.userProjects.filter(userProject => (
          userProject.id !== action.payload)
        )
      }
    case CLOSE_ALERT:
      return {
        ...state,
        displayAlert: false
      }
    default:
      return state;
  }
};

export default userProjectsListReducer;