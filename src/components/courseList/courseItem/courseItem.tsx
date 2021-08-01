import React from 'react';
import { CourseItemInterface } from '../../../interface/courseItemInterface';
import "../courseItem/courseItem.css";
import { Link } from 'react-router-dom';

function courseItem(props: CourseItemInterface) {
  const addtowishlist = (id : number) => {
    props.addToWishlist(id);
  }
  const addToCart = (id : number) => {
    if(props.course.isAddcart && props.modalResponse) {
      props.modalResponse("Already Exist in cart","error");
      return;
    }
    props.addToCart(id);
    props.modalAddCart();
  }
  const courseDeleteEvent = (id : number) => {
    console.log('wol')
    props.addToWishlist(id);
  }
    return (
        <div className="item-container">
            <div>
                <span className="img-rectangle"></span>
            </div>
            <div className="item-name">
                 {props.course.courseName}
               <div >
                  <div className="react-text">
                    <button className="test-tag"><span className="btn-text">React </span></button>
                    <button className="test-tag"><span className="btn-text">React </span></button>
                    </div>
                 </div>
            </div>
            <div className="author"> {props.course.author} </div>
            {props.screenName === "Course" ?
            <div className="starIcon">
            {props.course.isWishlist === true ? 
                <img src="/files/images/wishlist-star.svg" alt= "wishlist-star" onClick={()=> addtowishlist(props.course.id)}/>
                : <img src="/files/images/star.svg" alt= "star" onClick={()=> addtowishlist(props.course.id)} />}
              </div> : <></>}
            <div className="price"> Rs {props.course.actualPrice}/- </div>
            <div className={props.course.price == props.course.actualPrice ? "actual-price" : "strikethrough actual-price"}>
                {props.course.price == props.course.actualPrice ? "-" : "Rs "+props.course.price}
            </div>
              <button className="addcart-btn" onClick={() => addToCart(props.course.id)}>
                <p className="addcart-text">ADD TO CART</p></button>
              { props.screenName === "Wishlist" ? 
                  <div>
                  <img src="/files/images/delete.svg" alt= "delete-button" 
                  onClick={() => courseDeleteEvent(props.course.id)}/>
              </div> : <></>
              }
            <div className="view">
                <Link to={"/course-detail/"+props.course.courseName.split(" ").join("-")}>
                    <img src="/files/images/rightArrow.svg" className="cpointer" alt=">" />
                </Link>
            </div>

        </div>
    );
}
export default courseItem;