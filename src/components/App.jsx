import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    if (Object.values(this.state).some(val => val > 0)) {
      this.total = Object.values(this.state).reduce((pV, num) => {
        return (pV += num);
      }, 0);
      return this.total;
    }
  };
  countPositiveFeedbackPercentage = () => {
    const sum = Object.values(this.state).reduce((pV, num) => {
      return (pV += num);
    }, 0);
    const positiveSum = (this.state.good / sum).toFixed(2);
    return Number(positiveSum);
  };

  add = evt =>
    this.setState(prevState => {
      return { [evt]: prevState[evt] + 1 };
    });
  buttonClick = evt => {
    this.add(evt.target.textContent);
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions buttonClick={this.buttonClick} options={options} />
        </Section>
        <Section title="Statistics">
          <Statistics
            stats={this.state}
            positive={this.countPositiveFeedbackPercentage()}
            total={this.countTotalFeedback()}
          />
        </Section>
      </div>
    );
  }
}
