// Modal.js
import React from 'react';
import '../Modal.css'; // Create a CSS file for modal styles

const Modal = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={imageSrc} alt="Modal" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;