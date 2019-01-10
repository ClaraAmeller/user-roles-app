import usersList from "../../reducers/usersList";
import { RECEIVE_USERS, SELECT_USER } from "../../constants/action-types";

describe("usersList reducer", () => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Alice" }
  ];

  it("should return the initial state", () => {
    const action = { type: "receive_users" };
    const initialState = {
      users: [],
      currentUser: users[ 0 ]
    }

    expect(usersList(undefined, action)).toEqual(initialState);
  });

  it("should handle RECEIVE_USERS", () => {
    const action = {
      type: RECEIVE_USERS,
      payload: users
    }
    const expectedState = {
      currentUser: users[ 0 ],
      users
    }

    expect(usersList(undefined, action)).toEqual(expectedState);
  });

  it("should handle SELECT_USER", () => {
    const action = {
      type: SELECT_USER,
      payload: { id: 2, name: "Alice" }
    }
    const expectedState = {
      users: [],
      currentUser: { id: 2, name: "Alice" }
    }

    expect(usersList(undefined, action)).toEqual(expectedState);
  });
});