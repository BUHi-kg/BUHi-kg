import * as actions from './actionTypes';

const initialState = {
  modalopening: false,
}

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CLOSE_MODAL:
      return {
        ...state,
        modalopening: action.modalopening,
      }
      
    // case actions.FETCH_USERS:
    //   return {
    //     ...state,
    //     clientsFetching: true
    //   };

    // case actions.CREATE_USERS:
    //   return {
    //     ...state,
    //     clients: [...state.clients, action.payload],
    //   };


    default:
      return state;
  }
}

export default modalReducer