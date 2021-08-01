import React from 'react';
import { CardItemInterface } from "../../interface/cartInterface/cartItemInterface";
import { CartViewInterface } from "../../interface/cartInterface/cartViewInterface";
import { CourseInterface } from '../../interface/courseInterface';
import { CourseItemInterface } from '../../interface/courseItemInterface';
import "../../screens/styles/courseScreen.css";

function CourseCartItem(props : CartViewInterface){
    return(
        
        <div className="cart-item">
            <div className="cart-item-list">
                <div>
                  <span className="img-rectangle"></span>
               </div>
                <div className="cart-course">
                    {props.course.courseName}
                </div>
            </div>
            <div className="cart-amount">
                Rs&nbsp;{props.course.actualPrice}/-
            </div>
        </div>
    );
}

export default CourseCartItem;
