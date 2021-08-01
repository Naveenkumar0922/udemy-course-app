import React from 'react';
import { CourseInterface } from '../courseInterface';

export interface CardListInterface {
    addToCart : (id: number) => void;
    addToWishlist : (id: number) => void;
    handleToRemove : (id : number) => void;
    courses : CourseInterface[];
    screenName : string;
    totalCart : number;
    modalCheckOut : () => void;
    isModalState : boolean;
    modalAddCart : () => void;
    modalResponse : (message : string, response :string) => void;
}