import React, {useEffect} from 'react';
import {FilterBar} from "./FilterBar/FilterBar";
import {Container} from "../../GlobalStyledComponents/GlobalComponents";
import {useDispatch, useSelector} from "react-redux";
import * as s from './ShopStyles'
import {getAllProductsAsync} from "./productsReducer";
import {selectAllProduct} from "../../Selecotrs/Selectors";
import {ProductItem} from "./ProductItem/ProductItem";

export const Shop = (props) => {
    const dispatch = useDispatch()
    const productsList = useSelector((store) => selectAllProduct(store))
    useEffect(() => {
        dispatch(getAllProductsAsync())
    }, [dispatch])
    return (
        <Container>
            <s.ShopContentStyled>
                <FilterBar/>
                    <s.ProductListStyled>
                        {productsList?.map(i => {
                            return <ProductItem key={i.id} name={i.name} params={i.params} price={i.price} img={i.img}/>
                        })}
                    </s.ProductListStyled>
            </s.ShopContentStyled>
        </Container>
    );
}
