
import { useState } from 'react'
import './App.css'
import Blogs from './component/Blogs/Blogs'
import Bookmarks from './component/Bookmarks/Bookmarks'
import Header from './component/Header/Header'

function App() {
 const [bookmark,setBookmark] = useState([])
const[readingTime,setReadingTime]=useState(0)

 const handleSetBookmark = blog =>{
  const newBookMarks = [...bookmark,blog]
  setBookmark(newBookMarks)
 }

 const handleReadingTime = (time,id) =>{
  const totalTime = readingTime + time;
  setReadingTime(totalTime)

  const removeBookmark = bookmark.filter(bookmark=> bookmark.id !== id)
  setBookmark(removeBookmark)
  
 }

  return (
    <>
      <Header></Header>
      <div className='flex max-w-7xl mx-auto'>
      <Blogs handleReadingTime={handleReadingTime} handleSetBookmark={handleSetBookmark}></Blogs>
      <Bookmarks readingTime={readingTime} bookmark={bookmark}></Bookmarks>
   
      </div>
    </>
  )
}

export default App
