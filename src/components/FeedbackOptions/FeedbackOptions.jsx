import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export class FeedbackOptions extends Component {
  render() {
    return this.props.options.map(btn => (
      <button
        className={css.button}
        type="button"
        onClick={this.props.buttonClick}
      >
        {btn}
      </button>
    ));
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};
