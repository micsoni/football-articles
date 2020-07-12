import { GET_ARTICLES } from "../actions/articles";

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ARTICLES: {
      action.payload.forEach((article) => {
       article.urlToImage =
          article.urlToImage ||
          "https://via.placeholder.com/420x200.png/6F42C1/FFFFFF?text=No%20Image";
      });
      return action.payload;
    }
    default:
      return state;
  }
}
