export const GET_BUGS_REQUEST = "GET_BUGS_REQUEST";
export const GET_BUGS_SUCCESS = "GET_BUGS_SUCCESS";
export const GET_BUGS_FAILURE = "GET_BUGS_FAILURE";
export const ADD_BUG_SUCCESS = "ADD_BUG_SUCCESS";
export const ADD_BUG_FAILURE = "ADD_BUG_FAILURE";

export function GetBugsThunk(search, userId) {}

export function AddBugThunk(bug, userId) {}

export function GetBugsRequest(search, userId) {
  return {
    type: GET_BUGS_REQUEST,
    payload: {
      search: search,
      userId: userId,
    },
  };
}

export function GetBugsSuccess(bugs) {
  return {
    type: GET_BUGS_SUCCESS,
    payload: {
      bugs: bugs,
    },
  };
}

export function GetBugsFailure(error) {
  return {
    type: GET_BUGS_FAILURE,
    payload: {
      error: error,
    },
  };
}

export function AddBugSuccess(bug, userId) {
  return {
    type: ADD_BUG_SUCCESS,
    userId: userId,
    bug: {
      problem: bug.problem,
      whatactuallyis: bug.whatactuallyis,
      whatshouldbe: bug.whatshouldbe,
      hypothesis: bug.hypothesis,
      plan: bug.plan,
    },
  };
}

export function AddBugFailure(error) {
  return {
    type: ADD_BUG_FAILURE,
    payload: {
      error: error,
    },
  };
}
