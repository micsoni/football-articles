import axios from "axios";
import { setError } from "./error";

export const GET_ARTICLES = "GET_ARTICLES";

const api_key = process.env.REACT_APP_API_KEY
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
      console.error(error);
      dispatch(setError("Failed to load articles"));
    }
  };
}
