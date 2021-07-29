import React from 'react';
import * as s from '../../AboutStyle'

export const BonusItem = ({src, p1, p2}) => {
    return (
        <s.StyledBonusItem>
            <div>
                <img src={src} alt={'bonus'} width={'50px'} height={'50px'}/>
            </div>
            <div>
                <p>{p1}</p>
                <p>{p2}</p>
            </div>
        </s.StyledBonusItem>
    );
}
