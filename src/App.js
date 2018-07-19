import React, { Component } from 'react';
import NavBar from './components/NavBar';
import HeroBanner from './components/HeroBanner';
import CoursesList from './components/CoursesList'
import './App.css';
import BlogsList from "./components/BlogsList";

class App extends Component {
  render() {
    return (
        <div>
            <NavBar />
            <HeroBanner />
            <CoursesList />
            <BlogsList />
        </div>

    );
  }
}

export default App;
