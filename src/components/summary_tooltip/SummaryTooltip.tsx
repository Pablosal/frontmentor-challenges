import * as React from 'react';
import './SummaryTooltip.scss';
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
        {score.current}/{score.total}
      </div>
    </div>
  );
};

export default SummaryTooltip;
