import React, {useEffect, useState} from 'react';
import StarRatings from "react-star-ratings";
import * as s from '../../ShopStyles'
import {useDispatch, useSelector} from "react-redux";
import {setRatingToProduct} from "../../productsReducer";
import {selectRate, selectRateCount} from "../../../../Selectors/Selectors";
import {getCookie} from "../../../../Utils/cookie";

export const ModalRating = ( {id}) => {
    const dispatch = useDispatch()
    const rating = useSelector(state => selectRate(state, id))
    const rateCount = useSelector(state => selectRateCount(state, id))
    const [rate, setRate ] = useState(rating)
    const setRatingFunction = (val) => {
        dispatch(setRatingToProduct(id, val, rating, rateCount))
    }
    useEffect(() => {
        setRate(rating)
    }, [rating])
    const cookie = getCookie(id.toString())
    return (
    <s.ModalRate>
        <h1>{!cookie ? 'Rate the product' : 'Thank you for rating'}</h1>
        <s.Rating>
            <StarRatings
                rating={Number(rate)}
                starRatedColor="#fde16d"
                changeRating={!cookie ? (val) => {
                        setRatingFunction(val)
                        let UTCDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toUTCString();
                        document.cookie = `${id.toString()}=true; expires=${UTCDate}`
                } : null}
                numberOfStars={5}
                starHoverColor={"#fde16d"}
                starDimension={'40px'}
                starSpacing={'3px'}
                name='rating'/>
             <span>{rating}</span>
         </s.Rating>
        <p>Based on {rateCount} reviews</p>
    </s.ModalRate>

    )
}
