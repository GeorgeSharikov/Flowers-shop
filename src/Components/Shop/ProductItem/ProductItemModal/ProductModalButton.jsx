import React from 'react';
import * as s from "../../ShopStyles";
import cancel from "../../../../Assets/cancel.svg";

export const ProductModalButton = ({setIsActive}) => {
    return (
        <s.ModalCancelButton onClick={() => setIsActive(false)}>
            <img src={cancel} alt={'cancel'} width={'24px'}/>
        </s.ModalCancelButton>
    );
}
