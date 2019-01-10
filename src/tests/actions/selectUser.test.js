import { SELECT_USER } from "../../constants/action-types";
import { selectUser } from "../../actions/selectUser";
import expect from "expect"

describe("select user", () => {
  it("should set user as currentUser on click", () => {
    const payload = { id: 2, name: "Alice" }
    const expectedAction = {
      type: SELECT_USER,
      payload
    }

    expect(selectUser(payload)).toEqual(expectedAction)
  })
})