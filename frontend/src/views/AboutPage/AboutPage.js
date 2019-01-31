import React from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
// core components
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/aboutPageHeaderLinks";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import CustomTabs from "components/CustomTabs/CustomTabs";
// jss style
import aboutPageStyle from "assets/jss/material-kit-react/views/aboutPage";
import image from "assets/img/bahen.jpg";

class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          brand="BalanceCheck"
          rightLinks={<HeaderLinks />}
          color="transparent"
          {...rest} />

        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}>

          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <h3>
                  <small>About Us</small>
                </h3>
                <CustomTabs
                  headerColor="danger"
                  tabs={[
                    {
                      tabName: "Product",
                      tabIcon: Chat,
                      tabContent: (
                        <div>
                          <p className={classes.textCenter}>
                            Currently, several web organizations are making attempts to deliberately promote
                            disinformation and biased opinions to attract people to come to their websites.
                            Potentially, people will believe what they read and see on these websites as a
                            reliable resource for news. Because these websites are getting more and more popular
                            and increased daily traffic, other news media websites are impacted by this. Wikipedia
                             has listed over 70 new websites that deliver fake news through social media platforms,
                             such as Facebook. Therefore, there are many users that are reading articles and learning
                             information that may be biased or even false.
                          </p>
                          <br/>
                          <p className={classes.textCenter}>
                            BalanceCheck is the perfect solution to solve this problem. BalanceCheck’s primary product
                             is a web application, with a search function to allow searching for articles to obtain their
                             current rating. Articles will be searchable by URL or by text search. It allows people to
                             vote on the fairness and balance of online reporting so that any article or post will be
                             given a weighted grade reflecting the userbase’s opinion of the news item’s objectivity.
                             BalanceCheck also provides users to express their opinions in a systematic way. Rather than
                             labeling some news media website as unreliable, BalanceCheck let the user view different new
                             media websites by rank (biased/neutral/unreliable, etc) as well as the evidence (poorly rated
                             articles) that support their rating.
                          </p>
                          <br/>
                          <p className={classes.textCenter}>
                            This product is important because it creates a service to find the most unbiased articles and
                            information on the web. This is crucial for users who normally read web pages and online news
                            sources that are filled with bias and fake news. It has become very difficult in this time to
                            find a source of news that is trustworthy and unaffected by any form of bias.
                          </p> 
                        </div>
                      )
                    },
                    {
                      tabName: "Team",
                      tabIcon: Face,
                      tabContent: (
                        <p className={classes.textCenter2}>
                          Roles:
                          <br/>
                           Frontend Developers: Marco, Naz, Marina
                          <br/>
                           Backend Developers: Galex, Farzaneh, Josh.
                          <br/>
                          Product Management: Consensus.
                      </p>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
        
      </div>);
  }

}

export default withStyles(aboutPageStyle)(AboutPage);
