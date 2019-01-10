import userProjectsList from "../../reducers/userProjectsList";
import {
  ADD_ROLE_BEGIN,
  ADD_ROLE_SUCCESS,
  ADD_ROLE_FAILURE,
  REMOVE_ROLE_BEGIN,
  REMOVE_ROLE_SUCCESS,
  CLOSE_ALERT,
} from "../../constants/action-types";

const initialState = {
  userProjects: [],
  loading: false,
  alertType: null,
  displayAlert: false
}

describe("initial state", () => {
  it("should return the initial state", () => {
    const action = { type: "receive_users" };
    expect(userProjectsList(undefined, action)).toEqual(initialState);
  });
});

describe("add role", () => {
  const userProject = {
    project_id: 1,
    role_id: 1,
    user_id: 1,
  }

  it("should handle ADD_ROLE_BEGIN", () => {
    const action = { type: ADD_ROLE_BEGIN }
    const expectedState = {
      ...initialState,
      loading: true
    }

    expect(userProjectsList(undefined, action)).toEqual(expectedState);
  });

  it("should handle ADD_ROLE_SUCCESS", () => {
    const action = {
      type: ADD_ROLE_SUCCESS,
      payload: userProject
    }
    const expectedState = {
      loading: false,
      displayAlert: true,
      alertType: "success",
      userProjects: [ userProject ]
    }

    expect(userProjectsList(undefined, action)).toEqual(expectedState);
  });

  it("should handle ADD_ROLE_FAILURE", () => {
    const action = { type: ADD_ROLE_FAILURE }
    const expectedState = {
      ...initialState,
      loading: false,
      displayAlert: true,
      alertType: "error",
    }

    expect(userProjectsList(undefined, action)).toEqual(expectedState);
  });
});

describe("remove role", () => {
  it("should handle REMOVE_ROLE_BEGIN", () => {
    const action = { type: REMOVE_ROLE_BEGIN }
    const expectedState = {
      ...initialState,
      loading: true
    }

    expect(userProjectsList(undefined, action)).toEqual(expectedState);
  });

  it("should handle REMOVE_ROLE_SUCCESS", () => {
    const action = { type: REMOVE_ROLE_SUCCESS }
    const expectedState = {
      ...initialState,
      loading: false,
      userProjects: []
    }

    expect(userProjectsList(undefined, action)).toEqual(expectedState);
  });
});

describe("close add_new_role alert", () => {
  it("should handle CLOSE_ALERT", () => {
    const action = { type: CLOSE_ALERT }
    const expectedState = {
      ...initialState,
      displayAlert: false
    }

    expect(userProjectsList(undefined, action)).toEqual(expectedState);
  })
})