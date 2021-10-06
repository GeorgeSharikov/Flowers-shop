import React, {useEffect, useRef, useState} from 'react';
import {CallOutlined, SearchOutlined} from '@material-ui/icons'
import * as s from '../../HeaderStyles'
import {useDispatch, useSelector} from "react-redux";
import {selectAllProduct} from "../../../../Selectors/Selectors";
import {useDebounce} from "../../../../Hooks/useDebounce";
import {getChosenProductAsync} from "../../../Shop/productsReducer";
import {useClickOutside} from "../../../../Hooks/useClickOutside";

const styles = {
    fontSize: 25,
    marginTop: 10,
    marginRight: 10
}

export const HeaderSearch = ({width}) => {
    const stylesSearch  = {
        fontSize: width>580 ? 25 : 47,
    }
    const dispatch = useDispatch()
    const ref = useRef()
    const [inputValue, setInputValue] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const [products, setProducts] = useState([])
    const productsList = useSelector(state => selectAllProduct(state))
    const debouncedSearchTerm = useDebounce(inputValue, 200)

    if(!products.length){
        setProducts(productsList)
    }

    useClickOutside(ref, () => {
        setFilteredProducts([])
    })

    const getChosenProduct = (id) => {
        dispatch(getChosenProductAsync(id))
    }
    useEffect(() => {
        const filteredProducts = products.filter(i => {
            if(inputValue.length <= 2){
                return false
            }
            return i.name.toLowerCase().includes(inputValue.toLowerCase())
        })
        setFilteredProducts(filteredProducts)
    }, [debouncedSearchTerm, products, inputValue])
    return (
        <s.SearchBar width={width}>
                <s.PhoneNumber >
                    <CallOutlined style={styles}/>
                    <div>
                        PHONE: <br />      
                        +7(909)-666-66-66                        
                    </div>
                </s.PhoneNumber>
                <s.SearchIcon>
                    {width>580 ? null : <SearchOutlined style={stylesSearch}/>}
                </s.SearchIcon>
                <s.Form onClick={(e) => e.preventDefault()}>
                    <s.Input placeholder={'Search'} maxLength='50' onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
                    {filteredProducts.length ? <s.SearchList ref={ref}>
                        {filteredProducts.map(i => {
                            return <li key={i.id} onClick={() => getChosenProduct(i.id)}>
                                <s.SearchListLink>
                                    <img src={i.searchPhoto} alt={'flower'} width={'50px'}/>
                                    <div>
                                        <span>{i.name}</span>
                                        <p>{i.price} ₽</p>
                                    </div>
                                </s.SearchListLink>
                            </li>
                        })}
                    </s.SearchList> : null}
                    <s.Button>
                            <SearchOutlined style={stylesSearch}/>              
                    </s.Button>
                </s.Form>
        </s.SearchBar>
    );
}
