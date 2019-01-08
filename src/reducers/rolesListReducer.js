import { RECEIVE_ROLES } from "../constants/action-types";

const initialState = { roles: [] }

function rolesListReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ROLES:
      return {
        ...state,
        loading: false,
        roles: action.payload
      }
    default:
      return state;
  }
};

export default rolesListReducer;