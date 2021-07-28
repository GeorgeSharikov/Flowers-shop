import React, {useRef} from 'react';
import * as s from "../../ShopStyles";
import {useClickOutside} from "../../../../Hooks/useClickOutside";
import {ModalSlider} from "./ModalSlider";
import {ModalButton} from "./ModalButton";
import {ModalFooter} from "./ModalFooter";
import {ModalRating} from "./ModalRating";

export const ProductModalBody = ({product, setIsActive, isActive, productLength}) => {
    const ref = useRef()
    useClickOutside(ref, () => setIsActive(false))
    const sale = Number(product.price?.split('').filter(i => i!==' ').join('')) / 100 * 3
    return (
        <>
        { isActive ? <s.ModalBody ref={ref}>
         <s.ModalBodyTopContent>
        <ModalSlider product={product}/>
        <s.ModalContent>
            <s.TopModalContent>
                <h1>Bouquet <br/>«{product.name}»</h1>
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    A assumenda commodi eius esse excepturi, facere fugit laborum obcaecati odio odit perspiciatis
                    quibusdam sequi sit veritatis vitae.
                    Et odit quis temporibus.</p>
            </s.TopModalContent>
            <s.BottomModalContent>
                <p>The sale for this product when registering on the site will be:
                    <b> 3% ({sale.toLocaleString('ru', {
                        style: 'currency',
                        currency: 'RUB',
                        maximumFractionDigits: 0
                    })})</b>
                </p>
                <s.ProductPriceModal>
                    <s.PriceWordModal>Price:</s.PriceWordModal>
                    <s.ProductFullPriceModal>{product.price}₽</s.ProductFullPriceModal>
                </s.ProductPriceModal>
                <ModalButton product={product}/>
                <ModalRating  id={product.id} />
            </s.BottomModalContent>
        </s.ModalContent>
         </s.ModalBodyTopContent>
        <ModalFooter id={product.id} productLength={productLength}/>
        </s.ModalBody> : null}
    </>
)
}
