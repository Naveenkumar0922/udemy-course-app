import React from 'react';
import { CourseInterface } from '../../interface/courseInterface';
import { CourseListInterface } from '../../interface/courseListInterface';
import CourseItem from './courseItem/courseItem';

function CourseList(props: CourseListInterface) {

    return (
            <div>
               {props.courses.map((course) =>(
                <CourseItem
                    course={course}
                    addToCart={props.addToCart}
                    addToWishlist={props.addToWishlist}
                    modalCheckOut={props.modalCheckOut}
                    modalAddCart = {props.modalAddCart}
                    modalResponse = {props.modalResponse}
                    screenName = {props.screenName}
                    handleToRemove = {props.handleToRemove}
                />
            ))}

            </div>
    )
}
export default CourseList;