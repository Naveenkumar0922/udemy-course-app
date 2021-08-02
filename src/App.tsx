import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import CourseScreen from './screens/courseScreen';
import Discover from './components/header/discover';
import { BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import AddToCartView from './components/addToCart/addToCartView';
import MyWishlist from './screens/myWishlist';
import courseData from './mockData/testData.json';
import { CourseInterface } from './interface/courseInterface';
import AddToCartScreen from './screens/addToCartScreen';
import UserProfileScreen from './screens/userProfileScreen';
import MessageModal from './customModal/messageModal';
import CourseDetailsPage from './screens/courseDetailsPage';
 

function App() {
  const [courseList, setCourseList] = useState(courseData);
  const [cartList, setCartList] = useState<CourseInterface []>([]);
  const [pageCourseList, setPageCourseList] = useState(courseData.slice(0,4));
  const [totalCart, setTotalCart] = useState(initialTotal);
  const [isModalState, setIsModalState] = useState(false);
  const [modalIcon, setModalIcon] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const history = useHistory();

  const addToCart = (id : number) => {
    let courseItem   = courseList.find((course : CourseInterface) => course.id === id);
     if(courseItem) 
     { const allCourse = [...cartList];
        courseItem.isAddcart = true;
        allCourse.push(courseItem);
      setCartList(allCourse);
      let totalValue = totalCart;
      totalValue += courseItem.actualPrice;
      setTotalCart(totalValue);
      modalResponse("Course successfully added in the cart","success");}
  }
  const addToWishlist = (id : number) => {
    setCourseList(courseData);
    const courses = [...courseList];
     courses.find((course : CourseInterface) =>  course.id === id)!.isWishlist = 
     !(courses.find((course : CourseInterface) =>  course.id === id)!.isWishlist);
    setCourseList(courses);
    console.log(courseList);
  }
  function initialTotal() {
    let totalValue = 0;
    courseList.map((course) => {
      if(course.isAddcart === true) {
        totalValue += course.actualPrice;
      }
    });
    return totalValue;
  }

  const handleToRemove = (id : number) => {
      const courses = [...cartList];
      const cartCourse = courses.find((course : CourseInterface) => course.id === id);
      if(cartCourse) {
        const resultCourse = courses.filter((course : CourseInterface) => course.id !== id);
        cartCourse.isAddcart = false;
        setCartList(resultCourse);
        let totalValue = totalCart;
        totalValue -= cartCourse.actualPrice;
      setTotalCart(totalValue);
      }
  }

  const updatePagination = (index:number)=>{
    let startIndex = (index-1)*4
    let endIndex = (index*4) >= courseList.length ? courseList.length : (index*4)
    const courses = courseList.slice(startIndex,endIndex);
    setPageCourseList(courses);
}
const modalCheckOut = () => {
  courseList.map((course)=>{
    if(course.isAddcart){
      course.isAddcart = false;
    }
  });
  setTotalCart(0);
  setIsModalState(true);
  setCourseList(courseList);
  setCartList([]);
}
const closeModal = () => {
  setIsModalState(false);
}
const modalAddCart = () => {
  setIsModalState(true);
}
const modalResponse = (responseMessage : string, response : string) => {
  setModalMessage(responseMessage);
  if(response === "success"){
    setModalIcon("tick");
  }
  if(response === "error"){
    setModalIcon("error");
  }
  setIsModalState(true);
}

const orderBy = (condition:string,path ?:string)=>{
    
  let compCourses : CourseInterface[] = [];
  if(condition==="asc"){
    compCourses =  courseData.sort((a,b)=> a.actualPrice - b.actualPrice);
  }
  if(condition==="desc"){
    compCourses =  courseData.sort((a,b)=> b.actualPrice - a.actualPrice);
  }

  if(path==="Wishlist") compCourses = compCourses.filter((course)=> course.isWishlist)

  setCourseList(compCourses)
  setPageCourseList(compCourses.slice(0,4))
}

const searchCourse = (query:string)=>{
  let tempArray : CourseInterface []= [];

  if(query=== ""){
    setCourseList(courseData);
    setPageCourseList(courseData.slice(0,4));

    return;
  }

  courseData.map((course)=>{
    console.log(query)
      if(course.courseName.toLowerCase().includes(query.toLocaleLowerCase()) || 
      course.author.toLowerCase().includes(query.toLowerCase()) ||
      course.tags.includes(query.toLowerCase())){
        console.log(course)
        tempArray.push(course);
      }
  })
  let endIndex = 4 >= tempArray.length ? tempArray.length : 4
  setCourseList(tempArray);
  setPageCourseList(tempArray.slice(0,endIndex));

}

  return (
       <div className="App">
         
         <Router>
         <Header/>
        <Route exact path="/" >
          <CourseScreen
             courses={courseList}
             addToCart={addToCart}
              addToWishlist={addToWishlist}
              cartList={cartList}
              renderedCourses={pageCourseList}
              updatePagination={updatePagination}
              screenName="Course"
              totalCart={totalCart}
              modalCheckOut={modalCheckOut}
              modalAddCart={modalAddCart}
              modalResponse={modalResponse}
              orderBy={orderBy}
            searchCourse={searchCourse}
            handleToRemove={handleToRemove}
       />
        </Route>
        <Route path="/wishlist">
            <MyWishlist
              courses={courseList}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
              cartList={cartList}
              renderedCourses={pageCourseList}
              updatePagination={updatePagination}
              screenName="Wishlist"
              totalCart={totalCart}
              modalCheckOut={modalCheckOut}
              modalAddCart={modalAddCart}
              modalResponse={modalResponse}
              orderBy={orderBy}
            searchCourse={searchCourse}
            handleToRemove={handleToRemove}
              />
        </Route>
        <Route path="/cart">
          <AddToCartScreen
            courses={cartList}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
            handleToRemove={handleToRemove}
            screenName="Cart"
            totalCart={totalCart}
            modalCheckOut={modalCheckOut}
            isModalState={isModalState}
            modalAddCart={modalAddCart}
            modalResponse={modalResponse}/>
        </Route>
        <Route path="/user">
          <UserProfileScreen
          modalResponse = {modalResponse}
         /></Route>
        <Route path="/course-detail/:coursename">
            <CourseDetailsPage
                addWishlist={addToWishlist}
                addToCart={addToCart}
                modalResponse={modalResponse}
             />
        </Route>

        </Router>
        {isModalState ? (<MessageModal 
        modalIcon = {modalIcon}
        modalMessage = {modalMessage}
        closeModal={closeModal}/>) : <></>}
    </div>
  );
}

export default App;
