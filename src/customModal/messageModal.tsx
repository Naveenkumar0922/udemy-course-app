import React from 'react';
import { useHistory } from 'react-router-dom';
import "../customModal/messageModal.css";
import { ModalStateInterface } from '../interface/modalStateInterface';

function MessageModal(props: ModalStateInterface){
    const history = useHistory();
    const handleOk = ((e : React.MouseEvent<HTMLElement>) => {
        console.log('here---')
       props.closeModal();
    });
    return(
        <div className="modal-window">
            <div className="modal-content">
                <div className="modal-header">
                    <span className="close-btn cpointer" onClick={handleOk}>
                        &times;
                    </span>
                </div>
                <div className="modal-body">
                    <div className="modal-flex">
                        <div>{props.modalIcon === "tick" ?
                            <img src="/files/images/succes-tick.svg" alt="success" /> : 
                            <img src="/files/images/error-icon.svg" alt="error" />
                         }
                        </div>
                        <div className="modal-msg">
                            {props.modalMessage}
                        </div>
                    </div>
                    <div className="modal-btn">
                        <button type="button" className="btn-ok" onClick={handleOk}><span className="btn-text">OK</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MessageModal;
