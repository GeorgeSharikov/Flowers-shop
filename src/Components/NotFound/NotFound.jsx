import React from 'react';
import * as s from './NotFoundStyles'
import {Container} from "../../GlobalStyledComponents/GlobalComponents";

export const NotFound = (props) => {
    return (
        <Container>
            <s.NotFoundWrapper>
                <h1>404</h1>
                <h2>Page not found</h2>
                <p>Oh! The page you are looking for does not exist. It may have been moved or deleted.</p>
                <s.ButtonBack>
                    <s.ButtonBackLink to={'/About'}>Go back</s.ButtonBackLink>
                </s.ButtonBack>
            </s.NotFoundWrapper>
        </Container>
    );
}
