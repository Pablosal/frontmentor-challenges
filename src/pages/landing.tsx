import ChallengeCard from '../components/challenge_card/challenge_card';
// import summaryImageM from '../assets/summary_images/mobile-design.jpg';
import summaryImageD from '../assets/summary_images/desktop-design.webp';
import qrImageM from '../assets/qr_images/mobile-design.webp';
import adviceImageM from '../assets/advice_images/mobile-design.jpg';
import './landing.sass';
import CardTag from '../components/card_tag/card_tag';

const proyects = [
  {
    id: crypto.randomUUID(),
    image: qrImageM,
    proyect_name: 'QR Card',
    path: 'QR-challenge',
    cardTags: (
      <>
        <CardTag text="Image to code" backgroundColor="#06d6a0" />
        <CardTag text="Single Item" backgroundColor="#9A275A" />
      </>
    ),
  },
  {
    id: crypto.randomUUID(),
    image: summaryImageD,
    proyect_name: 'Summary Main Component',
    path: 'summary-challenge',
    cardTags: (
      <>
        <CardTag text="Image to code" backgroundColor="#06d6a0" />
        <CardTag text="Single Item" backgroundColor="#9A275A" />
      </>
    ),
  },
  {
    id: crypto.randomUUID(),
    image: adviceImageM,
    proyect_name: 'Advice generator app',
    path: 'advice-challenge',
    cardTags: (
      <>
        <CardTag text="Image to code" backgroundColor="#06d6a0" />
        <CardTag text="Single Item" backgroundColor="#9A275A" />
      </>
    ),
  },
];
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
      <div className="landing__cardsContainer">
        {proyects.map((proyect) => (
          <ChallengeCard
            key={proyect.id}
            cardTags={proyect.cardTags}
            image={proyect.image}
            proyect_name={proyect.proyect_name}
            path={proyect.path}
          />
        ))}
      </div>
    </div>
  );
};

export default Landing;
