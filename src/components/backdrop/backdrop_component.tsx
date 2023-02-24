import { createPortal } from 'react-dom';
import './Backdrop.scss';
interface BackdropProps {
  closeModal: () => void;
}

const BackdropBody = ({ closeModal }: BackdropProps) => {
  return <div className="backdrop" onClick={closeModal}></div>;
};
// Naming
const Backdrop = ({ closeModal }: BackdropProps) => {
  return createPortal(
    <BackdropBody closeModal={closeModal} />,
    document.getElementById('backdrop') as HTMLElement
  );
};
export default Backdrop;
