import React from 'react';
import { CardListInterface } from '../../interface/cartInterface/cartListInterface';
import { CourseListInterface } from '../../interface/courseListInterface';
import AddToCartView from './addToCartView';

function AddToCartList(props: CardListInterface) {

    return (
            <>
               {props.courses.map((course) =>(
                <AddToCartView
                    course={course}
                    addToCart={props.addToCart}
                    addToWishlist={props.addToWishlist}
                    handleToRemove={props.handleToRemove}
                    modalAddCart={props.modalAddCart}
                />
            ))}

            </>
    )
}
export default AddToCartList;