import { GET_ARTICLES } from "../actions/articles";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES: {
      return action.payload;
    }
    default:
      return state;
  }
}
