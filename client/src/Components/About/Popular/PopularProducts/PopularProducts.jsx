import React, {useEffect} from 'react';
import {PopularProduct} from "./PopularProduct.jsx";
import * as s from '../../AboutStyle.js'
import {useDispatch, useSelector} from "react-redux";
import {getAllProductsAsync} from "../../../Shop/productsReducer.js";
import {selectAllProduct} from "../../../../Selectors/Selectors.js";

export const PopularProducts = (props) => {
    const dispatch = useDispatch()
    const products = useSelector(state => selectAllProduct(state))
    useEffect(() => {
        !products.length && dispatch(getAllProductsAsync())
    }, [dispatch, products.length ])
    return (
        <s.PopularProductsWrapper>
            {products.slice(0, 4).map((i, index) => {
                return <PopularProduct key={i.id} info={i}/>
            })}
        </s.PopularProductsWrapper>
    );
}
