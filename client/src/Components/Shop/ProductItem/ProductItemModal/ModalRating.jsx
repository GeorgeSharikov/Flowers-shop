import React, {useState} from 'react';
import StarRatings from "react-star-ratings";
import * as s from '../../ShopStyles.js'
import trash from '../../../../Assets/trash.svg'
import edit from '../../../../Assets/edit.png'
import {useDispatch, useSelector} from "react-redux";
import {deleteUserRatingToProductAsync, editRatingToProductAsync, setRatingToProductAsync} from "../../productsReducer.js";
import {
    selectIsProductRated,
    selectRate,
    selectRateCount,
    selectUserRatingToProduct
} from "../../../../Selectors/Selectors.js";

export const ModalRating = ( {id}) => {
    const dispatch = useDispatch()
    const rating = useSelector(state => selectRate(state, id))
    const rateCount = useSelector(state => selectRateCount(state, id))
    const isRated = useSelector(state => selectIsProductRated(state, id ))
    const userRate = useSelector(state => selectUserRatingToProduct(state, id))

    const [editMode, setEditMode] = useState(false)

    const editRatingHandler = (val) => {
        dispatch(editRatingToProductAsync(userRate, val, id, rateCount, rating))
        setEditMode(!editMode)
    }

    const deleteUserRating = () => {
        dispatch(deleteUserRatingToProductAsync(rating, userRate, rateCount, id))
    }

    const setRatingFunction = (val) => {
        if(!isRated){
            dispatch(setRatingToProductAsync(id, val, rating, rateCount))
        }
    }

    return (
        <s.ModalRate>
            {!isRated
                ? <h1>Rate the product</h1>
                : <s.RatingTitleWrapper>
                    <h1>Thank you for rating</h1>

                    <s.RatingButton onClick={deleteUserRating} title="Delete rating">
                        <img src={trash} alt={'delete rating'}/>
                    </s.RatingButton>

                    <s.RatingButton title="Edit rating" onClick={() => setEditMode(!editMode)}>
                        <img src={edit} alt={'edit rating'}/>
                    </s.RatingButton>
                </s.RatingTitleWrapper>}
            <s.Rating>
                {isRated && !editMode && <StarRatings
                    rating={Number(rating)}
                    starRatedColor="#fde16d"
                    changeRating={console.log()}
                    numberOfStars={5}
                    starHoverColor={"#fde16d"}
                    starDimension={'40px'}
                    starSpacing={'3px'}
                    name='rating'/>}
                {!isRated && <StarRatings
                    rating={Number(rating)}
                    starRatedColor="#fde16d"
                    changeRating={setRatingFunction}
                    numberOfStars={5}
                    starHoverColor={"#fde16d"}
                    starDimension={'40px'}
                    starSpacing={'3px'}
                    name='rating'/>}
                {editMode && <StarRatings
                    rating={Number(rating)}
                    starRatedColor="#fde16d"
                    changeRating={editRatingHandler}
                    numberOfStars={5}
                    starHoverColor={"#fde16d"}
                    starDimension={'40px'}
                    starSpacing={'3px'}
                    name='rating'/>}
                 <span>{rating}</span>
             </s.Rating>
            {editMode ? <p>Please, change your rating</p> : <p>Based on {rateCount} reviews</p>}
        </s.ModalRate>
    )
}
