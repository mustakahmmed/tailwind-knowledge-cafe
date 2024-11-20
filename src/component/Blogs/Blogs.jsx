import { useEffect } from "react";
import { useState } from "react";



const Blogs = () => {
    const[blog,setBlog] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    
    return (
        <div>
            <h1>hi from blogs</h1>
        </div>
    );
};

export default Blogs;