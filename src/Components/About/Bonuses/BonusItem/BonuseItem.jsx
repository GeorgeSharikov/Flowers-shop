import React from 'react';
import styled from 'styled-components'

const StyledBonusItem = styled.div`
  padding: 30px 40px;
  display: flex;
  p{
    padding-left: 10px;
    font-size: 18px;
  }
`

export const BonusItem = ({src, p1, p2}) => {
    return (
        <StyledBonusItem>
            <div>
                <img src={src} alt={'bonus'}/>
            </div>
            <div>
                <p>{p1}</p>
                <p>{p2}</p>
            </div>
        </StyledBonusItem>
    );
}
