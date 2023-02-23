import * as React from 'react';
import './advice_button.scss';
import dice from '../../assets/advice_images/icon-dice.svg';
interface AdviceButtonProps {
  handleClick: () => void;
}
const AdviceButton = ({ handleClick }: AdviceButtonProps) => {
  return (
    <button className="advice--button" onClick={handleClick}>
      <img src={dice} alt="dice" />
    </button>
  );
};

export default AdviceButton;
