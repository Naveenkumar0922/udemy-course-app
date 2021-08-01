import React, { useState } from 'react';
import { CardItemInterface } from '../../interface/cartInterface/cartItemInterface';
import { CourseItemInterface } from '../../interface/courseItemInterface';
import "../courseList/courseItem/courseItem.css";


function AddToCartView(props: CardItemInterface) {
    const cartDeleteEvent = (id : number) => {
        props.handleToRemove(id);
    }
    const moveToWishlist = (id : number) => {
        props.addToWishlist(id);
    }
    return (
        <div className="cart-container-list">
            <div>
                <span className="img-rectangle"></span>
            </div>
            <div >
                 <div className="item-name">{props.course.courseName}</div>
                <div className="author-name">{props.course.author}</div>
            </div>
            <div ><span className="wishlist-link" onClick={() => moveToWishlist(props.course.id)}> 
            {props.course.isWishlist === false ? "Move To Wishlist" : "Remove from Wishlist"} </span> </div>
            <div> Rs {props.course.actualPrice}/- </div>
                <div className="delete-btn">
                  <img src="/files/images/delete.svg" alt= "delete-button" onClick={() => cartDeleteEvent(props.course.id)}/>
              </div>   
     </div>
    )
}
export default AddToCartView;