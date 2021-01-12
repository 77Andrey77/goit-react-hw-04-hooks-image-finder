import { useState, useEffect } from 'react';
import './App.css';
import Searchbar from '../Searchbar/Searchbar';
import apiService from '../../servises/apiService';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Button from '../Button/Button';

export default function App() {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
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
      .then(images => {
        setImages(state => [...state, ...images]);
        scrollGalerey();
      })
      // apiService
      //   .fetchImagesWithQuery(searchName, page)
      //   .then(response => {
      //     setImages(images => [...images, ...response]);
      //   })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [searchName, page]);

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
    setLoading(true);
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
    // fetchImages();-----------------
    setLoading(true);
    setPage(prevPage => prevPage + 1);
    scrollGalerey();
  };

  ////////////////////////////////
  const onOpenModal = e => {
    setLargeImageURL(e.target.dataset.source);
    // this.setState({ largeImageURL: e.target.dataset.source });
    toggleModal();
  };

  ///////////////////////////////change modal
  const toggleModal = () => {
    setShowModal(!showModal);
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

      {!loading && images.length > 11 && <Button onClick={handleLoadeMore} />}

      {showModal && (
        <Modal onClose={toggleModal} largeImageURL={largeImageURL} />
      )}
    </div>
  );
}

// onToggleModal={this.toggleModal}
//             largeImageURL={this.state.largeImageURL}
