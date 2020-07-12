import React, { useEffect } from "react";
import Loading from "../components/Loading";
import { Container, Row } from "react-bootstrap";
import { fetchArticles } from "../store/actions/articles";
import { useDispatch } from "react-redux";
import "../style/homepage.css";

function Homepage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <div className="main">
      <Container>
        <Row className="centered">
          <Loading />
        </Row>
      </Container>
    </div>
  );
}

export default Homepage;
