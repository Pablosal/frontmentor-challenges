import { useEffect } from 'react';
import Form from '../components/multi_form_components/form/form';
import Plan from '../components/multi_form_components/plan/plan';
import Services from '../components/multi_form_components/services/services';
import StepsWidgets from '../components/multi_form_components/steps_widget/steps_widgets';
import StepButtons from '../components/multi_form_components/step_buttons/step_buttons';
import StepTitle from '../components/multi_form_components/step_title/step_title';
import Summary from '../components/multi_form_components/summary/summary';
import useStep from '../utils/hooks/useStep';
import './multi_form.sass';
interface IMultiFormContent {
  step: number;
}
const MultiFormContent = ({ step }: IMultiFormContent) => {
  switch (step) {
    case 1:
      return <Form />;
    case 2:
      return <Plan/>
    case 3:
      return <Services/>
    case 4:
      return <Summary/>
    default:
      return <h1>Hola</h1>;
      break;
  }
};

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
          title={stepInfo?.mainTitle}
          subtitle={stepInfo?.mainSubtitle}
        />

        <div className="content">
          <MultiFormContent step={step} />
        </div>
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
