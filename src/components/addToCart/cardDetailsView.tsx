import React, { useState } from 'react';
import MessageModal from '../../customModal/messageModal';
import { TotalCartInterface } from '../../interface/cartInterface/totalCartInterface';
import { UserCartInterface } from '../../interface/cartInterface/userCartInterface';
import "../../screens/styles/addToCartScreen.css";

function CardDetailsView(props : TotalCartInterface) {
    const [isCheckout, setIsCheckout] = useState(false);
    const handleCheckout = () => {
        if(props.modalResponse){
            props.modalResponse("You have successfully placed your order","success");
            props.modalCheckOut();
        }   
    }
    return (
        <div className="cart-details">
            <div className="total-text">Total Amount</div>
            <div className="price">Rs {props.totalCart} /-</div>
            <div className="desc"><span className="text-desc">Success fully</span>
            </div>
            <div className="checkout">
                <button className="btn-checkout" onClick={handleCheckout}><span className="btn-text">CHECKOUT</span></button>
            </div>
            
        </div>
    )

}
export default CardDetailsView;