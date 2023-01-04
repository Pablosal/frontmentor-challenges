import './qr.sass';
import QRImage from '../assets/qr_images/image-qr-code.webp';
import Mobile_QRImage from '../assets/qr_images/image-qr-code.png';
import { Link } from 'react-router-dom';
const QR = () => {
  return (
    <article className="card">
      <header className="card__header">
        <Link
          target={'_blank'}
          to={
            'https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H'
          }
        >
          <img
            src={QRImage}
            width="100%"
            alt=""
            className="card__image"
            srcSet={`${Mobile_QRImage} 300w, ${QRImage} 500w`}
          />
        </Link>
      </header>
      <footer className="card__footer">
        <h2 className="card__title">
          Improve your front-end <br /> skills by building projects
        </h2>
        <p className="card__subtitle">
          Scan the QR code to visit Frontend <br /> Mentor and take your coding
          skills to <br /> the next level
        </p>
      </footer>
    </article>
  );
};

export default QR;
