import React, { useEffect } from 'react';
import './style.scss';
const Modal = ({ open, setOpen, message }) => {
  useEffect(() => {
    if (document.getElementById('myModal')) {
      let modal = document.getElementById('myModal');
      window.onclick = function (event) {
        if (event.target === modal) {
          setOpen(false);
        }
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  return (
    <>
      {open && (
        <div id='myModal' className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setOpen(false)}>
              &times;
            </span>
            <p>{message}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
