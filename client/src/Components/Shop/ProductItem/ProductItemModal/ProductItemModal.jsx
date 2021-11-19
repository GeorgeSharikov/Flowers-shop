import React from 'react'
import { PortalModal } from '../../../../Hoc/PortalModal/PortalModal.jsx'
import * as s from '../../ShopStyles.js'
import { selectChosenProduct } from '../../../../Selectors/Selectors.js';
import {ProductModalButton} from "./ProductModalButton.jsx";
import {ProductModalBody} from "./ProductModalBody.jsx";
import {useSelector} from "react-redux";

export const ProductItemModal = ({ setIsActive, isActive, productLength}) => {
    const product = useSelector(state => selectChosenProduct(state)) || {}
    return(
        <PortalModal domNode={document.body} isActive={isActive}>
                <s.ModalStyled isActive={isActive}>
                    <ProductModalButton setIsActive={setIsActive}/>
                    <ProductModalBody product={product} setIsActive={setIsActive} isActive={isActive} productLength={productLength}/>
                </s.ModalStyled>
        </PortalModal>

    )
}