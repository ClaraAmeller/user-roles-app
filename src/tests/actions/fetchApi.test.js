import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk"
import axios from "axios";
import mockAdapter from "axios-mock-adapter";
import expect from "expect"

import {
  RECEIVE_USERS,
  RECEIVE_ROLES,
  RECEIVE_PROJECTS,
} from "../../constants/action-types";

import { fetchUsers } from "../../actions/fetchUsers";
import { fetchRoles } from "../../actions/fetchRoles";
import { fetchProjects } from "../../actions/fetchProjects";

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

const mock = new mockAdapter(axios);

describe("fetch API", () => {
  const mockedUsers = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" }
  ];

  const mockedRoles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Editor" },
    { id: 3, name: "Viewer" }
  ];

  const mockedProjects = [
    { id: 1, name: "Trip to space" },
    { id: 2, name: "Assembly Ikea furniture" },
    { id: 3, name: "Datumize Zentral" }
  ];

  it("creates RECEIVE_USERS when fetching users has been done", () => {
    mock.onGet("http://localhost:3000/users")
      .reply(200, { users: mockedUsers });

    const store = mockStore({ users: mockedUsers })

    const expectedActions = [ {
      type: RECEIVE_USERS, payload: { users: mockedUsers }
    } ]

    return store.dispatch(fetchUsers()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })

  it("creates RECEIVE_ROLES when fetching roles has been done", () => {
    mock.onGet("http://localhost:3000/roles")
      .reply(200, { roles: mockedRoles });

    const store = mockStore({ roles: mockedRoles })

    const expectedActions = [ {
      type: RECEIVE_ROLES, payload: { roles: mockedRoles }
    } ]

    return store.dispatch(fetchRoles()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })

  it("creates RECEIVE_PROJECTS when fetching projects has been done", () => {
    mock.onGet("http://localhost:3000/projects")
      .reply(200, { projects: mockedProjects });

    const store = mockStore({ projects: mockedProjects })

    const expectedActions = [ {
      type: RECEIVE_PROJECTS, payload: { projects: mockedProjects }
    } ]

    return store.dispatch(fetchProjects()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    });
  })
})