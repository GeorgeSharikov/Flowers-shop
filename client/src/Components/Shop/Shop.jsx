import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FilterBar} from "./FilterBar/FilterBar.jsx";
import {Container} from "../../GlobalStyledComponents/GlobalComponents.js";
import {useDispatch, useSelector} from "react-redux";
import * as s from './ShopStyles.js'
import {getAllProductsAsync, setModalActive, setSortByPopularity, setStepScroll} from "./productsReducer.js";
import {
    selectAllProduct,
    selectCurrentCategory,
    selectIsFetching,
    selectIsModalActive,
    selectStepScroll
} from "../../Selectors/Selectors.js";
import {ProductItem} from "./ProductItem/ProductItem.jsx";
import loading from '../../Assets/loading.gif'
import {ProductItemModal} from "./ProductItem/ProductItemModal/ProductItemModal.jsx";

export const Shop = (props) => {
    const dispatch = useDispatch()
    const productsList = useSelector((store) => selectAllProduct(store))
    const isFetching = useSelector(state => selectIsFetching(state))
    const currentSortCategory = useSelector(state => selectCurrentCategory(state))
    const step = useSelector(state => selectStepScroll(state))
    const isActive = useSelector(state => selectIsModalActive(state))

    const [totalNumber] = useState(24)

    const isMounted = useRef(false);


    const setIsActive = (isActive) => {
        dispatch(setModalActive(isActive))
    }

    const scrollHandler = useCallback((e) => {
        if(window.innerHeight - (e.target.documentElement.scrollTop - e.target.documentElement.scrollHeight) < 1748.2000122070312 && step<=totalNumber){
            dispatch(setStepScroll( true))
        }
    }, [dispatch, step, totalNumber])


    useEffect(() => {
        if(isMounted.current){
            dispatch(setStepScroll(false))
        }else{
            isMounted.current = true
        }
    }, [currentSortCategory, dispatch])

    useEffect(() => {
        if(productsList.length === 0 ){
            dispatch(getAllProductsAsync())
        }
        if(currentSortCategory === 'Popularity' && productsList.length > 0){
            dispatch(setSortByPopularity({products:productsList}))
        }
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
        // eslint-disable-next-line
    }, [dispatch, productsList.length, scrollHandler, currentSortCategory])
    return (
        <Container>
            <s.ShopContentStyled>
                <FilterBar/>
                    <s.ProductListStyled>
                        {isFetching && <s.loadingDiv>
                            <img src={loading} alt={'loading'} width={'500px'} height={'500px'}/>
                        </s.loadingDiv>}
                        {productsList?.slice(0, step).map((i, index) => {
                            return <ProductItem key={i.id} product={productsList[index]} isInFavorite={false}/>
                        })}
                    </s.ProductListStyled>
            </s.ShopContentStyled>
            <ProductItemModal setIsActive={setIsActive} isActive={isActive} productLength={productsList.slice(0, step).length}/>
        </Container>
    );
}

