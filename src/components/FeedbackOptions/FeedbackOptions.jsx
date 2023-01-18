import { useFeedbackContext } from 'components/context/FeedbackContext';
import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid';

export const FeedbackOptions = () => {
  const { options, addFeedback } = useFeedbackContext();
  return options.map(btn => (
    <button
      key={nanoid()}
      className={css.button}
      type="button"
      onClick={addFeedback}
    >
      {btn}
    </button>
  ));
};
