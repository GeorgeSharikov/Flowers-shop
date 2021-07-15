import React from 'react'
import { PortalModal } from '../../../../Hoc/PortalModal/PortalModal'
import * as s from '../../ShopStyles'
import { selectChosenProduct } from '../../../../Selectors/Selectors';
import { useSelector } from 'react-redux';
import cancel from '../../../../Assets/cancel.svg'

export const ProductItemModal = ({setIsActive, isActive}) => {
    const product = useSelector(state => selectChosenProduct(state)) || {}
    return(
        <PortalModal domNode={document.body} >
            <s.ModalStyled isActive={isActive}>
                <s.ModalCancelButton onClick={() => setIsActive(false)}>
                    <img src={cancel} alt={'cancel'} width={'24px'}/>
                </s.ModalCancelButton>
                <s.ModalBody>
                    <h1>{product.name}</h1>
                </s.ModalBody>    
            </s.ModalStyled>
        </PortalModal>
    )
}