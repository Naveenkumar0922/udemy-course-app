import React from 'react';

export interface CourseDetailsPageInterface{
    // course : courseInterface;
    addWishlist : (id : number) => void;
    addToCart : (id: number) => void;
     modalResponse: (message:string,response:string)=> void;
}
