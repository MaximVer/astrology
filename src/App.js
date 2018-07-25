import React, { Component } from 'react';
import NavBar from './components/NavBar';
import CoursesList from './components/CoursesList'
import './App.css';
import BlogsList from "./components/BlogsList";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundImage: "url('//images.ctfassets.net/pqvqz7pi9hj3/5JmCeRKUQEOQKi26GGiiCG/44efbf38149b55b9729392d1a93bd3cf/SljZ.gif')"
    }
  }
  render() {
    return (
        <div className='bg-img' style={{backgroundImage: this.state.backgroundImage, width: 1360, height: 1360}}>
            <NavBar />
            <CoursesList />
            <BlogsList />
        </div>

    );
  }
}

export default App;