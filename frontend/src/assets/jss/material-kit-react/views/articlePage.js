import { container } from "assets/jss/material-kit-react";

const articlePageStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "3.4rem",
    fontWeight: "600",
    display: "inline-block",
    position: "relative"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    textDecoration: "none",
    color: "#FFFFFF !important"
  },
  textCenter: {
    textAlign: "center"
  },
  box: {
    border: "0",
    marginBottom: "30px",
    marginTop: "-575px",
    borderRadius: "6px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff",
    width: "100%",
    boxShadow:
      "0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem",
    transition: "all 300ms linear"
  },

  text: {
    margin: "25px 80px 25px 80px",
    textAlign: "center"
  },

  button: {
    justifyContent: "center",
    alignItems: "center",
    //marginLeft: "500px"
  },

  urlBox: {
    margin: "25px 0px 25px 0px",
    textAlign: "center",
  },

  url: {
    margin: "25px 0px 25px 0px",
    textAlign: "center",
    color: "black",
    fontSize: "1.25rem"
  }

};

export default articlePageStyle;
