import * as React from 'react';
import AdviceButton from '../components/advice_button/advice_button';
// import
import './advice.scss';
interface adviceProps {}

type Advice = {
  id: String;
  advice: String;
};
const AdvicePage = ({}: adviceProps) => {
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
        <p className="advice--card--content">"{advice.advice}</p>
      </blockquote>
      <div className="advice--card--separator"></div>
      <AdviceButton handleClick={getAdvice} />
    </main>
  );
};

export default AdvicePage;
