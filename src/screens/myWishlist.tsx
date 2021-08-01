import React from 'react';
import CourseCartDetails from '../components/courseList/courseCartDetails';
import CourseList from '../components/courseList/courseList';
import Discover from '../components/header/discover';
import Header from '../components/header/header';
import { CartDetailsInterface } from '../interface/cartInterface/cartDetailsInterface';
import { CourseInterface } from '../interface/courseInterface';
import { CourseListInterface } from '../interface/courseListInterface';

function MyWishlist(props : CartDetailsInterface) {
    let result = props.courses.filter((course : CourseInterface) => course.isWishlist === true);
  console.log(result);
  let wishlist = (<CourseList
  courses={result}
  addToCart={props.addToCart}
  addToWishlist={props.addToWishlist}
  modalCheckOut={props.modalCheckOut}
  modalAddCart={props.modalAddCart}
  modalResponse = {props.modalResponse}
  screenName = {props.screenName}
  handleToRemove={props.handleToRemove}
/>);
    return (
        <div>
        <div className="container">
            <Discover 
            screenName = {props.screenName}/>
            <div className="course-bar">
                <p>All Courses</p>
            </div>
            <div className="course-container">
             <div className="course-list"> {wishlist}</div> 
            <div className="cart-container">
                <CourseCartDetails
                 cartList={props.cartList}
                 totalCart={props.totalCart}
                 modalCheckOut={props.modalCheckOut}/>
            </div>
            </div>
        </div>
        </div>
    )
}
export default MyWishlist;