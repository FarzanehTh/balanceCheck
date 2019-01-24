/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle";

function Footer({ ...props }) {
  const { classes, whiteFont, footerTitle } = props;
  const route = footerTitle == "Main" ? "/" : footerTitle;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/"
                className={classes.block}
                target="_blank"
              >
                Theme by Creative Tim
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/csc301-fall-2018/project-team-14"
                className={classes.block}
                target="_blank"
              >
                GitHub Repo
              </a>
            </ListItem>
            {/* <ListItem className={classes.inlineBlock}>
              <Link to={route} className={classes.block}>
                {footerTitle}
              </Link>
            </ListItem> */}
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          Awesome People @ Team 14
        </div>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
    footerTitle: "Main"
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool,
  footerTitle: PropTypes.string
};

export default withStyles(footerStyle)(Footer);
