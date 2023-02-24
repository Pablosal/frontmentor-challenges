import * as React from 'react';
import { createPortal } from 'react-dom';
import './modal.scss';
interface ModalProps {
  children: React.ReactNode;
}
// hola

const ModalBody = ({ children }: ModalProps) => {
  return <div className="modal">{children}</div>;
};

const Modal = ({ children }: ModalProps) => {
  return createPortal(
    <ModalBody>{children}</ModalBody>,
    document.getElementById('modal') as HTMLElement
  );
};

export default Modal;
