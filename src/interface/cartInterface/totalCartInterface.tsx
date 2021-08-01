import React from 'react';
import { CourseInterface } from '../courseInterface';

export interface TotalCartInterface {
    cartList : CourseInterface[];
    totalCart : number;
    modalCheckOut : () => void;
    isModalState : boolean;
    modalResponse : (message : string, response :string) => void;
}
