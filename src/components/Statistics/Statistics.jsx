import React, { Component } from 'react';
import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    if (this.props.total === undefined) {
      return <Notification />;
    } else
      return (
        <ul className={css.list}>
          <li>good: {this.props.stats.good}</li>
          <li>neutral: {this.props.stats.neutral}</li>
          <li>bad: {this.props.stats.bad}</li>
          <li>Total: {this.props.total}</li>
          <li>
            Positive: {isNaN(this.props.positive) ? 0 : this.props.positive} %
          </li>
        </ul>
      );
  }
}

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
  }),
  total: PropTypes.number,
  positive: PropTypes.number,
};
