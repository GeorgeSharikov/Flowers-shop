import React from "react";
import styled from 'styled-components'
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {Route, Switch} from "react-router-dom";
import { About } from './Components/About/About';

// 375px, 480px, 768px, 976px, 1024px, 1200

// export const Container = styled.div`
//   max-width: 1250px;
//   margin: 0 auto;
//   padding: 0px 20px;  
// `

const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 216px 1fr 90px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`
const ContentWrapper = styled.div`
  min-height: 100%;
  min-width: 0px;
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
                </ContentWrapper>
            </Switch>
        <Footer/>
    </AppWrapper>
  );
}

