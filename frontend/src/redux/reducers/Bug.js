import {
  GET_BUGS_REQUEST,
  GET_BUGS_SUCCESS,
  GET_BUGS_FAILURE,
  ADD_BUG_SUCCESS,
  ADD_BUG_FAILURE,
  DELETE_BUG_REQUEST,
  DELETE_BUG_SUCCESS,
  DELETE_BUG_FAILURE,
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
        bugs: state.bugs.filter(
          (bug) => bug.id !== deleteBugId
        ),
        // filter statement that removes that bug
      };
    case DELETE_BUG_SUCCESS:
      let deletedBugId = action.payload.id;
      return {
        ...state,
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
