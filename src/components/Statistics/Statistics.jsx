import React, { Component } from 'react';
import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { stats, total, positive } = this.props;
    if (this.props.total === undefined) {
      return <Notification />;
    } else
      return (
        <ul className={css.list}>
          <li>good: {stats.good}</li>
          <li>neutral: {stats.neutral}</li>
          <li>bad: {stats.bad}</li>
          <li>Total: {total}</li>
          <li>Positive: {isNaN(positive) ? 0 : positive} %</li>
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
