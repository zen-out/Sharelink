import {
  fikaReducer,
  initialState,
} from "../redux/reducers/Fika";

import {
  FikaEventFailure,
  AddFikaEvent,
  AddFikaEventThunk,
  EditFikaEvent,
  EditFikaEventThunk,
  DeleteFikaEvent,
  DeleteFikaEventThunk,
} from "../redux/actions/Fika";

describe("testing fika reducer", () => {
  test("add fika event thunk", () => {
    const getState = fikaReducer(
      initialState,
      AddFikaEvent(
        {
          name: "TC",
          date: "2021-06-11",
          foods: [{ name: "pizza" }, { name: "dumplings" }],
        },
        "request"
      )
    );
    console.log(getState);
  });
  test("add fika event success", () => {});
  test("add fika event failure", () => {});
  test("edit fika event thunk", () => {});
  test("edit fika event success", () => {});
  test("edit fika event failure", () => {});
  test("delete fika event thunk", () => {});
  test("delete fika event success", () => {});
  test("delete fika event failure", () => {});
});
