import { useEffect } from 'react';
import StepsWidgets from '../components/multi_form_components/steps_widget/steps_widgets';
import StepButtons from '../components/multi_form_components/step_buttons/step_buttons';
import StepTitle from '../components/multi_form_components/step_title/step_title';
import useStep from '../utils/hooks/useStep';
import './multi_form.sass';
const MultiFormPage = () => {
  const [step, stepInfo, nextStep, prevStep] = useStep();
  useEffect(() => {
    console.log({ step, stepInfo });
  }, [step]);

  return (
    <div className="form__container">
      <aside className="form__sidebar">
        <StepsWidgets step={step} />
      </aside>
      <main className="form__content">
        <StepTitle
          title="Personal info"
          subtitle=" Please provide your name, email address, and phone number."
        />
        <div className="content"></div>
        <StepButtons nextStep={nextStep} prevStep={prevStep} />
      </main>
    </div>
  );
};

{
  /* <div className="attribution">
  Challenge by{' '}
  <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
    Frontend Mentor
  </a>
  . Coded by <a href="#">Pablo Salgado</a>.
</div> */
}
export default MultiFormPage;
