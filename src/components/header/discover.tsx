import React from 'react';
import logo from "../../logo.svg"

function Discover(props: any) {
    return (
    <div className="headerBar">
      <div className="left part">
       <div>
          <span className="discovertext">
             {props.screenName === "Course" || props.screenName === "Wishlist" ?  "Discover Latest Courses on React"  :  ""}
             {props.screenName === "Cart" ? "Shopping Cart" : props.message}
             </span>
         </div>
      </div>
      <div className="right part">
         <div>
         <img src={logo} className="reactlogo" alt="react-logo"></img>
         </div>
      </div>
     </div>

    )
}
export default Discover;