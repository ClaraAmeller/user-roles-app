import { RECEIVE_ROLES } from "../constants/action-types";

const initialState = { roles: [] }

function rolesList(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_ROLES:
      return {
        roles: action.payload
      }
    default:
      return state;
  }
};

export default rolesList;