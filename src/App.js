import React, {Component} from 'react';
import NavBar from './components/NavBar';
import './App.css';
import BlogsList from "./components/BlogsList";
import HeroBanner from "./components/HeroBanner";
import PersonalInfo from "./components/PersonalInfoSection";
import ParallaxBanner from "./components/ParallaxBanner";
import QA from "./components/QA";

class App extends Component {
  render() {
    return (
        <div>
            <NavBar />
            <HeroBanner/>
            <PersonalInfo/>
            <ParallaxBanner/>
            <BlogsList/>
            <QA/>
        </div>

    );
  }
}

export default App;
