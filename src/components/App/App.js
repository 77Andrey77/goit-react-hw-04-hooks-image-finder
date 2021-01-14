import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useState, useEffect } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';

import apiService from '../../servises/apiService';

import './App.css';
// import { check } from 'prettier';

export default function App() {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [picturesAre, setPicturesAre] = useState(false);

  // state = {
  //   searchName: '',
  //   images: [],
  //   page: 1,
  //   loading: false,
  //   showModal: false,
  //   largeImageURL: '',
  // };

  useEffect(() => {
    if (searchName === '') {
      return;
    }

    setLoading(true);

    apiService(searchName, page)
      .then(data => {
        setImages(prevState => [...prevState, ...data.hits]);
        scrollGalerey();

        totalImages(data.totalHits, data.hits.length);
      })
      // apiService
      //   .fetchImagesWithQuery(searchName, page)
      //   .then(response => {
      //     setImages(images => [...images, ...response]);
      //   })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [searchName, page]);

  function totalImages(total, curr) {
    if (total > (page - 1) * 12 + curr) {
      setPicturesAre(true);
      // console.log(total);
      // console.log(page);
      // console.log(curr);
      // console.log((page - 1) * 12 + curr);
    } else {
      setPicturesAre(false);
    }
  }

  /////////////////////// проверяем изменение запроса
  // componentDidUpdate(prevProps, prevState) {
  //   const prevName = prevState.searchName;
  //   const nextName = this.state.searchName;

  //   if (prevName !== nextName) {
  //     console.log('изменился запрос');
  //     this.setState({ loading: true });

  //     this.fetchImages();
  //   }

  // if (prevState.page !== this.state.page) {
  //   window.scrollTo({
  //     top: document.documentElement.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // }
  // }

  /////////////////////////записывает из формы значение иcкомого в state
  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
    setImages([]);
    // this.setState({ searchName: searchName, page: 1, images: [] });
  };

  ///////////////////////////////////Api

  // function fetchImages() {
  //   if (searchName === '') {
  //     return;
  //   }

  //   setLoading(true);

  //   apiService
  //     .fetchImagesWithQuery(searchName)
  //     .then(response => {
  //       setImages([...images, ...response.hits]);
  //       // setPage(page + 1);
  //     })
  //     .catch(error => console.log(error))
  //     .finally(() => setLoading(false));
  // }
  //////////////////////////////////////////
  // toggleLoader = () => {
  //   this.setState(({ loading }) => ({ loading: !loading }));
  // };

  ////////////////////////// loade more
  const handleLoadeMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  ////////////////////////////////
  const onOpenModal = e => {
    setLargeImageURL(e.target.dataset.source);
    // this.setState({ largeImageURL: e.target.dataset.source });
    setShowModal(true);
  };

  ///////////////////////////////change modal
  const closeModal = () => {
    setShowModal(false);
    setLargeImageURL('');
    // this.setState(({ showModal }) => ({
    //   showModal: !showModal,
    // }));
  };
  ////////////////////////////////////////

  const scrollGalerey = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };
  /////////////////////////////////////////////

  // const { images, showModal, largeImageURL, loading } = this.state;
  return (
    <div>
      <Searchbar onSubmit={handleFormSubmit} />

      {images.length > 0 && (
        <ImageGallery
          images={images}
          handleLoadeMore={handleLoadeMore}
          onOpenModal={onOpenModal}
        />
      )}

      {loading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
          style={{ textAlign: 'center' }}
        />
      )}

      {!loading && picturesAre && <Button onClick={handleLoadeMore} />}

      {showModal && (
        <Modal onClose={closeModal} largeImageURL={largeImageURL} />
      )}
    </div>
  );
}

// onToggleModal={this.toggleModal}
//             largeImageURL={this.state.largeImageURL}
