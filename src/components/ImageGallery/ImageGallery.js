// import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import apiService from '../../services/apiService';
// import Button from '../Button/Button';

import s from '../ImageGallery/ImageGallery.module.css';

export default function ImageGallery({ images, onOpenModal }) {
  // const { images, handleLoadeMore,onOpenModal } = this.props;
  return (
    <>
      <ul className={s.ImageGallery}>
        {images.map(image => (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            tags={image.tags}
            largeImageURL={image.largeImageURL}
            onOpenModal={onOpenModal}
          />
        ))}
      </ul>
    </>
  );
}
