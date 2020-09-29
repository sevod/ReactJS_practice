import React from 'react';
import './App.css';
import Navigation from "./components/navigation/Navigation";
import MainComponent from "./components/mainComponent/MainComponent";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Page1 from "./components/page/Page1";
import Page2 from "./components/page/Page2";
import Page3 from "./components/page/Page3";

function App() {
    return (
        <div className='app-wrapper'>
            <BrowserRouter>
                <Navigation/>
                {/*<Route exact path='/' render={() => <MainComponent/>}/>*/}
                {/*<Route path='/page1' render={() => <Page1/>}/>*/}
                {/*<Route path='/page2' render={() => <Page2/>}/>*/}
                {/*<Route path='/page3' render={() => <Page3/>}/>*/}
                <Switch>
                    <Route exact path='/'> <MainComponent/> </Route>
                    <Route path='/page1'><Page1/></Route>
                    <Route path='/page2'><Page2/></Route>
                    <Route path='/page3'><Page3/></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
