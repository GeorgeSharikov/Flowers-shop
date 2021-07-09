import React, {useEffect} from 'react';
import {FilterBar} from "./FilterBar/FilterBar";
import {Container} from "../../GlobalStyledComponents/GlobalComponents";
import {useDispatch, useSelector} from "react-redux";
import * as s from './ShopStyles'
import {getAllProductsAsync} from "./productsReducer";
import {selectAllProduct, selectIsFetching} from "../../Selectors/Selectors";
import {ProductItem} from "./ProductItem/ProductItem";
import loading from '../../Assets/loading.gif'

export const Shop = (props) => {
    const dispatch = useDispatch()
    const productsList = useSelector((store) => selectAllProduct(store))
    const isFetching = useSelector(state => selectIsFetching(state))
    useEffect(() => {
        dispatch(getAllProductsAsync())
    }, [dispatch])
    return (
        <Container>
            <s.ShopContentStyled>
                <FilterBar/>
                    <s.ProductListStyled>
                        {isFetching && <s.loadingDiv>
                            <img src={loading} alt={'loading'} width={'500px'} height={'500px'}/>
                        </s.loadingDiv>}
                        {productsList?.map(i => {
                            return  <ProductItem key={i.id} name={i.name} params={i.params} price={i.price} img={i.img}/>
                        })}
                    </s.ProductListStyled>
            </s.ShopContentStyled>
        </Container>
    );
}
