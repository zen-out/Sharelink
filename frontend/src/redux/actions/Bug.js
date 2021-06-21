import axios from "axios";
import { BACKEND_PORT } from "../../utilities/config";
let BUGS_URL = BACKEND_PORT;
// let USERS_URL = "http://localhost:3000/api/signup";

export const GET_BUGS_REQUEST = "GET_BUGS_REQUEST";
export const GET_BUGS_SUCCESS = "GET_BUGS_SUCCESS";
export const GET_BUGS_FAILURE = "GET_BUGS_FAILURE";
export const ADD_BUG_SUCCESS = "ADD_BUG_SUCCESS";
export const ADD_BUG_FAILURE = "ADD_BUG_FAILURE";
export const DELETE_BUG_REQUEST = "DELETE_BUG_REQUEST";
export const DELETE_BUG_SUCCESS = "DELETE_BUG_SUCCESS";
export const DELETE_BUG_FAILURE = "DELETE_BUG_FAILURE";
export const EDIT_BUG_REQUEST = "EDIT_BUG_REQUEST";
export const EDIT_BUG_SUCCESS = "EDIT_BUG_SUCCESS";
export const EDIT_BUG_FAILURE = "EDIT_BUG_FAILURE";

export function EditBugRequest(id) {
  return {
    type: EDIT_BUG_REQUEST,
    payload: {
      id: id,
    },
  };
}
export function EditBugSuccess(id, newBug) {
  return {
    type: EDIT_BUG_SUCCESS,
    payload: {
      id: id,
      newBug: newBug,
    },
  };
}

export function EditBugFailure(error) {
  return {
    type: EDIT_BUG_FAILURE,
    payload: {
      error: error,
    },
  };
}
export function DeleteBugRequest(id) {
  return {
    type: DELETE_BUG_REQUEST,
    payload: {
      id: id,
    },
  };
}
export function DeleteBugSuccess(data) {
  return {
    type: DELETE_BUG_SUCCESS,
    payload: {
      data: data,
    },
  };
}
export function DeleteBugFailure(error) {
  return {
    type: DELETE_BUG_FAILURE,
    payload: {
      error: error,
    },
  };
}

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
      tags: bug.tags,
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

export function EditBugThunk(bugId, newBug) {
  return function (dispatch) {
    dispatch(EditBugRequest(bugId));
    return axios({
      method: "put",
      url: `${BUGS_URL}/api/bugs/${bugId}`,
      data: { newBug },
    })
      .then((edited) => {
        console.log("was it successful", edited);
        dispatch(EditBugSuccess(bugId, newBug));
      })
      .catch((error) => {
        dispatch(EditBugFailure(error));
      });
  };
}

export function DeleteBugThunk(bugId) {
  return function (dispatch) {
    return axios
      .delete(`${BUGS_URL}/api/bugs/${bugId}`)
      .then((data) => {
        console.log("data", data.data);
        dispatch(DeleteBugSuccess(data.data));
      })
      .catch((error) => {
        dispatch(DeleteBugFailure(error));
      });
  };
}
export function GetBugsThunk(search, userId) {
  return function (dispatch) {
    dispatch(GetBugsRequest(search, userId));
    if (search === "") {
      console.log("empty search");
      return axios
        .get(`${BUGS_URL}/api/users/${userId}/search`)
        .then((response) => {
          dispatch(GetBugsSuccess(response.data));
        })
        .catch((error) => {
          dispatch(GetBugsFailure(error));
        });
    }
    return axios
      .get(
        `${BUGS_URL}/api/users/${userId}/search/${search}`
      )
      .then((response) => {
        console.log(
          "Get bugs thunk, should get all the data back here"
        );
        console.log(response);
        dispatch(GetBugsSuccess(response.data));
      })
      .catch((error) => {
        dispatch(GetBugsFailure(error));
      });
  };
}

export function AddBugThunk(bug, userId) {
  return function (dispatch) {
    return axios
      .post(`${BUGS_URL}/api/bugs/${userId}`, {
        bug: bug,
        userId: userId,
      })
      .then((response) => {
        console.log("Posted - response: ", response);
        dispatch(AddBugSuccess(bug, userId));
      })
      .catch((error) => {
        dispatch(AddBugFailure(error));
      });
  };
}
