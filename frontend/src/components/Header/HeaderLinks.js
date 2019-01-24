/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown";
import Button from "components/CustomButtons/Button";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle";
import profileImage from "assets/img/faces/card-profile6-square.jpg";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
<List className={classes.list}>
                  {/* <ListItem className={classes.listItem}>
                    <Button
                      href="https://csc301-fall-2018.github.io/"
                      target="_blank"
                      className={classes.navLink + " " + classes.normalText}
                      color="transparent"
                    >
                      Discover
                    </Button>
                  </ListItem> */}
                  <ListItem className={classes.listItem}>
                  <Link to='/About' >
                    <Button
                      href="#"
                      target="_blank"
                      className={classes.navLink + " " + classes.normalText}
                      color="transparent"
                    >
                      About
                    </Button>
                    </Link>
                  </ListItem>
                  {/* <ListItem className={classes.listItem}>
                    <Button
                      justIcon
                      round
                      href="#pablo"
                      className={classes.notificationNavLink}
                      onClick={e => e.preventDefault()}
                      color="rose"
                    >
                      <Email className={classes.icons} />
                    </Button>
                  </ListItem> */}
                  <ListItem className={classes.listItem}>
                    <CustomDropdown
                      left
                      caret={false}
                      hoverColor="black"
                      dropdownHeader="Profile"
                      buttonText={
                        <img
                          src={profileImage}
                          className={classes.img}
                          alt="profile"
                        />
                      }
                      buttonProps={{
                        className:
                          classes.navLink + " " + classes.imageDropdownButton,
                        color: "transparent"
                      }}
                      dropdownList={[
                        "Me",
                        // "Settings and other stuff",
                        "Sign out"
                      ]}
                    />
                  </ListItem>
                </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
