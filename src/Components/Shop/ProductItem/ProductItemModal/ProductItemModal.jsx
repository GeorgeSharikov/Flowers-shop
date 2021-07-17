import React from 'react'
import { PortalModal } from '../../../../Hoc/PortalModal/PortalModal'
import * as s from '../../ShopStyles'
import { selectChosenProduct } from '../../../../Selectors/Selectors';
import { useSelector } from 'react-redux';
import {ProductModalButton} from "./ProductModalButton";
import {ProductModalBody} from "./ProductModalBody";

export const ProductItemModal = ({setIsActive, isActive}) => {
    const product = useSelector(state => selectChosenProduct(state)) || {}

    return(
        <PortalModal domNode={document.body} isActive={isActive}>
                <s.ModalStyled isActive={isActive}>
                    <ProductModalButton setIsActive={setIsActive}/>
                    <ProductModalBody product={product} setIsActive={setIsActive}/>
                </s.ModalStyled>
        </PortalModal>

    )
}