import React, { useRef, useState } from 'react';
import CourseList from '../components/courseList/courseList';
import Discover from '../components/header/discover';
import Header from '../components/header/header';
import "../screens/styles/courseScreen.css";
import courseData from "../mockData/testData.json";
import { CourseListInterface } from '../interface/courseListInterface';
import CourseCartDetails from '../components/courseList/courseCartDetails';
import {CartDetailsInterface } from '../interface/cartInterface/cartDetailsInterface';
import CoursePagenation from '../components/courseList/coursePagenation';
function CourseScreen(props: CartDetailsInterface) {
    const [pageCount, setPageCount] = useState(0);
    const [ searchQuery , setSearchQuery] = useState("");
    const [ searchValue, setSearchValue ] =  useState("");

    //setPageCount();
    console.log(pageCount);
    const orderbyRef = useRef(null);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setSearchQuery(event.target.value);
    }
    const handleInputEnter = (event: React.KeyboardEvent)=>{
        if (event.key === 'Enter') {
            searchTheCourse();
        }
    }
    const searchTheCourse = ()=>{
        if(props.searchCourse){
            props.searchCourse(searchQuery);
            setSearchValue(searchQuery)
        }
    }
    const toggleOrderBy = ()=>{
        console.log('gggg');
        (orderbyRef.current as unknown as HTMLElement).classList.toggle("show");
    }

    const handleOrderBy = (cond:string)=>{
        toggleOrderBy();
        console.log('hhh')
        props.orderBy(cond, props.screenName);
    }
    return (
        <>
        <div className="container">
            <Discover
            screenName = {props.screenName}/>
            <div className="course-bar">
                <p>All Courses</p>
                <div style={{position:"relative"}}>
                            <div className="orderby cpointer" 
                             onClick={()=>toggleOrderBy}
                            >
                            <span className="font-text">
                                Course Price &nbsp;&nbsp;&nbsp;
                            </span>
                            <span>
                                <img src="/files/images/order.svg" alt="" className="orderby-icon"
                                onClick={() => toggleOrderBy} />
                            </span>
                            </div>
                            <div className="f-right order-options-container" ref={orderbyRef}>
                                <div className="order-options cpointer"
                                    onClick={()=> handleOrderBy("asc")}
                                >
                                Low to High
                                </div>
                                <div className="order-options cpointer"
                                onClick={()=> handleOrderBy("desc")}
                                >
                                High to Low
                                </div>
                            </div>
                     <div className="cart-header-container">
                         {props.screenName === "wishlist" ? (<div style={{marginBottom:"55px"}}></div>) : 
                         (<div className="searchboxwrapper">
                    <input className="searchbox" type="text"
                        onChange={event => handleInputChange(event)}
                        onKeyPress={event => handleInputEnter(event)}

                     value={searchQuery} placeholder="Search here" id="s" />
                    <span className="searchsubmit"
                        onClick={()=> searchTheCourse()}
                    >
                        <img src="/files/images/search.svg" alt="search" className="search-icon" id="searchsubmit" />
                    </span>
                </div>)}
                 </div>
                    </div>
            </div>
         <div className="course-container">
            <div className="course-list">
                <CourseList
                    courses={props.renderedCourses}
                    addToCart={props.addToCart}
                    addToWishlist={props.addToWishlist}
                    modalCheckOut={props.modalCheckOut}
                    modalAddCart={props.modalAddCart}
                    modalResponse={props.modalResponse}
                    screenName={props.screenName}
                    handleToRemove={props.handleToRemove}
                />
                {props.courses.length >= 4 ?
                        (<CoursePagenation
                            updatePagination={props.updatePagination}
                            pagecount={Math.ceil(props.courses.length/4)}
                        />)
                        : ""
                 }
            </div>
            <div className="cart-container">
            
                
                <CourseCartDetails
                 cartList={props.cartList}
                 totalCart={props.totalCart}
                 modalCheckOut={props.modalCheckOut}
                 />
            </div>
            </div>
        </div>
        </>
    )
}
export default CourseScreen;