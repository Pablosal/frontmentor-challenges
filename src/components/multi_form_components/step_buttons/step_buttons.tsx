import './step_buttons.sass';
interface IStepButtons {
  step: number;
  prevStep: () => void;
  nextStep: () => void;
}
const StepButtons = ({ step, nextStep, prevStep }: IStepButtons) => {
  return (
    <div className="step-button__container">
      {step > 1 && (
        <button className="step-button-secondary" onClick={prevStep}>
          Go Back
        </button>
      )}
      <button className="step-button-primary" onClick={nextStep}>
        {step === 4 ? 'Confirm' : 'Next Step'}
      </button>
    </div>
  );
};

export default StepButtons;
