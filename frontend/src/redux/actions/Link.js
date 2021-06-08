import axios from "axios";
// types
const GET_LINKS_REQUEST = "GET_LINKS_REQUEST";
const GET_LINKS_SUCCESS = "GET_LINKS_SUCCESS";
const GET_LINKS_FAILURE = "GET_LINKS_FAILURE";
const ADD_LINK_SUCCESS = "ADD_LINK_SUCCESS";
const ADD_LINK_FAILURE = "ADD_LINK_FAILURE";

function GetLinksRequest(search, userId) {
  return {
    type: GET_LINKS_REQUEST,
    payload: {
      search: search,
      userId: userId,
    },
  };
}

function GetLinksSuccess(links) {
  return {
    type: GET_LINKS_SUCCESS,
    payload: {
      links: links,
    },
  };
}
function GetLinksFailure(error) {
  return {
    type: GET_LINKS_FAILURE,
    payload: {
      error: error,
    },
  };
}
function AddLinkSuccess(link, userId) {
  return {
    type: ADD_LINK_SUCCESS,
    payload: {
      link: link,
      userId: userId,
    },
  };
}

function AddLinkFailure(error) {
  return {
    type: ADD_LINK_FAILURE,
    payload: {
      error: error,
    },
  };
}
// thunk
function GetLinksThunk(search, userId) {
  dispatch(GetLinksRequest(search, userId));
}
