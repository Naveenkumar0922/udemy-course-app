import React from 'react';
import { CourseInterface } from './courseInterface';

export interface CourseItemInterface {
    addToCart : (id : number) => void;
    addToWishlist : (id : number) => void;
    course: CourseInterface;
    modalCheckOut : () => void;
    modalAddCart : () => void;
    modalResponse : (message : string, response :string) => void;
    screenName : string;
    handleToRemove : (id : number) => void;
}