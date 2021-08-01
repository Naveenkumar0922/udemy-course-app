import React from 'react';
import { useHistory } from 'react-router-dom';
import { UserCartInterface } from '../../interface/cartInterface/userCartInterface';
import { CourseInterface } from '../../interface/courseInterface';
import { CourseListInterface } from '../../interface/courseListInterface';
import "../../screens/styles/courseScreen.css";
import CourseCartItem from './courseCartItem';

function CourseCartDetails(props : UserCartInterface) {

    const history = useHistory();
    const handleCheckout = () => {
        history.push("/cart")
    }
    return (
        <div className="cart-list">
            
            <div className="cart-list-container">
                <div className="cart-list-title">
                    YOUR CART DETAILS
                </div> 
                    <div className="cart-view">
                    {props.cartList.length > 0 ?
                     (<div  className="cart-items-holder">
                        {props.cartList.map((courseItem)=>(
                        <CourseCartItem 
                        course={courseItem}
                        />
                    ))}
                </div>
                 ) : <div className="empty-text">Your cart is empty right now. Please add courses in the cart from the list</div>
            }</div>
            </div>

          <div className="total-value-container">
              <div className="container-text">
                  <div className="width-text">
                   <span className="amt-text total-text">Total Cart Value</span>
                   <span className="amt-text cart-amount">Rs {props.totalCart}/-</span>
                 </div>
                 {props.cartList.length > 0 ?
                 (<div className="checkout-text" onClick={handleCheckout}> Go to checkout</div>) : <></> }
               </div>
            </div>
        </div>
    )
}
export default CourseCartDetails;