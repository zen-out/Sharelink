import produce from "immer";
import {
  GET_BUGS_REQUEST,
  GET_BUGS_SUCCESS,
  GET_BUGS_FAILURE,
  ADD_BUG_SUCCESS,
  ADD_BUG_FAILURE,
  DELETE_BUG_REQUEST,
  DELETE_BUG_SUCCESS,
  DELETE_BUG_FAILURE,
  EDIT_BUG_REQUEST,
  EDIT_BUG_SUCCESS,
  EDIT_BUG_FAILURE,
} from "../actions/Bug";

export const bugInitialState = {
  loading: false,
  error: false,
  message: "",
  bugs: [],
};
export function bugReducer(
  state = bugInitialState,
  action
) {
  switch (action.type) {
    case EDIT_BUG_REQUEST:
      return { ...state, message: action.payload.id };
    case EDIT_BUG_SUCCESS:
      // get the new bug
      const newBug = {
        id: action.payload.id,
        problem: action.payload.newBug.problem,
        whatshouldbe: action.payload.newBug.whatshouldbe,
        whatactuallyis:
          action.payload.newBug.whatactuallyis,
        hypothesis: action.payload.newBug.hypothesis,
        plan: action.payload.newBug.plan,
      };
      console.log("Edited bug in reducer", newBug);
      // find the bug
      const bugWithId = state.bugs.find(
        (bug) => bug.id === action.payload.id
      );
      console.log("find bug with id", bugWithId);
      // find the index position of the bug
      const bugIndex = state.bugs.findIndex(
        (bug) => bug.id === action.payload.id
      );
      // update state
      let newState = [
        ...state.bugs.slice(0, bugIndex),
        newBug,
        ...state.bugs.slice(bugIndex + 1),
      ];
      console.log("updated new state", newState);
      return {
        ...state,
        bugs: newState,
      };
    case EDIT_BUG_FAILURE:
      return {
        ...state,
        message: action.payload.error,
      };
    case GET_BUGS_REQUEST:
      return {
        ...state,
        loading: true,
        message: "request",
        search: action.payload.search,
        userId: action.payload.userId,
      };
    case GET_BUGS_SUCCESS:
      return {
        message: "success",
        loading: true,
        error: false,
        bugs: action.payload.bugs,
      };
    case GET_BUGS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.error,
      };

    case ADD_BUG_SUCCESS:
      return {
        message: "success",
        bugs: state.bugs.concat([
          {
            bug: {
              problem: action.bug.problem,
              whatactuallyis: action.bug.whatactuallyis,
              whatshouldbe: action.bug.whatshouldbe,
              hypothesis: action.bug.hypothesis,
              plan: action.bug.plan,
              tags: action.bug.tags,
            },
            userId: action.userId,
          },
        ]),
        loading: false,
        error: false,
      };
    case ADD_BUG_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.error,
      };
    case DELETE_BUG_REQUEST:
      let deleteBugId = action.payload.id;
      return {
        ...state,
        loading: true,
        error: false,
      };
    case DELETE_BUG_SUCCESS:
      return {
        bugs: state.bugs.filter(
          (bug) => bug.id !== deleteBugId
        ),
        loading: false,
        error: false,
        message: action.payload.data,
      };
    case DELETE_BUG_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.payload.error,
      };
    default:
      return state;
  }
}
