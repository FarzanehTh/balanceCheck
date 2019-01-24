import React from 'react';
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
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
import RadioButtons from './RadioButtons';
import {Redirect} from 'react-router';


function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class VoteCard extends React.Component{
constructor(props) {
    super(props);
    this.state = {
      modal: false,
      voteValue: undefined,
      warning: null,
      redirect: false
    };
    this.handleVote = this.handleVote.bind(this);
    this.createVote = this.createVote.bind(this);
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClickOpen() {
    this.setState({modal: true});
  }
  handleClose() {
    this.setState({modal: false});
  }

  handleVote(voteValue){
    this.setState({voteValue: voteValue});
  }

  createVote(){
    if (this.state.voteValue !== undefined){
      const url = this.props.articleUrl;
      const { voteValue } = this.state;
      fetch('http://localhost:8000/vote/create_vote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          "vote_value": voteValue,
          "article_url": url
       })
      }).then( () => this.setState({warning: null, modal: false, redirect: true}))
    } else {
      this.setState({warning: "Please select a vote value"})
    }
  }

  render(){
    const { classes } = this.props;
    const { redirect } = this.state;
    if (redirect) {
        return <Redirect to='/'/>
    }

    return (
      <div>
        <Button
          color="danger"
         // round
          onClick={() => this.handleClickOpen("modal")}>
          VOTE NOW!
        </Button>
        <Dialog
          classes={{
            root: classes.center,
            paper: classes.modal
          }}
          open={this.state.modal}
          TransitionComponent={Transition}
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

            <h4 className={classes.modalTitle}>{this.props.articleTitle}</h4>
          </DialogTitle>

          <DialogContent>
            <div textAlign={"center"}>
          <RadioButtons onVoteChange={this.handleVote}></RadioButtons>
          </div>
          </DialogContent>

          <DialogActions
            className={classes.modalFooter +" " +classes.modalFooterCenter}>
            <Button
              color="danger"
              onClick={this.createVote}
            >
              Vote
            </Button>
            <Button
              color="danger"
              onClick={this.handleClose}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(modalStyle)(VoteCard);
