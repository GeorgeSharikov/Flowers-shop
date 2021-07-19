import React, {useRef, useState} from 'react';
import styled from "styled-components";
import {useClickOutside} from "../../../Hooks/useClickOutside";
import {useDispatch, useSelector} from "react-redux";
import {selectAllProduct, selectCurrentCategory} from "../../../Selectors/Selectors";
import {getAllProductsAsync, setSortByHighPRice, setSortByLowPRice, setSortByPopularity} from "../productsReducer";

const SortingWrapper = styled.div`
  font-weight: 600;
  position: relative;
  color: white;
  padding: 3px 5px;
  display: flex;
  align-items: center;
  border: 1px rgba(39,40,41,.8901960784313725) solid;
  background-color: rgba(39,40,41,.8901960784313725);
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  span{
  font-size: 16px;
    text-align: center;
    display: inline-block;
    padding: 3px;
    margin-left: 7px;
    border-radius: 30px;
    border: 1px solid #e55472;
    width: 195px;
    background-color: #e55472;
  }
`
const ActiveSortingMenu = styled.div`
  z-index: 2;
  position: absolute;
  color: #ebf2f8;
  padding-top: 5px;
  right: 0;
  top: 40px;
`
const SortList = styled.ul`
  width: 195px;
`
const SortListItem = styled.li`
  text-align: center;
  padding: 5px;
  border-radius: 30px;
  background-color: rgba(39,40,41,.8901960784313725);
  margin-bottom: 5px;
  
`
export const Sorting = (props) => {
    const [active, setActive] = useState(false)

    const dispatch = useDispatch()
    const currentCategory = useSelector(state => selectCurrentCategory(state))
    const products = useSelector(state => selectAllProduct(state))

    const ref = useRef()
    useClickOutside(ref, () => setActive(false))
    return (
        <SortingWrapper onClick={() => setActive(!active)} ref={ref}>
            Sort by
            <span>{currentCategory}</span>
            {active
                ? <ActiveSortingMenu>
                    <SortList>
                        <SortListItem onClick={ () => dispatch(getAllProductsAsync())}>Popularity</SortListItem>
                        <SortListItem onClick={() => dispatch(setSortByHighPRice({products}))}>Price: high to low</SortListItem>
                        <SortListItem onClick={() => dispatch(setSortByLowPRice({products}))}>Price: low to high</SortListItem>
                    </SortList>
                </ActiveSortingMenu>
                : null}
        </SortingWrapper>
    );
}
