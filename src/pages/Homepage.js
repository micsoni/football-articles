import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { Container, Row } from "react-bootstrap";
import { fetchArticles } from "../store/actions/articles";
import { useDispatch, useSelector } from "react-redux";
import ArticleCard from "../components/ArticleCard";
import "../style/homepage.css";

function Homepage() {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  const createCards = () => {
    const cards = articles.map((article, index) => {
      return <ArticleCard key={index} {...article} />;
    });
    return cards;
  };

  return (
    <div className="main">
      <p>Football Articles</p>
      <Container fluid>
        <Row className="row">
          {!articles.length ? <Loading /> : createCards()}
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
