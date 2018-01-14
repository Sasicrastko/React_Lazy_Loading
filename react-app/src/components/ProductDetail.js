import React from "react";
import StringToHtml from "./StringToHtml.js";
import { NavLink as Link } from "react-router-dom";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const ProductDetail = (props) => {
  console.log(props);
  let { product, url } = props.location.state;
  return (
    <Container>
      <Card className="card border-0">
        <Card.Img
          fluid
          variant="bottom"
          style={{
            width: "50%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={url + product.productImage}
          alt={"img"}
        />
        <Card.Body>
          <Card.Title>{product.productName}</Card.Title>
          {product.inStock ? (
            <p style={{ color: "green" }}>{"IN STOCK"}</p>
          ) : (
            <p style={{ color: "red" }}>{"NOT IN STOCK"}</p>
          )}
          <Card className="card border-0">
            <StarRatings
              starRatedColor="orange"
              rating={product.reviewRating}
              starDimension="2rem"
              starSpacing="0"
            />
          </Card>
          <hr />
          <Card className="card border-0">
            <StringToHtml
              htmlString={
                product.longDescription
                  ? product.longDescription
                  : product.shortDescription
              }
            />
          </Card>
          <hr />
          <Card.Text>{`Price: ${product.price}`}</Card.Text>
          <Link to={{ pathname: "/" }}>
            <Button>BACK TO LIST</Button>
          </Link>
        </Card.Body>
      </Card>
      <hr />
    </Container>
  );
};

export default ProductDetail;
