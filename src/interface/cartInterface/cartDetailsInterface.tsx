import React from 'react';
import { CourseInterface } from '../courseInterface';
import { CardListInterface } from '../cartInterface/cartListInterface';

export interface CartDetailsInterface {
    addToCart : (id: number) => void;
    addToWishlist : (id: number) => void;
    updatePagination : (index:number)=> void;
    renderedCourses : CourseInterface[];
    cartList : CourseInterface[];
    courses : CourseInterface[];
    screenName : string;
    totalCart : number;
    modalCheckOut : () => void;
    modalAddCart : () => void;
    modalResponse : (message : string, response :string) => void;
    orderBy : (condition:string, path ?:string)=> void;
    searchCourse ?: (message:string)=> void;
    handleToRemove : (id : number) => void;
    
}