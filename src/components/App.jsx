import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useFeedbackContext } from './context/FeedbackContext/FeedbackContext';

export const App = () => {
  const {
    buttonClick,
    options,
    stat,
    countPositiveFeedbackPercentage,
    countTotalFeedback,
  } = useFeedbackContext();
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions buttonClick={buttonClick} options={options} />
      </Section>
      <Section title="Statistics">
        {Object.values(stat).some(el => el > 0) ? (
          <Statistics
            stats={stat}
            positive={countPositiveFeedbackPercentage()}
            total={countTotalFeedback()}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </div>
  );
};
