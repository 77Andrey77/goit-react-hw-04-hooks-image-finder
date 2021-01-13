import axios from 'axios';

// function apiService(searchName, page) {
//   return fetch(
//     `https://pixabay.com/api/?q=${searchName}&page=${page}&key=19032313-4dd4b1c57c2e902bf9f549139&image_type=photo&orientation=horizontal&per_page=12`,
//   ).then(response => {
//     if (response.ok) {
//       return response.data.hits;
//     }
//     return Promise.reject(new Error('Something is wrong, please try again'));
//   });
// }

// export default apiService;

const apiService = (searchName, page) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchName}&page=${page}&key=19032313-4dd4b1c57c2e902bf9f549139&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data);
};
export default apiService;
