import React, {useEffect, useRef, useState} from 'react';
import {FilterBar} from "./FilterBar/FilterBar";
import {Container} from "../../GlobalStyledComponents/GlobalComponents";
import {useDispatch, useSelector} from "react-redux";
import * as s from './ShopStyles'
import {getAllProductsAsync, setStepScroll} from "./productsReducer";
import {selectAllProduct, selectCurrentCategory, selectIsFetching, selectStepScroll} from "../../Selectors/Selectors";
import {ProductItem} from "./ProductItem/ProductItem";
import loading from '../../Assets/loading.gif'

export const Shop = (props) => {
    const dispatch = useDispatch()
    const productsList = useSelector((store) => selectAllProduct(store))
    const isFetching = useSelector(state => selectIsFetching(state))
    const currentSortCategory = useSelector(state => selectCurrentCategory(state))
    const step = useSelector(state => selectStepScroll(state))
    const [totalNumber] = useState(24)
    const isMounted = useRef(false);

    const scrollHandler = (e) => {
        if(window.innerHeight - (e.target.documentElement.scrollTop - e.target.documentElement.scrollHeight) < 1748.2000122070312 && step<=totalNumber){
            dispatch(setStepScroll( true))
        }
    }

    useEffect(() => {
        if(isMounted.current){
            console.log('loh')
            dispatch(setStepScroll(false))
        }else{
            isMounted.current = true
        }
    }, [currentSortCategory])

    useEffect(() => {
        if(productsList.length === 0 ){
            dispatch(getAllProductsAsync())
        }
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
        //eslint-disable-next-line no-use-before-define
    }, [dispatch])
    return (
        <Container>
            <s.ShopContentStyled>
                <FilterBar/>
                    <s.ProductListStyled>
                        {isFetching && <s.loadingDiv>
                            <img src={loading} alt={'loading'} width={'500px'} height={'500px'}/>
                        </s.loadingDiv>}
                        {productsList.slice(0, step).map(i => {
                            return <ProductItem key={i.id} name={i.name} params={i.params} price={i.price} img={i.img} id={i.id}/>
                        })}
                    </s.ProductListStyled>
            </s.ShopContentStyled>
        </Container>
    );
}
