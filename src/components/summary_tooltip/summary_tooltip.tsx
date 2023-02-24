import * as React from 'react';
import './summary_tooltip.scss';
interface SummaryTooltipProps {
  icon: string;
  title: string;
  score: {
    current: number;
    total: number;
  };
  backgroundClass: string;
}
const SummaryTooltip = ({
  icon,
  title,
  score,
  backgroundClass,
}: SummaryTooltipProps) => {
  return (
    <div className={`summaryTooltip ${backgroundClass}`}>
      <div className="summaryTooltip--first">
        <img src={icon} alt="" />
        <span className="summaryTooltip--title">{title}</span>
      </div>
      <div className="summaryTooltip--score">
        {score.current}

        <span className="summaryTooltip--score__darker"> / {score.total}</span>
      </div>
    </div>
  );
};

export default SummaryTooltip;
