import { RECEIVE_PROJECTS } from "../constants/action-types";

const initialState = { projects: [] }

function projectsListReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return {
        ...state,
        loading: false,
        projects: action.payload
      }
    default:
      return state;
  }
};

export default projectsListReducer;