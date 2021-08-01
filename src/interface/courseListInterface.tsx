import React from 'react';
import { CourseInterface } from './courseInterface';
import { CardListInterface } from '../interface/cartInterface/cartListInterface';

export interface CourseListInterface {
    addToCart : (id: number) => void;
    addToWishlist : (id: number) => void;
    courses : CourseInterface[];
    modalCheckOut : () => void;
    modalAddCart : () => void;
    modalResponse : (message : string, response :string) => void;
    screenName : string;
    handleToRemove : (id : number) => void;
}