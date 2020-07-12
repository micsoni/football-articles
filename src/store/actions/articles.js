import axios from "axios";

export const GET_ARTICLES = "GET_ARTICLES";

const api_key = "ba6e53f23c3d48c684b8e1f9075ede72";
const articlesUrl = `http://newsapi.org/v2/everything?q=football&from=2020-07-09&sortBy=publishedAt&apiKey=${api_key}`;

export function fetchedArticles(request) {
  return {
    type: GET_ARTICLES,
    payload: request.data.articles,
  };
}

export function fetchArticles() {
  return async function (dispatch) {
    try {
      const articles = await axios.get(articlesUrl);
      const action = fetchedArticles(articles);
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  };
}
