import { combineReducers } from "redux";

import usersList from "./usersListReducer";
import rolesList from "./rolesListReducer";
import projectsList from "./projectsListReducer";
import userProjectsList from "./userProjectsList";

export default combineReducers({
  usersList,
  rolesList,
  projectsList,
  userProjectsList
});