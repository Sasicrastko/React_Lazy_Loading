import React, { Component } from "react";
import List from "./List.js";
import "../App.css";

const URL = "http://localhost:3001";
const NUMBER_OF_PRODUCTS_PER_PAGE = 10;

const updateResult = (result) => (prevState) => ({
  products: [...prevState.products, ...result.products],
  page: prevState.page + 1,
  stopFetchingData: result.products.length > 0 ? false : true,
});

const setResult = (result) => (prevState) => ({
  products: result.products,
  page: 1,
  stopFetchingData: false,
});

const getUrl = (page) => {
  return `${URL}/products/${page}/${NUMBER_OF_PRODUCTS_PER_PAGE}`;
};

class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      page: 1,
      stopFetchingData: false,
    };
  }

  componentDidMount() {
    this.initialSearch();
  }

  initialSearch = (e) => {
    this.fetchData(1); //1 stays for first page
  };

  paginatedSearch = (e) => {
    if (!this.state.stopFetchingData) {
      let newPage = this.state.page + 1;
      let result = this.fetchData(newPage);
      if (!result.products) {
        this.setState({ stopFetchingData: true });
      }
      return result;
    }
  };

  fetchData = (page) =>
    fetch(getUrl(page))
      .then((response) => response.json())
      .then((result) => this.onSetResult(result, page));

  onSetResult = (result, page) => {
    //setting state only if result isn't empty array
    if (result.products.length > 0) {
      page === 1
        ? this.setState(setResult(result))
        : this.setState(updateResult(result));
    }
  };

  render() {
    return (
      <List
        URL={URL}
        onScroll={this.handleScroll}
        list={this.state.products}
        page={this.state.page}
        paginatedSearch={this.paginatedSearch}
      />
    );
  }
}

export default LandingPage;
