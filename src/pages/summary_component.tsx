import * as React from 'react';
import ReactionIcon from '../assets/summary_images/icon-reaction.svg';
import MemoryIcon from '../assets/summary_images/icon-memory.svg';
import VerbalIcon from '../assets/summary_images/icon-verbal.svg';
import VisualIcon from '../assets/summary_images/icon-visual.svg';
import SummaryTooltip from '../components/summary_tooltip/summary_tooltip';
import './summary_component.scss';
const SummaryComponent = () => {
  return (
    <main className="summary">
      <div className="summary--side">
        <h2 className="summary--side--title">Your Result</h2>
        <div className="summary--score">
          <span className="summary--score__top">76</span>
          <span className="summary--score__bottom">of 100</span>
        </div>
        <h2 className="summary--score--title">Great</h2>
        <p className="summary--score--paragraph">
          You scored higher than 65% of <br />
          the people who have taken <br />
          these tests.
        </p>
      </div>
      <div className="summary--description">
        <h2 className="summary--description--title">Summary</h2>
        <SummaryTooltip
          backgroundClass="summaryTooltip--red"
          icon={ReactionIcon}
          score={{ current: 80, total: 100 }}
          title="Reaction"
        />
        <SummaryTooltip
          backgroundClass="summaryTooltip--orange"
          icon={MemoryIcon}
          score={{ current: 92, total: 100 }}
          title="Memory"
        />
        <SummaryTooltip
          backgroundClass="summaryTooltip--green"
          icon={VerbalIcon}
          score={{ current: 61, total: 100 }}
          title="Verbal"
        />
        <SummaryTooltip
          backgroundClass="summaryTooltip--blue"
          icon={VisualIcon}
          score={{ current: 72, total: 100 }}
          title="Visual"
        />
        <button className="summary--description--button">Continue</button>
      </div>
    </main>
  );
};

export default SummaryComponent;
