import axios from 'axios'
export const FIKA_EVENT_FAILURE = "FIKA_EVENT_FAILURE";
export function FikaEventFailure(error) {
  return {
    type: FIKA_EVENT_FAILURE,
    payload: {
      error: error,
    },
  };
}

export const ADD_FIKA_EVENT = "ADD_FIKA_EVENT";
export function AddFikaEvent(fikaEvent, message) {
  return {
    type: ADD_FIKA_EVENT,
    payload: {
      fikaEvent: fikaEvent,
      message: message,
    },
  };
}

export function AddFikaEventThunk(fika) {
  return (dispatch) => {
    dispatch(AddFikaEvent(fika, "request"));
    axios
      .post("http://localhost:3001/api/fika", { fika })
      .then((response) => {
        dispatch(AddFikaEvent(fika, response));
      })
      .catch((error) => {
        dispatch(FikaEventFailure(error));
      });
  };
}

export const EDIT_FIKA_EVENT = "EDIT_FIKA_EVENT";

export function EditFikaEvent(fikaId, fikaEvent, message) {
  return {
    type: EDIT_FIKA_EVENT,
    payload: {
      fikaId: fikaId,
      fikaEvent: fikaEvent,
      message: message,
    },
  };
}

export function EditFikaEventThunk(fikaId, fikaEvent) {
  return (dispatch) => {
    // #TODO: Do we need this?
    dispatch(EditFikaEvent(fikaId, fikaEvent, "request"));
    axios
      .put("http://localhost:3001/api/fika", {
        fikaId,
        fikaEvent,
      })
      .then((response) => {
        dispatch(
          EditFikaEvent(fikaId, fikaEvent, response)
        );
      })
      .catch((error) => {
        dispatch(FikaEventFailure(error));
      });
  };
}

export const DELETE_FIKA_EVENT = "DELETE_FIKA_EVENT";

export function DeleteFikaEvent(fikaId, message) {
  return {
    type: DELETE_FIKA_EVENT,
    payload: {
      fikaId: fikaId,
      message: message,
    },
  };
}

export function DeleteFikaEventThunk(fikaId) {
  return (dispatch) => {
    axios
      .delete("http://localhost:3001/api/fika", { fikaId })
      .then((response) => {
        dispatch(DeleteFikaEvent(fikaId, response));
      })
      .catch((error) => {
        dispatch(FikaEventFailure(error));
      });
  };
}
