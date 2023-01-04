import ChallengeCard from '../components/challenge_card/challenge_card';
import './landing.sass';
const Landing = () => {
  return (
    <div className="landing__container">
      <h1 className="landing__title">Front End Challenges</h1>
      <div className="landing__paragraph-container">
        <p className="landing__paragraph">
          In this page you will find a{' '}
          <b>
            recompilation of created exercises to grow as front end dev in the
            art of the sneaky layouts
          </b>{' '}
          try for yourself being as pixel perfect as you can (maybe more
          functionality challenges in the future).
        </p>
        <p className="landing__paragraph">
          Every challenge will have a{' '}
          <b>tag according to its default page given difficulty.</b>
        </p>
        <p className="landing__paragraph">
          <b>
            Inside every project you will find a link to its original creator
          </b>{' '}
          so <b>you can start doing the challenges yourself</b> with the twist
          you wish to add
        </p>
      </div>
      <h3 className="landing__subtitle">Challenges Completed</h3>
      <ChallengeCard proyect_name="QR Card"  path='QR-challenge'/>
    </div>
  );
};

export default Landing;
