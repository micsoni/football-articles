import { SET_ERROR } from "../actions/error";

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERROR: {
      return action.payload;
    }
    default:
      return state;
  }
}
