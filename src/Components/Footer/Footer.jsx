import React from 'react';
import {Container} from "../../GlobalStyledComponents/GlobalComponents";
import * as s from './FooterStyles'

export const Footer = (props) => {
    return (
        <s.FooterWrapper>
            <Container>
                <s.FooterBody>
                    <s.FooterColumn>
                        <h3>About Company</h3>
                        <ul>
                            <li>Delivery</li>
                            <li>Payment</li>
                            <li>Guarantee</li>
                        </ul>
                    </s.FooterColumn>
                    <s.FooterColumn>
                        <h3>Help</h3>
                        <ul>
                            <li>Feedback</li>
                            <li>News</li>
                            <li>Articles</li>
                        </ul>
                    </s.FooterColumn>
                    <s.FooterColumn>
                        <h3>Our Contact</h3>
                        <ul>
                            <li>+7(909)-666-66-66</li>
                            <li>flowershop@gmail.com</li>
                            <li>442211, Saint-Petersburg</li>
                        </ul>
                    </s.FooterColumn>
                </s.FooterBody>
            </Container>
        </s.FooterWrapper>
    );
}
