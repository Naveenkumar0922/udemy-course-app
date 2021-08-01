import React from "react";
import "../../components/header/headerBar.css";
import { useHistory } from 'react-router-dom';
import courseData from "../../mockData/testData.json";
import { CourseInterface } from "../../interface/courseInterface";
import courseItem from "../courseList/courseItem/courseItem";
import CourseList from "../courseList/courseList";

function Header() {
  const history = useHistory();
 //event filteriswis true
 //filterlist.map(list1) <courseItem /></courseItem> props : {addToWishlistEvent : () => void}
 const addToWishlistEvent = ((e : React.MouseEvent<HTMLElement>) => {
   history.push("/wishlist");
 });

const addToCartEvent = ((e : React.MouseEvent<HTMLElement>) => {
  history.push("/cart");
});
const clickCourseEvent = ((e : React.MouseEvent<HTMLElement>) => {
  history.push("/");
})
  const userProfile = ((e : React.MouseEvent<HTMLElement>) => {
    history.push("/user");
  })
    return (
      <div className="headerPrimary">
        <div className="left part">
            <div className="hashedinLogo">
              <img src="/files/images/Logo-2.png" className="logo" alt="logo"></img>
            </div>
          </div>
      <div className="right part">
         <div onClick={clickCourseEvent}>
          <span className="courses">COURSES</span>
         </div>
         <div onClick={addToWishlistEvent}>
          <span className="wishlist">MY WISHLIST</span>
         </div>
          <div className="icon" onClick={addToCartEvent}>
              <img src="/files/images/shopping-cart.png" className="icon-logo" alt="shopping-cart-logo"></img>
          </div>
          <div className="icon" onClick={userProfile}>
              <img src="/files/images/profile.png" className="icon-logo" alt="profile-logo"></img>
          </div>
        </div>
       </div>

    );
}
export default Header;