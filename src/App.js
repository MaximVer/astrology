import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CoursesList from './components/CoursesList'
import './App.css';
import BlogsList from "./components/BlogsList";
import { ParallaxProvider } from 'react-scroll-parallax';
import HeroBanner from "./components/HeroBanner";

class App extends Component {
  render() {
    return (
        <div>
            <NavBar />
            <ParallaxProvider>
                <HeroBanner />
                <CoursesList />
                <BlogsList />
            </ParallaxProvider>
        </div>

    );
  }
}

export default App;
