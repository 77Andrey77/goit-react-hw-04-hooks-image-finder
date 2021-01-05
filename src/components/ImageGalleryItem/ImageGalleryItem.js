import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

// import Modal from '../Modal/Modal';

// const ImageGalleryItem = ({ id, webformatURL, tags, largeImageURL }) => {
//   return (
//     <li className={s.ImageGalleryItem} key={id}>
//       <img
//         src={webformatURL}
//         alt={tags}
//         data-url={largeImageURL}
//         className={s.ImageGalleryItemImage}
//       />
//     </li>
//   );
// };
// export default ImageGalleryItem;

export default class ImageGalleryItem extends Component {
  render() {
    const { id, webformatURL, tags, largeImageURL, onOpenModal } = this.props;

    return (
      <li className={s.ImageGalleryItem} key={id}>
        <img
          onClick={onOpenModal}
          src={webformatURL}
          alt={tags}
          data-source={largeImageURL}
          className={s.ImageGalleryItemImage}
        />
      </li>
    );
  }
}
ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
