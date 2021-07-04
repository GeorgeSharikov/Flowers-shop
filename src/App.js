import React from "react";
import styled from 'styled-components'
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {Route, Switch} from "react-router-dom";
import { About } from './Components/About/About';
import {Shop} from "./Components/Shop/Shop";

// 375px, 480px, 768px, 976px, 1024px, 1200

const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 216px 1fr 90px;
    grid-template-areas: 
    "header"
    "content"
    "footer"; 
    @media (max-width: 580px){
      grid-template-rows: 120px 1fr 90px;
    }
`
const ContentWrapper = styled.div`
  min-width: 0;
  grid-area: content;
`
export const App = () => {
  return (
    <AppWrapper>
        <Header/>
            <Switch>
            <ContentWrapper>
                <Route exact path={'/'} render={() => <About />}/>
                <Route path={'/About'} render={() => <About />}/>
                <Route path={'/Shop'} render={() => <Shop />}/>
                </ContentWrapper>
            </Switch>
        <Footer/>
    </AppWrapper>
  );
}

