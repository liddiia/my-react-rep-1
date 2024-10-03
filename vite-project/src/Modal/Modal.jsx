import { useEffect, useState } from "react";

import css from "./Modal.module.css";

const Modal = ({ onCloseModal }) => {
  const [Count, setCount] = useState(0);
  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("UnMounted");
    };
  }, [Count]);
  return (
    <div className={css.backdrop}>
      <div className={css.modalBody}>
        <h1 className={css.modalTitle}>modal</h1>
        <button onClick={onCloseModal} className={css.modalCloseButton}>
          &#10060;
        </button>
        <p className={css.modalText}>Text modal</p>
    
        <button className={css.modalButton} onClick={() => setCount(Count + 1)}>
 
          Click me {Count}
        </button>
      </div>
    </div>
  );
};

export default Modal;
