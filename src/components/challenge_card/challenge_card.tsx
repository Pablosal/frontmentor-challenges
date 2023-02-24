import * as React from 'react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './challenge_card.sass';
interface IChallengeCard {
  proyect_name: string;
  path: string;
  image: string;
  cardTags: ReactNode;
}

const ChallengeCard = ({
  proyect_name,
  path,
  image,
  cardTags,
}: IChallengeCard) => {
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
        {cardTags}
        <br />
        <Link className="challenge--card__button" to={path}>
          See Proyect
        </Link>
      </div>
    </article>
  );
};

export default ChallengeCard;
