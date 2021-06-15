import {
  FIKA_EVENT_FAILURE,
  ADD_FIKA_EVENT,
  EDIT_FIKA_EVENT,
  DELETE_FIKA_EVENT,
} from "../actions/Fika";

const initialState = {
  fikaList: [
    {
      id: 1,
      name: "Bibek",
      date: "2021-06-11",
      foods: [{ name: "pizza" }, { name: "dumplings" }],
    },
    {
      id: 2,
      name: "Lesley",
      date: "2021-06-18",
      foods: [{ name: "crackers" }, { name: "mango" }],
    },
  ],
  message: "",
};

export function fikaReducer(state = initialState, action) {
  switch (action.type) {
    case FIKA_EVENT_FAILURE:
      return {
        ...state,
        message: action.payload.error,
      };

    case ADD_FIKA_EVENT:
      console.log(
        "Add Fika Event",
        action.payload.fikaEvent
      );
      return {
        fikaList: state.fikaList.concat([
          action.payload.fikaEvent,
        ]),
        message: action.payload.message,
      };
    case EDIT_FIKA_EVENT:
      let originalState = state.fikaList;
      let fikaId = action.payload.fikaId;
      let newFikaEvent = action.payload.fikaEvent;

      for (let index in originalState) {
        if (i[index].id === fikaId) {
          originalState[index] = newFikaEvent;
        }
      }
      return {
        fikaList: originalState,
        message: action.payload.message,
      };
    case DELETE_FIKA_EVENT:
      return {
        fikaList: state.fikaList.filter(
          (fika, index) => fika.id !== action.payload.fikaId
        ),
      };
    default:
      return state;
  }
}
