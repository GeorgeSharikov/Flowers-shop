import React from "react";
import styled from 'styled-components'
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {Content} from "./Components/MainContent/MainContent";
import {Route, Switch} from "react-router-dom";

const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 230px 1fr 90px;
    grid-template-areas: 
    "header"
    "content"
    "footer";
`
export const App = () => {
  return (
    <AppWrapper>
        <Header/>
            <Switch>
                <Route path={'/'} render={() => <Content />}/>
            </Switch>
        <Footer/>
    </AppWrapper>
  );
}

