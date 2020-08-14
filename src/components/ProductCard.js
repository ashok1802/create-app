import React from 'react';
import {
  Card, CardText, CardBody, CardHeader, CardFooter,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const productCard = (props) => {
  const {name, category, description, price} = props.product
  return (
    <Row>
      <Col sm="6">
        <Card>
        <CardHeader>{name}</CardHeader>
          <CardBody>
            <CardTitle>Category: {category}</CardTitle>
            <CardText>{description}</CardText>
            <Button>Add to Cart</Button>
          </CardBody>
          <CardFooter>Price: ${price} Footer</CardFooter>
        </Card>
      </Col>
    </Row>
  );
}

export default productCard;
