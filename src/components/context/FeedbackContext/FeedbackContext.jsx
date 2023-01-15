import { useContext, createContext } from 'react';

export const FeedbackContext = createContext();
export const useFeedbackContext = () => useContext(FeedbackContext);
