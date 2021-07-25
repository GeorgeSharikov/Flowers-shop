import React from 'react';
import * as s from '../../ShopStyles'
import {useDispatch, useSelector} from "react-redux";
import {getChosenProductAsync, setStepScroll} from "../../productsReducer";
import {selectAllProduct} from "../../../../Selectors/Selectors";

export const ModalFooter = ({id, productLength}) => {
    const dispatch = useDispatch()
    const productsList = useSelector((store) => selectAllProduct(store))

    const orderPosition = 1 + productsList.findIndex((i, index) => i.id === id)
    const nextId = productsList[orderPosition]?.id
    const prevId = productsList[orderPosition-2]?.id

    const NextHandler = () => {
        if(productLength === orderPosition) {
            dispatch(setStepScroll(true))
        }else{
            dispatch(getChosenProductAsync(nextId))
        }
    }
    return (
        <s.ToggleModal>
            <s.ToggleButtonPrev disabled={orderPosition === 1} onClick={() => dispatch(getChosenProductAsync(prevId))}>Previous</s.ToggleButtonPrev>
            <span>{orderPosition} of {productLength}</span>
            <s.ToggleButtonNext disabled={productsList.length === orderPosition} onClick={() => NextHandler()}>{productLength === orderPosition ? 'Load more' : 'Next'}</s.ToggleButtonNext>
        </s.ToggleModal>
    );
}
