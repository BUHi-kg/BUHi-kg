import React from 'react';
import styles from './Modal.module.css';

function Modal({ close, children }) {

//   const dispatch = useDispatch();

//   const close = () =>{
//     const modalopening = false;

//     dispatch(actionModal.setCloseModal(modalopening))
// }


  return (
    <div className={styles.modal} onClick={close}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
export default Modal;