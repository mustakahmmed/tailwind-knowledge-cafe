
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
 const [bookmark,setBookmark] = useState([])
 const handleSetBookmark = blog =>{
  const newBookMarks = [...bookmark,blog]
  setBookmark(newBookMarks)
 }

  return (
    <>
      <Header></Header>
      <div className='flex max-w-7xl mx-auto'>
      <Blogs handleSetBookmark={handleSetBookmark}></Blogs>
      <Bookmarks bookmark={bookmark}></Bookmarks>
   
      </div>
    </>
  )
}

export default App
