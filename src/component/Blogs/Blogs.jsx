import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";



const Blogs = ({handleSetBookmark,handleReadingTime}) => {
    const[blogs,setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl font-bold">Blogs:{blogs.length}</h1>
            {
                blogs.map(blog => <Blog handleReadingTime={handleReadingTime} handleSetBookmark={handleSetBookmark} key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleSetBookmark:PropTypes.func,
    handleReadingTime:PropTypes.number
}

export default Blogs;