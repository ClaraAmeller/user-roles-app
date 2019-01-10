import { RECEIVE_USERS, SELECT_USER } from "../constants/action-types";

const initialState = {
  users: [],
  currentUser: { id: 1, name: "John Doe" }
}

function usersList(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        users: action.payload
      }
    case SELECT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
};

export default usersList;