import rolesList from "../../reducers/rolesList";
import { RECEIVE_ROLES } from "../../constants/action-types";

describe("rolesList reducer", () => {
  const roles = [
    { id: 1, name: "Admin" },
    { id: 2, name: "Editor" }
  ];

  it("should return the initial state", () => {
    const action = { type: "receive_roles" };
    const initialState = { roles: [] }

    expect(rolesList(undefined, action)).toEqual(initialState);
  });

  it("should handle RECEIVE_ROLES", () => {
    const action = {
      type: RECEIVE_ROLES,
      payload: roles
    }
    const expectedState = { roles }

    expect(rolesList(undefined, action)).toEqual(expectedState);
  });
});