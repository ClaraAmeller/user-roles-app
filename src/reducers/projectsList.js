import { RECEIVE_PROJECTS } from "../constants/action-types";

const initialState = { projects: [] }

function projectsList(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_PROJECTS:
      return {
        projects: action.payload
      }
    default:
      return state;
  }
};

export default projectsList;