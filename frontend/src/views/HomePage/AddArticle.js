import React from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
// core components
import Button from "components/CustomButtons/Button.js";
import modalStyle from "assets/jss/material-kit-react/modalStyle.js";

import TextField from '@material-ui/core/TextField';

class VoteCard extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      modal: false,
      url: undefined,
      warning: null
    };
    this.handleURL = this.handleURL.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
    this.createArticle = this.createArticle.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {

    this.setState({modal: true});
  }
  handleClose() {
    this.setState({modal: false});
  }

  handleURL = event => {
    this.setState({url: event.target.value});
  }

  onEnterPress = event => {
    if (event.key === 'Enter') {
      this.createArticle();
    }
  };


  createArticle(){
    const urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([-.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/i;
    const { url } = this.state;
    const match = urlRegex.test(url);
    if ( match ){
      fetch('http://localhost:8000/articles/create_article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ article_url: url})
      }).then( res => this.setState({warning: null, modal: false}))



    } else {
       this.setState({warning: "the input must be a URL"})
    }
  }

  render(){
    const { classes } = this.props;
    const {warning} = this.state;

    const label = this.props.label;

    // const voteValue = this.props.voteValue;
    return (

      <span>
        <span className={classes.link} onClick={() => this.handleClickOpen("modal")}>{label}</span>


        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
          keepMounted
          onClose={() => this.handleClose("modal")}
          aria-labelledby="modal-slide-title"
          aria-describedby="modal-slide-description">
          <DialogTitle
            id="classic-modal-slide-title"
            disableTypography
            className={classes.modalHeader}>
            <IconButton
              className={classes.modalCloseButton}
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={() => this.handleClose("modal")}>
              <Close className={classes.modalClose} />
            </IconButton>

            <h4 className={classes.text}>Please input a URL to an article</h4>
          </DialogTitle>
          <DialogContent >
          <div >
          <TextField className={classes.textField}
                InputProps={{
                  className: classes.input,
                  placeholder: "Enter a URL here"
                }}
                fullWidth
                onKeyUp={this.onEnterPress}
                onChange={this.handleURL}
                />
                <p>{warning}</p>
          </div>
          </DialogContent>
          <DialogActions
            className={classes.modalFooter +" " +classes.modalFooterCenter}>
            <Button
              color="danger"
              onClick={this.createArticle}
            >
              Create
            </Button>
            <Button
              color="danger"
              onClick={this.handleClose}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </span>
    );
  }
}

export default withStyles(modalStyle)(VoteCard);
