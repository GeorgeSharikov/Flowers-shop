import React, {useEffect} from 'react';
import {PopularProduct} from "./PopularProduct";
import * as s from '../../AboutStyle'
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsAsync} from "../../../Shop/productsReducer";
import {selectAllProduct} from "../../../../Selectors/Selectors";

export const PopularProducts = (props) => {
    const dispatch = useDispatch()
    const products = useSelector(state => selectAllProduct(state))
    useEffect(() => {
        dispatch(getAllProductsAsync())
    }, [])
    return (
        <s.PopularProductsWrapper>
            {products.slice(0, 4).map((i, index) => {
                return <PopularProduct key={i.id} info={i}/>
            })}
        </s.PopularProductsWrapper>
    );
}
