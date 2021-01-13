import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import s from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ largeImageURL, onClose }) {
  // const componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }

  // const componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      window.addEventListener('keydown', handleKeyDown);
      isFirstRender.current = false;
      return;
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  // const { largeImageURL } = this.props;
  return createPortal(
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={largeImageURL} alt="" className={s.ImageGalleryItemImage} />
      </div>
    </div>,
    modalRoot,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

/* <img src={src} alt={alt} className={s.ImageGalleryItemImage} />; */
