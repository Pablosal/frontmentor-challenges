import { useEffect, useState } from 'react';
type StepInfo = {
  title: string;
  mainTitle: string;
  mainSubtitle: string;
};
const steps = {
  1: {
    title: 'YOUR INFO',
    mainTitle: 'Personal Info',
    mainSubtitle: 'Please provide your name, email address, and phone number',
  },
  2: {
    title: 'SELECT PLAN',
    mainTitle: 'Select your plan',
    mainSubtitle: 'You have the option of monthly or year billing',
  },
  3: {
    title: 'ADD ONS',
    mainTitle: 'Pick add-ons',
    mainSubtitle: 'Add-ons help enhace your gaming experience',
  },
  4: {
    title: 'SUMMARY',
    mainTitle: 'Finishing up',
    mainSubtitle: 'Double-check everything looks ok before confirming',
  },
};
const useStep = () => {
  let [step, setStep] = useState<number>(1);
  const [stepInfo, setStepInfo] = useState<StepInfo>();

  useEffect(() => {
    console.log({step});
    setStepInfo(steps[step]);
    
  }, [step]);

  function nextStep() {
    if (step < 5) setStep((step) => step +1);
  }
  function prevStep() {
    if (step > 1) setStep((step) => step -1);
  }
  return [step, stepInfo, nextStep, prevStep] as const;
};

export default useStep;
