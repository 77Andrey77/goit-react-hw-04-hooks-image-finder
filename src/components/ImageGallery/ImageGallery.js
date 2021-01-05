import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import apiService from '../../services/apiService';
import Button from '../Button/Button';

import s from '../ImageGallery/ImageGallery.module.css';

export default class ImageGallery extends Component {
  render() {
    const { images, handleLoadeMore } = this.props;
    return (
      <>
        <ul className={s.ImageGallery}>
          {images.map(image => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              tags={image.tags}
              largeImageURL={image.largeImageURL}
              onOpenModal={this.props.onOpenModal}
            />
          ))}
        </ul>
        <Button onClick={handleLoadeMore} />
      </>
    );
  }
}
