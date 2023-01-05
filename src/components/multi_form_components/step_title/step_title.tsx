import './step_title.sass';
interface IStepTitle {
  title: string;
  subtitle: string;
}
const StepTitle = ({ subtitle, title }: IStepTitle) => {
  return (
    <div className="step-title__container">
      <h1 className="step-title__title">{title}</h1>
      <h3 className="step-title__subtitle">{subtitle}</h3>
    </div>
  );
};

export default StepTitle;
