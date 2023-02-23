import { Link } from 'react-router-dom';
import CardTag from '../card_tag/card_tag';
import './challenge_card.sass';
interface IChallengeCard {
  proyect_name: string;
  path: string;
  image: string;
}
const ChallengeCard = ({ proyect_name, path, image }: IChallengeCard) => {
  return (
    <article className="challenge--card">
      <h3 className="challenge--card__title">{proyect_name}</h3>
      <div className="challenge--card__imageContainer">
        <img
          className="challenge--card__image"
          src={image}
          alt={proyect_name}
        />
      </div>
      <div className="challenge--card__footer">
        <CardTag text="Image to code" backgroundColor="#06d6a0"></CardTag>
        <CardTag text="Single Item" backgroundColor="#9A275A"></CardTag>
        <br />
        <Link className="challenge--card__button" to={path}>
          See Proyect
        </Link>
      </div>
    </article>
  );
};

export default ChallengeCard;
