import React from 'react';
import NavBar from "./NavBar";
import BlogsList from "./BlogsList";
import BlogHero from "./BlogHero";

const BlogPage = () => {
    return (
        <div>
            <NavBar/>
            <BlogHero/>
            <BlogsList/>
        </div>
    );
};
export default BlogPage;