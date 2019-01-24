import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';

import FormControlLabel from '@material-ui/core/FormControlLabel';

class RadioButtons extends React.Component {
    
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
    state = {
      selectedValue: undefined,
    };
  
    handleChange = event => {
      this.setState({ selectedValue: event.target.value });
      this.props.onVoteChange(event.target.value);
    };
  
    render() {
      return (
        <div>
          <div>
        <FormControlLabel
            value="top"
            control={<Radio
            checked={this.state.selectedValue === '1'}
            onChange={this.handleChange}
            value="1"
            color="green"
            aria-label="1"/>}
            label="Fake News"
            labelPlacement="top"
          />
          </div>
          <div>
          <FormControlLabel
            value="top"
            control={<Radio
            checked={this.state.selectedValue === '2'}
            onChange={this.handleChange}
            value="2"
            color="red"
            aria-label="2"/>}
            label="Distorts the story with a clear bias"
            labelPlacement="top"
          />
          </div>
          <div>
          <FormControlLabel
            value="top"
            control={<Radio
            checked={this.state.selectedValue === '3'}
            onChange={this.handleChange}
            value="3"
            color="red"
            aria-label="1"/>}
            label="Noticible bias"
            labelPlacement="top"
          />
          </div>
          <div>
          <FormControlLabel
            value="top"
            control={<Radio
            checked={this.state.selectedValue === '4'}
            onChange={this.handleChange}
            value="4"
            color="red"
            aria-label="1"/>}
            label="Fair but uneven representation"
            labelPlacement="top"
          />
          </div>
          <div>
          <FormControlLabel
            value="top"
            control={<Radio
            checked={this.state.selectedValue === '5'}
            onChange={this.handleChange}
            value="5"
            color="red"
            aria-label="1"/>}
            label="Fair and well balanced article"
            labelPlacement="top"
          />
          </div>
        </div>
      );
    }
  }
  
  RadioButtons.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default (RadioButtons);