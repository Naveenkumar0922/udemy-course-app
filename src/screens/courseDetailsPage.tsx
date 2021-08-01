import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import { CourseDetailsPageInterface } from '../interface/courseDetailsPageInterface';
import courseData from "../mockData/testData.json";
import { CourseInterface } from '../interface/courseInterface';
import Discover from '../components/header/discover';
import "../screens/styles/courseDetailsPageStyle.css";

function CourseDetailsPage(props:CourseDetailsPageInterface){

    var courseDummy : CourseInterface = {
        id : 0,
        courseName: "",
        author: "",
        actualPrice : 0,
        price : 0,
        discount : 0,
        tags : "",
        isWishlist: false,
        isAddcart: false
    }
    const params : any =useParams();
    console.log(params);
    const [ chosenCourse, setChosenCourse] = useState(courseDummy);
    

    useEffect(()=>{
        let course= courseData.find((course)=> course.courseName.toLowerCase() === params.coursename.split("-").join(" ").toLowerCase() );
        if(course){
            setChosenCourse(course);
        }
        
    },[])

    const addToCartEvent = (id : number) => {
        if(chosenCourse.isAddcart && props.modalResponse) {
            props.modalResponse("Already Exist in cart","error");
            return;
          }
          props.addToCart(id);
          //props.modalAddCart();
    }
    return(
        <>
        <div className="container">
            <Discover />
            <div className="bread-crumbs-container">
              <Link to="/courses"> 
                    <span style={{color: "#0F1317"}} className="cpointer"> All Courses {'>'} </span>
              </Link>
               <span style={{fontWeight:"bold"}}> {chosenCourse.courseName}</span>
            </div>
        </div>
        <div className="width-container">
            <div className="container">
                <h2>
                    {chosenCourse.courseName}
                </h2>
                <p>
                    {chosenCourse.courseName}
                </p>
                <div className="course-author" style={{color:"#FF9271"}}>
                   {chosenCourse.author}
                </div>
                <div className="flex" style={{marginTop:"5px"}}>
                    
                        <button className="">React</button>
                </div>
            </div>
        </div>
        <div className="display-video">
            <div className="course-details-container">
            <p style={{font: "normal normal 300 18px/22px Montserrat", fontWeight:"bold"}}>
                Course Details
            </p>
                <p style={{font: "normal normal 300 18px/22px Montserrat"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p style={{font: "normal normal 300 18px/22px Montserrat"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p style={{font: "normal normal 300 18px/22px Montserrat"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p style={{font: "normal normal 300 18px/22px Montserrat"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p style={{font: "normal normal 300 18px/22px Montserrat"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className="video-outer-container">
                <div className="video-container">
                    vide0
                </div>
                <div className="course-pricing">
                    <div className="cart-text" style={{fontWeight:"bold"}}>
                        Rs&nbsp;{chosenCourse.actualPrice}/-
                    </div>
                    <div className="strikethrough  cart-text" style={{display:"block"}}>
                    Rs&nbsp;{chosenCourse.price}/-
                    </div>
                    <div style={{margin: "10px 0px 10px 15px"}}>
                       <img src="/files/images/clock.svg" alt="clock" className="timer" />
                        <span className="orange" style={{fontWeight:"bold"}}>
                            &nbsp;&nbsp; 8 hours 
                        </span>
                        <span className="orange">
                            &nbsp;left for this price
                        </span>
                        
                    </div>
                    <div className="display-video" style={{margin: "10px 0px 15px 15px"}}>      
                    <button className="addcart-btn" style={{marginRight :"10px"}} onClick={()=> addToCartEvent(chosenCourse.id)}>
                <p className="addcart-text">ADD TO CART</p></button>
                        <div className="wishlistdiv orange cpointer" 
                        onClick={()=> props.addWishlist(chosenCourse.id)}
                        >
                            <span>
                                {chosenCourse.isWishlist ? "Remove" : "Add to wishlist"}
                                </span>
                            <img src="/files/images/wishlist.svg" alt="" className="wishicon" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default CourseDetailsPage;
