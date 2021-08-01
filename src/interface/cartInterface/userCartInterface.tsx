import React from 'react';
import { CourseInterface } from '../courseInterface';

export interface UserCartInterface {
    cartList : CourseInterface[];
    totalCart : number;
    modalCheckOut : () => void;
}