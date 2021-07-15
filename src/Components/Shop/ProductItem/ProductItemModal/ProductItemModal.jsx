import React from 'react'
import { PortalModal } from '../../../../Hoc/PortalModal/PortalModal'
import * as s from '../../ShopStyles'
import { selectChosenProduct } from './../../../../Selectors/Selectors';
import { useSelector } from 'react-redux';

export const ProductItemModal = (props) => {
    const {id, img, name, params, price} = useSelector(state => selectChosenProduct(state))
    return(
        <PortalModal domNode={document.body}>
            <s.ModalStyled>
                <s.ModalBody>
                    <h1>{name}</h1>    
                </s.ModalBody>    
            </s.ModalStyled>    
        </PortalModal>
    )
}