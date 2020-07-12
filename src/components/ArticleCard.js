import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "../style/articleCard.css";

function ArticleCard(props) {
  function truncate(text, limit = 180) {
    return text.length <= limit ? text : `${text.slice(0, limit)}...`;
  }

  return (
    <Col xl={3} lg={4} md={6}>
      <Card className="article-card">
        <Card.Header as="h5">{props.source.name}</Card.Header>
        <Card.Img
          variant="top"
          className="pattern-image"
          src={props.urlToImage}
        />
        <Card.Body className="card-body">
          <Card.Title className="title">{props.title}</Card.Title>
          <Card.Text>{truncate(props.description)}</Card.Text>
          <Button className="cta-button" variant="dark" href={props.url}>
            See complete article
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ArticleCard;
