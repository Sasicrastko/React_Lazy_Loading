import React from "react";
import { NavLink as Link } from "react-router-dom";
import StringToHtml from "./StringToHtml.js";
import { Button, Card } from "react-bootstrap";
import StarRatings from "react-star-ratings";

const Product = (props) => {
  let product = props.product;
  return (
    <Card style={{ width: "100%" }} className="mt-5">
      <Card.Img
        variant="top"
        src={props.URL + product.productImage}
        alt={"img"}
        style={{
          width: "50%",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <Card.Body>
        <Card.Title>{product.productName}</Card.Title>
        <Card className="card border-0">
          <StarRatings
            starRatedColor="orange"
            rating={product.reviewRating}
            starDimension="2rem"
            starSpacing="0"
          />
        </Card>
        <Card className="card border-0 mt-5">
          <StringToHtml htmlString={product.shortDescription} />
        </Card>
        <Card.Text>{`Price: ${product.price}`}</Card.Text>
        <Link
          to={{
            pathname: "/product/" + product.productId,
            state: { product: product, url: props.URL },
          }}
        >
          <Button>MORE DETAILS</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Product;
