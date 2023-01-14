import { useAppContext } from 'components/App';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = () => {
  const { options, buttonClick } = useAppContext();
  return options.map(btn => (
    <button className={css.button} type="button" onClick={buttonClick}>
      {btn}
    </button>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};
