import projectsList from "../../reducers/projectsList";
import { RECEIVE_PROJECTS } from "../../constants/action-types";

describe("projectsList reducer", () => {
  const projects = [
    { id: 1, name: "Trip to space" },
    { id: 2, name: "Assembly Ikea furniture" }
  ];

  it("should return the initial state", () => {
    const action = { type: "receive_projects" };
    const initialState = {
      projects: []
    }

    expect(projectsList(undefined, action)).toEqual(initialState);
  });

  it("should handle RECEIVE_PROJECTS", () => {
    const action = {
      type: RECEIVE_PROJECTS,
      payload: projects
    }
    const expectedState = { projects }

    expect(projectsList(undefined, action)).toEqual(expectedState);
  });
});