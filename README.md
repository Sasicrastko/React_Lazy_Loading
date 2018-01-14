# Lazy Loading

Lazy loading is a technique to optimize web applications as well as on mobile apps. There are some components the user might not need initially or ever and rendering those components harms application’s performance especially when there are a lot of images to be shown.

This is an app that demonstrates lazy loading in a React app (folder **react-app**). The backend is a Node app that emulates real case with pagination and feeds the client from **data.json** file.

In this demo you can see the moment when _bottom of the page reached!_ is printed in browsers console. This is the moment when the React app calls server to gett data for a new set of products to show.

![Demo](/demo/logo.gif)

Fetching new data function is triggered reaching the botton of the page.

```javascript
//section of code from /reacr-app/src/components/List.js
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
```

This app gets 10 new products every time whe user scrolls to the end if list of renedered products. That can be changed in **LandingPage.js** file.

```javascript
//section of code from /reacr-app/src/components/LandingPage.js
const URL = "http://localhost:3001";
const NUMBER_OF_PRODUCTS_PER_PAGE = 10;
```

If you want to play with this app, clone it and run two apps, server and client. Of course you must do _npm install_ before that.
