import React, { useState } from 'react';
import AddToCartList from '../components/addToCart/addToCartList';
import CardDetailsView from '../components/addToCart/cardDetailsView';
import Discover from '../components/header/discover';
import { CardItemInterface } from '../interface/cartInterface/cartItemInterface';
import { CardListInterface } from '../interface/cartInterface/cartListInterface';
import { CourseInterface } from '../interface/courseInterface';
import "../screens/styles/addToCartScreen.css";

function AddToCartScreen(props: CardListInterface){

  const [count , setCount] = useState(0);
  //let result = props.courses.filter((course : CourseInterface) => course.isAddcart === true);
 // console.log(result);
  let addToCartList = (<AddToCartList
  courses={props.courses}
  addToCart={props.addToCart}
  addToWishlist={props.addToWishlist}
  handleToRemove={props.handleToRemove}
  screenName={props.screenName}
  totalCart={props.totalCart}
  modalCheckOut={props.modalCheckOut}
  isModalState={props.isModalState}
  modalAddCart={props.modalAddCart}
  modalResponse={props.modalResponse}
/>);
    return (
        <div className="container">
            <Discover
            screenName = {props.screenName}/>
            <div className="course-bar">
                <p>{props.courses.length} Courses in Cart</p>
            </div>
            {props.courses.length > 0 ? 
            ( <div className = "cart-container">
                <div style={{width:"75%"}}>{addToCartList} </div>
               <div><CardDetailsView
                 cartList={props.courses}
                 totalCart={props.totalCart}
                 modalCheckOut={props.modalCheckOut}
                 isModalState={props.isModalState}
                 modalResponse={props.modalResponse}/></div>
            </div> ) : <div>No Items</div>
           }
        </div>
    )
}
export default AddToCartScreen;