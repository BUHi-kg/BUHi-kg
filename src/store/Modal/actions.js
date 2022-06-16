import * as actions from './actionTypes';
import axios from 'axios';

const API_URL = '';

export const actionModal = {
  setCloseModal: (payload) => ({
    type:actions.CLOSE_MODAL,
    payload
  }),

  
}

// export const setFetchingClients = () => ({
//   type: actions.FETCH_USERS
// });

// export const setClients = (data) => ({
//   type: actions.RECEIVE_USERS,
//   payload: data
// });

// export const fetchProducts = () => (dispatch) => {
//   dispatch(setFetchingClients());

//   axios.get(`${API_URL}/clients/`)
//     .then(function (response) {
//       dispatch(setClients(response.data))
//     })  
// };

// export const saveClients = (product) => async (dispatch) => {  
//   const response = await axios.post(`${API_URL}/create_apps/`, product);
//   dispatch({
//     type: actions.CREATE_PRODUCT,
//     payload: response.data
//   })
// };

