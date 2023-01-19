import { useContext, createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FeedbackContext = createContext();
export const useFeedbackContext = () => useContext(FeedbackContext);

const FeedbackContextProvider = ({ children }) => {
  const [stat, setStat] = useState({ good: 0, neutral: 0, bad: 0 });
  const options = Object.keys(stat);
  const countTotalFeedback = () => {
    if (Object.values(stat).some(val => val > 0)) {
      let total = Object.values(stat).reduce((pV, num) => {
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
  const addFeedback = option => {
    add(option);
  };
  return (
    <FeedbackContext.Provider
      value={{
        addFeedback,
        countPositiveFeedbackPercentage,
        countTotalFeedback,
        options,
        stat,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
FeedbackContextProvider.propTypes = {
  add: PropTypes.func,
  addFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  stat: PropTypes.objectOf(PropTypes.number),
  options: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackContextProvider;
