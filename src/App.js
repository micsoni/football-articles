import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchArticles } from "./store/actions/articles";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="App">
      <p>Hello</p>
    </div>
  );
}

export default App;
