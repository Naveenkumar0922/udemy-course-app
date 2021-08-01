import React from "react";

export interface CourseInterface {
    id : number;
    courseName : string;
    author : string;
    actualPrice : number;
    price : number;
    discount : number;
    tags : string;
    isWishlist : boolean;
    isAddcart : boolean;
}