import React from "react";
import ProductCard from "./ProductCard.js";
import { Container, Row, Col } from "react-bootstrap";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }

  onScroll = async () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
      this.props.list.length &&
      !this.state.isLoading
    ) {
      console.log("bottom of the page reached!");
      this.setState({ isLoading: true });
      await this.props.paginatedSearch();
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { list } = this.props;
    return (
      <Container fluid="md">
        {list.map((product, index) => (
          <Row key={index}>
            <Col xs={1}></Col>
            <Col xs={10}>
              <ProductCard
                URL={this.props.URL}
                product={product}
                key={product.productId}
              />
            </Col>
            <Col xs={1}></Col>
          </Row>
        ))}
      </Container>
    );
  }
}

export default List;
