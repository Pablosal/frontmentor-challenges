import { ElementType } from 'react';
import { Link } from 'react-router-dom';
import CardTag from '../card_tag/card_tag';
import './challenge_card.sass';
interface IChallengeCard {
  proyect_name: string;
  path: string;
  render: any;
}
const ChallengeCard = ({ proyect_name, path, render }: IChallengeCard) => {
  return (
    <article className="challenge_card">
      <h3 className="challenge_card__title">{proyect_name}</h3>
      <div className="challenge_card__footer">
        {render()}
        <Link className="challenge_card__button" to={path}>
          See Proyect
        </Link>
      </div>
    </article>
  );
};

export default ChallengeCard;
