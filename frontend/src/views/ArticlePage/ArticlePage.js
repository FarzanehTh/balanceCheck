import React from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Parallax from "components/Parallax/Parallax";
// jss style
import articlePageStyle from "assets/jss/material-kit-react/views/articlePage";
import VoteCard from '../ArticlePage/VoteCard';

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      text: undefined,
      author: undefined,
      date: undefined,
      url: undefined
    };
  };

  componentDidMount() {
     const { text, title, author, date, url} = this.props.location.state;
     this.setState({text: text, title:title, author:author, date:date, url:url});
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      this.newMethod(rest, classes)
    );

  }

  newMethod(rest, classes) {
    return <div>
      <Header
        fixed
        brand="BalanceCheck"
        rightLinks={<HeaderLinks />}
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest} />

      <Parallax image={require("assets/img/bg6.jpg")}>
      </Parallax>

      <div className={classes.container}>
          <GridContainer className={classes.box}>
            <GridItem xs={12}>
              <h2 className={classes.textCenter}>{this.state.title}</h2>
            </GridItem>
            <GridItem xs={12}>
              <h4 className={classes.textCenter}>Author: {this.state.author}</h4>
            </GridItem>
            <GridItem xs={12}>
              <h6 className={classes.textCenter}>Published: {this.state.date}</h6>
            </GridItem>
            <GridItem xs={12}>
              <p className={classes.text}>{this.state.text}</p>
            </GridItem>
            <GridItem xs={12}>
            </GridItem>
            <GridItem xs={12}>
            <div className={classes.textCenter}>
            <VoteCard articleTitle={this.state.title} articleUrl={this.state.url}></VoteCard>
            </div>
            </GridItem>
            <GridItem xs={12}>
            <div className={classes.urlBox}>
              <a className={classes.url} href={this.state.url}>Link to the article</a>
            </div>
            </GridItem>
          </GridContainer>
        </div>

      <Footer/>
    </div>;
  }
}

export default withStyles(articlePageStyle)(ArticlePage);
