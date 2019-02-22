import React, {Component} from 'react';
import './App.css';
import HomePage from "./components/HomePage";
import {BrowserRouter, Switch} from "react-router-dom";
import BlogPage from "./components/BlogPage";
import Route from "react-router-dom/es/Route";
import ReviewPage from "./components/ReviewPage";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' exact component={HomePage}/>
                        <Route path='/blog' exact component={BlogPage}/>
                        <Route path='/review' exact component={ReviewPage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
