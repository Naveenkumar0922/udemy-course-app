import React from 'react';
import { CourseInterface } from '../courseInterface';

export interface CardItemInterface {
    addToCart : (id : number) => void;
    addToWishlist : (id : number) => void;
    handleToRemove : (id : number) => void;
    course: CourseInterface;
    modalAddCart : () => void;
}