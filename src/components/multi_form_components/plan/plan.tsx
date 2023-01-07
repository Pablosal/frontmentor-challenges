import './plan.sass';
import guyIcon from '../../../assets/multi_form_images/icon-arcade.svg';
import advancedIcon from '../../../assets/multi_form_images/icon-advanced.svg';
import proIcon from '../../../assets/multi_form_images/icon-pro.svg';
const Plan = () => {
  return (
    <div className="plan__container">
      <div className="plan_flex">
        <PlanCard icon={guyIcon} type="Arcade" payment="$9/mo" />
        <PlanCard icon={advancedIcon} type="Advanced" payment="$12/mo" />
        <PlanCard icon={proIcon} type="Arcade" payment="$15/mo" />
      </div>
      <footer className="plan__footer">
        <PlanTimeWidget />
      </footer>
    </div>
  );
};
interface IPlanCard {
  icon: string;
  type: string;
  payment: string;
}
const PlanCard = ({ icon, type, payment }: IPlanCard) => {
  return (
    <div className="plan__card">
      <div className="plan__card-icon">
        <img src={icon} alt="" />
      </div>

      <div className="plan__card-info">
        <span className="plan__card-type">{type}</span>
        <span className="plan__card-payment">{payment}</span>
      </div>
    </div>
  );
};
const PlanTimeWidget = () => {
  return (
    <div className="plan__widget-container">
      <span>Monthly</span>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <span> Pro</span>
    </div>
  );
};
export default Plan;
