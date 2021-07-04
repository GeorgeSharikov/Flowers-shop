import React from 'react';
import styled from 'styled-components'
import {Container} from "../../../GlobalStyledComponents/GlobalComponents";
import {BonusItem} from "./BonusItem/BonuseItem";
import bon1 from '../../../Assets/bon-delivery.png'
import bon2 from '../../../Assets/bon-presents.png'
import bon3 from '../../../Assets/bon-payment.png'
import bon4 from '../../../Assets/bon-guarantee.png'

const BonusesBody = styled.div`
  background-color: white;
  position: relative;
  display: flex;
 justify-content: space-around;
  margin-top: -65px;
  z-index: 9;
  border: 1px solid #f0f0f0;
  width: 100%;
`

export const Bonuses = (props) => {
    return (
        <Container>
            <BonusesBody>
                <BonusItem src={bon1} p1={'Cheap shipping'} p2={'From $15'}/>
                <BonusItem src={bon2} p1={'Gifts, promotions'} p2={'For all'}/>
                <BonusItem src={bon3} p1={'Safety'} p2={'Payment VISA MC'}/>
                <BonusItem src={bon4} p1={'Return guarantees'} p2={'Within 15 days'}/>
            </BonusesBody>
        </Container>
    );
}
