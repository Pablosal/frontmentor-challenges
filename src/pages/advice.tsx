import * as React from 'react';
import AdviceButton from '../components/advice_button/advice_button';
import './advice.scss';

type Advice = {
  id: string;
  advice: string;
};
const AdvicePage = () => {
  const [advice, setAdvice] = React.useState<Advice>();
  async function getAdvice() {
    fetch('https://api.adviceslip.com/advice')
      .then((res) => res.json())
      .then(({ slip }) => setAdvice(slip));
  }
  React.useEffect(() => {
    getAdvice();
  }, []);
  if (typeof advice !== 'object') return <h1>Loading</h1>;
  return (
    <main className="advice--card">
      <span className="advice--card--header"> ADVICE #{advice.id}</span>
      <blockquote>
        <p className="advice--card--content">&ldquo;{advice.advice}&rdquo;</p>
      </blockquote>
      <div className="advice--card--separator"></div>
      <AdviceButton handleClick={getAdvice} />
    </main>
  );
};

export default AdvicePage;
