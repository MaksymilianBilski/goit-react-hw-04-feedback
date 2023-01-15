import { useState } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { FeedbackContext } from './context/FeedbackContext/FeedbackContext';

export const App = () => {
  const [stat, setStat] = useState({ good: 0, neutral: 0, bad: 0 });
  let total = 0;
  const options = Object.keys(stat);
  const countTotalFeedback = () => {
    if (Object.values(stat).some(val => val > 0)) {
      total = Object.values(stat).reduce((pV, num) => {
        return (pV += num);
      }, 0);
      return total;
    }
  };
  const countPositiveFeedbackPercentage = () => {
    const sum = Object.values(stat).reduce((pV, num) => {
      return (pV += num);
    }, 0);
    const positiveSum = (stat.good / sum).toFixed(2);
    return Number(positiveSum);
  };

  const add = evt => {
    setStat(prevState => {
      return { ...prevState, [evt]: prevState[evt] + 1 };
    });
  };
  const buttonClick = evt => {
    const btnName = evt.target.textContent;
    add(btnName);
  };

  return (
    <div>
      <FeedbackContext.Provider
        value={{
          add,
          buttonClick,
          countPositiveFeedbackPercentage,
          countTotalFeedback,
          stat,
          options,
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions buttonClick={buttonClick} options={options} />
        </Section>
        <Section title="Statistics">
          <Statistics
            stats={stat}
            positive={countPositiveFeedbackPercentage()}
            total={countTotalFeedback()}
          />
        </Section>
      </FeedbackContext.Provider>
    </div>
  );
};
FeedbackContext.Provider.propTypes = {
  add: PropTypes.func,
  buttonClick: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  stat: PropTypes.object,
  options: PropTypes.array,
};
