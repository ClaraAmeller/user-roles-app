import { combineReducers } from "redux";

import usersList from "./usersList";
import rolesList from "./rolesList";
import projectsList from "./projectsList";
import userProjectsList from "./userProjectsList";

export default combineReducers({
  usersList,
  rolesList,
  projectsList,
  userProjectsList
});