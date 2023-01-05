import Step from '../step/step';
import './step_widgets.sass';
interface IStepsWidgets {
  step: number;
}
const StepsWidgets = ({ step }: IStepsWidgets) => {
  return (
    <div className="step-widgets__container">
      <Step step={1} title="YOUR INFO" currentStep={step} />
      <Step step={2} title="SELECT PLAN"  currentStep={step}/>
      <Step step={3} title="ADD-ONS" currentStep={step} />
      <Step step={4} title="SUMMARY"  currentStep={step}/>
    </div>
  );
};

export default StepsWidgets;
