import './step.sass';
interface IStep {
  title: string;
  step: number;
  currentStep: number;
}
const Step = ({ title, step, currentStep }: IStep) => {
  return (
    <div className="step__container">
      <div
        className={`step__number ${
          currentStep === step ? 'step__number-selected' : ''
        }`}
      >
        <span>{step}</span>
      </div>
      <div className="step__subcontainer">
        <div className="step__count">
          <span>STEP {step}</span>
        </div>
        <h4 className="step__title">{title}</h4>
      </div>
    </div>
  );
};

export default Step;
