import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import "../style/articleCard.css";

function ArticleCard(props) {
  return (
    <Col xl={3} lg={4} md={6}>
      <Card className="article-card">
        <Card.Header as="h5">{props.source.name}</Card.Header>
        <Card.Img
          variant="top"
          className="pattern-image"
          src={props.urlToImage}
        />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Body>
            <Card.Text className="description">{props.description}</Card.Text>
          </Card.Body>
          <Button className="purple-buttom" variant="dark" href={props.url}>
            See complete article
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ArticleCard;
