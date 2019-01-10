import { SELECT_USER } from "../constants/action-types";

// Set clicked user
export const selectUser = payload => ({
  type: SELECT_USER,
  payload
})
