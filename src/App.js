import React from "react";
// import {ErrorBoundary} from "./Components/ErrorBoundary/ErrorBoundary";
import styled from 'styled-components'
import {Route, Switch} from "react-router-dom";
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import { About } from './Components/About/About';
import {Shop} from "./Components/Shop/Shop";
import {Cart} from "./Components/Cart/Cart";
import {NotFound} from "./Components/NotFound/NotFound";
import {OverHeader} from "./Components/Overheader/overheader";
import {Favorites} from "./Components/Favorites/favorites";

const AppWrapper = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    box-sizing: border-box;
    grid-template-rows: 44px 216px 1fr auto;
    grid-template-areas: 
    'overHeader'
    'header'
    'content'
    'footer'; 
    @media (max-width: 580px){
      grid-template-rows: 120px 1fr auto
    }
`
const ContentWrapper = styled.div`
  min-width: 0;
  grid-area: content;
`
export const App = () => {
  return (
    <AppWrapper>
        <OverHeader />
        <Header/>
        <Switch>
            <ContentWrapper>
                <Route exact path={'/'} render={() => <About />}/>
                <Route path={'/About'} render={() => <About />}/>
                <Route path={'/Shop'} render={() => <Shop /> }/>
                <Route path={'/cart'} render={() => <Cart />}/>
                <Route path={'/Gallery'} render={() => <NotFound />}/>
                <Route path={'/Blog'} render={() => <NotFound />}/>
                <Route path={'/Help'} render={() => <NotFound />}/>
                <Route path={'/Favorites'} render={() => <Favorites />}/>
            </ContentWrapper>
        </Switch>
        <Footer/>
    </AppWrapper>
  );
}

