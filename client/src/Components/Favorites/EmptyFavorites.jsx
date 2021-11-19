import React from 'react';
import fav from '../../Assets/favoriteSign.svg'

export const EmptyFavorites = (props) => {
    return (
        <div>
            <p>You do not have any favorites products yet.<br />
                To add a product to Favorites, use the
                <img src={fav} alt={'favorite'} width={'16px'} height={'16px'}/>
            </p>
        </div>
    );
}
