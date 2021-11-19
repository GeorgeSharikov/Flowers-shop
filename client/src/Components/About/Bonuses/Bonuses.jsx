import React from 'react';
import {Container} from "../../../GlobalStyledComponents/GlobalComponents.js";
import {BonusItem} from "./BonusItem/BonuseItem.jsx";
import bon1 from '../../../Assets/bon-delivery.png'
import bon2 from '../../../Assets/bon-presents.png'
import bon3 from '../../../Assets/bon-payment.png'
import bon4 from '../../../Assets/bon-guarantee.png'
import * as s from '../AboutStyle.js'

export const Bonuses = (props) => {
    return (
        <Container>
            <s.BonusesBody>
                <BonusItem src={bon1} p1={'Cheap shipping'} p2={'From $15'}/>
                <BonusItem src={bon2} p1={'Gifts, promotions'} p2={'For all'}/>
                <BonusItem src={bon3} p1={'Safety'} p2={'Payment VISA MC'}/>
                <BonusItem src={bon4} p1={'Return guarantees'} p2={'Within 15 days'}/>
            </s.BonusesBody>
        </Container>
    );
}
