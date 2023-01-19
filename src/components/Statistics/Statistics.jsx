import { useFeedbackContext } from 'components/context/FeedbackContext';
import { Notification } from 'components/Notification/Notification';
import css from './Statistics.module.css';

export const Statistics = () => {
  const { stat, countPositiveFeedbackPercentage, countTotalFeedback } =
    useFeedbackContext();
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
          Positive:
          {isNaN(countPositiveFeedbackPercentage())
            ? 0
            : countPositiveFeedbackPercentage()}{' '}
          %
        </li>
      </ul>
    );
};
