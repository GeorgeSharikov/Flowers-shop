import React, {useState} from 'react';
import StarRatings from "react-star-ratings";
import * as s from '../../ShopStyles'
import {useDispatch, useSelector} from "react-redux";
import {setRatingToProduct} from "../../productsReducer";
import {selectRate, selectRateCount} from "../../../../Selectors/Selectors";

export const ModalRating = ( {id}) => {
    const dispatch = useDispatch()
    const rating = useSelector(state => selectRate(state, id))
    const rateCount = useSelector(state => selectRateCount(state, id))
    const setRatingFunction = (val) => {
        dispatch(setRatingToProduct(id, val, rating, rateCount))
    }
    console.log(id, rating, rateCount)
    return (
    <s.ModalRate>
        <h1>Rate the product</h1>
        <s.Rating>
            <StarRatings
                rating={Number(rating)}
                starRatedColor="#fde16d"
                changeRating={setRatingFunction}
                numberOfStars={5}
                starHoverColor={"#fde16d"}
                starDimension={'40px'}
                starSpacing={'3px'}
                name='rating'/>
             <span>{rating}</span>
         </s.Rating>
    </s.ModalRate>

    )
}
