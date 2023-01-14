import { useAppContext } from 'components/App';
import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = () => {
  const { stat, countPositiveFeedbackPercentage, countTotalFeedback } =
    useAppContext();
  if (countTotalFeedback === undefined) {
    return <Notification />;
  } else
    return (
      <ul className={css.list}>
        <li>good: {stat.good}</li>
        <li>neutral: {stat.neutral}</li>
        <li>bad: {stat.bad}</li>
        <li>Total: {countTotalFeedback}</li>
        <li>
          Positive:{' '}
          {isNaN(countPositiveFeedbackPercentage())
            ? 0
            : countPositiveFeedbackPercentage()}{' '}
          %
        </li>
      </ul>
    );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
  }),
  total: PropTypes.number,
  positive: PropTypes.number,
};
