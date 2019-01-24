import React, { Fragment } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button";
import Parallax from "components/Parallax/Parallax";
import CustomInput from "components/CustomInput/CustomInput";
// jss style
import homePageStyle from "assets/jss/material-kit-react/views/homePage";
// Article component
import ArticleCard from "./ArticleCard/ArticleCard.js"
// data
// import data from "./data.json";
import AddArticle from './AddArticle.js';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: undefined,
      articles: [],
      filteredResults: []
    };
    this.filterSearch = this.filterSearch.bind(this);
    this.fetchAllArticles = this.fetchAllArticles.bind(this);
  };

  componentWillMount() {
    // Fetch all articles before the page loads up
    this.fetchAllArticles();
  }

  fetchAllArticles() {
     fetch('http://localhost:8000/articles/get_all_articles')
     .then( response => response.json() )
     .then( data => this.setState({articles: data['articles']}))

    // this.setState({articles: data});
  }

  filterSearch = event => {
    this.setState({ searchInput: event.target.value });
    var searchQuery = event.target.value.toLowerCase();
    // Filter by url
    var resultUrl = this.state.articles.filter(function (element) {
      var searchValue = element.articleUrl.toLowerCase();
      return (searchValue.indexOf(searchQuery) !== -1);
    });
    // Filter by title
    var resultTitle = this.state.articles.filter(function (element) {
      var searchValue = element.articleTitle.toLowerCase();
      return (searchValue.indexOf(searchQuery) !== -1);
    });

    this.setState({
      filteredResults: resultUrl.concat(resultTitle)
    });
  }

  render() {
    const { classes, ...rest } = this.props;
    const {articles, filteredResults, searchInput} = this.state;
    const resultComponent = filteredResults.length  === 0 && searchInput ?
    <GridItem xs={12}>
      <GridItem sm={12}>
          <h2>Results:</h2>
          <h3>Sorry, there are no results for <b>{searchInput}</b>.</h3>
          <h3>Suggestion:</h3>
          <ul>
            <li><h4>Create an article</h4></li>
            <li><h4>Make sure the input is a URL or title</h4></li>
          </ul>
      </GridItem>

    </GridItem> : filteredResults.map(item =>
      <GridItem xs={12}>
        <ArticleCard
          title={item.articleTitle}
          author={item.articleAuthor}
          date={item.articleDatePosted}
          url={item.articleUrl}
          ratings={{
            "1": item.numRatesOne,
            "2": item.numRatesTwo,
            "3": item.numRatesThree,
            "4": item.numRatesFour,
            "5": item.numRatesFive
          }}
          // sentence={item.sentence}
          // text={item.text}
        ></ArticleCard>
      </GridItem>
    )
    const welcomeMessage = articles.length === 0 ? <GridItem xs={12}>
    <GridItem sm={12}>
        <h3>There are no articles in the database yet. Create an article to start!</h3>
    </GridItem>
    </GridItem> :
    articles.map(item =>
      <GridItem xs={12}>
        <ArticleCard
          title={item.articleTitle}
          author={item.articleAuthor}
          date={item.articleDatePosted}
          url={item.articleUrl}
          ratings={{
            "1": item.numRatesOne,
            "2": item.numRatesTwo,
            "3": item.numRatesThree,
            "4": item.numRatesFour,
            "5": item.numRatesFive
          }}
          // sentence={item.sentence}
          // text={item.text}
        ></ArticleCard>
      </GridItem>
    )

    return (
      this.newMethod(rest, classes, resultComponent, searchInput, welcomeMessage)
    );
  }

  newMethod(rest, classes, resultComponent, searchInput, welcomeMessage) {
    return <div>
      <Header
        fixed
        brand="BalanceCheck"
        rightLinks={<HeaderLinks />}
        color="transparent"
        changeColorOnScroll={{
          height: 340,
          color: "white"
        }}
        {...rest} />
      <Parallax image={require("assets/img/bg6.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={15}>
              <div className={classes.brand}>
                <h1 className={classes.title}>BalanceCheck</h1>
              </div>
            </GridItem>
            <GridItem xs={15}>
              <CustomInput
                labelText="Enter a URL or title"
                formControlProps={{
                  fullWidth: true
                }}

                onChange={this.filterSearch} />
            </GridItem>
            <GridItem xs={15}>
                <h3 className={classes.textCenterWhite}>OR</h3>
        </GridItem>
            <GridItem xs={5}>
        </GridItem>
            <GridItem xs={5}>
              <Button
                color="danger"
                size="lg"
                onClick={this.handleSubmit}>
                <AddArticle label="Create Here"></AddArticle>
              </Button>
            </GridItem>
            <GridItem xs={5}>
        </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classes.container}>
          <GridContainer className={classes.box}>
            <Fragment>
            {searchInput ? resultComponent : welcomeMessage}
            </Fragment>
          </GridContainer>
      </div>
      <Footer footerTitle="About" />
    </div>;
  }
}

export default withStyles(homePageStyle)(HomePage);
