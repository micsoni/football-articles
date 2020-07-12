import { GET_ARTICLES } from "../actions/articles";

const initialState = [];

const defaultImage =
  "https://via.placeholder.com/420x200.png/64637B/FFFFFF?text=No%20Image";

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES: {
      action.payload.forEach((article) => {
        article.urlToImage = article.urlToImage || defaultImage;
      });
      return action.payload;
    }
    default:
      return state;
  }
}
