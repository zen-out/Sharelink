import {
  bugReducer,
  bugInitialState,
} from "../redux/reducers/bug";
import {
  GetBugsRequest,
  GetBugsSuccess,
  GetBugsFailure,
  AddBugSuccess,
  AddBugFailure,
  GetBugsThunk,
  AddBugThunk,
} from "../redux/actions/bug";

describe("testing bug reducer", () => {
  test("Get Bugs Thunk dispatches GetBugsSuccess", () => {
    // let getBugThunkState = GetBugsThunk("search", "userid");
    // console.log(getBugThunkState);
  });
  test("Get Bugs Thunk dispatches failure if invalid user id", () => {});
  test("Add Bug Thunk dispatches if valid user id", () => {});
  test("Add Bug Thunk dispatches fail if invalid user id", () => {});
  test("Get Bugs Request Action", () => {
    const getBugRequestState = bugReducer(
      bugInitialState,
      GetBugsRequest("search", "userid")
    );
    // console.log(getBugRequestState);
    expect(getBugRequestState).toEqual({
      loading: true,
      error: false,
      message: "request",
      bugs: [],
      search: "search",
      userId: "userid",
    });
  });
  test("Get Bugs Success Action", () => {
    const getBugSuccessState = bugReducer(
      bugInitialState,
      GetBugsSuccess([{ id: 1, fakedata: "hello" }])
    );
    // console.log(getBugSuccessState);
    expect(getBugSuccessState).toEqual({
      message: "success",
      loading: true,
      error: false,
      bugs: [{ id: 1, fakedata: "hello" }],
    });
  });
  test("Get Bugs Failure Action", () => {
    const getBugFailureState = bugReducer(
      bugInitialState,
      GetBugsFailure("invalid id")
    );
    // console.log(getBugFailureState);
    expect(getBugFailureState).toEqual({
      loading: false,
      error: true,
      message: "invalid id",
      bugs: [],
    });
  });
  test("Add Bug Success Action", () => {
    const addBugSuccessState = bugReducer(
      bugInitialState,
      AddBugSuccess(
        {
          problem: "data",
          whatactuallyis: "what",
          whatshouldbe: "what",
          hypothesis: "hypothesis",
          plan: "plan",
        },
        1
      )
    );
    // console.log(addBugSuccessState);
    expect(addBugSuccessState.bugs[0].userId).toEqual(1);
    expect(addBugSuccessState.bugs[0].bug).toEqual({
      problem: "data",
      whatactuallyis: "what",
      whatshouldbe: "what",
      hypothesis: "hypothesis",
      plan: "plan",
    });
  });
  test("Add Bug Failure Action", () => {
    const addBugFailureState = bugReducer(
      bugInitialState,
      AddBugFailure("failure")
    );
    // console.log(addBugFailureState);
    expect(addBugFailureState).toEqual({
      loading: false,
      error: true,
      message: "failure",
      bugs: [],
    });
  });
});
