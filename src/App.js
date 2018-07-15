import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CoursesList from './components/CoursesList'
import './App.css';
import BlogsList from "./components/BlogsList";

class App extends Component {
  render() {
    return (
        <div>
            <NavBar />
            <CoursesList />
            <BlogsList />
        </div>

    );
  }
}

export default App;
