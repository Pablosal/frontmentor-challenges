import './card_tag.sass';
interface ICardTag {
  text: string;
  backgroundColor: string;
}
const CardTag = ({ text, backgroundColor }: ICardTag) => {
  return (
    <span className="tag" style={{ backgroundColor }}>
      {text}
    </span>
  );
};

export default CardTag;
