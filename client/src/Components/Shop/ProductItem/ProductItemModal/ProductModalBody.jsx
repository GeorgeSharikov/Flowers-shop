import React, {useRef} from 'react';
import * as s from "../../ShopStyles.js";
import {useClickOutside} from "../../../../Hooks/useClickOutside.jsx";
import {ModalSlider} from "./ModalSlider.jsx";
import {ModalButton} from "./ModalButton.jsx";
import {ModalFooter} from "./ModalFooter.jsx";
import {ModalRating} from "./ModalRating.jsx";

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
                {product.name.length > 30 ? <h2>Bouquet <br/>«{product.name}»</h2> : <h1>Bouquet <br/>«{product.name}»</h1>}
                
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
                <ModalButton product={product} setIsActive={setIsActive}/>
                <ModalRating  id={product.id} />
            </s.BottomModalContent>
        </s.ModalContent>
         </s.ModalBodyTopContent>
        <ModalFooter id={product.id} productLength={productLength}/>
        </s.ModalBody> : null}
    </>
)
}
