import './step_buttons.sass';
interface IStepButtons {
  prevStep: () => void;
  nextStep: () => void;
}
const StepButtons = ({ nextStep, prevStep }: IStepButtons) => {
  return (
    <div className="step-button__container">
      <button className="step-button-secondary" onClick={prevStep}>
        Go Back
      </button>
      <button className="step-button-primary" onClick={nextStep}>
        Next Step
      </button>
    </div>
  );
};

export default StepButtons;
