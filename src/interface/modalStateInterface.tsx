import React from 'react';

export interface ModalStateInterface {
    modalIcon : String;
    modalMessage : String;
    closeModal : () => void;
}