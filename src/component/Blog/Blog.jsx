import PropTypes from 'prop-types';


const Blog = ({ blog,handleSetBookmark,handleReadingTime}) => {
    console.log(blog)
    const{title,coverImage,authorImage,authorName,readingTime,postingDate,tags}=blog
    return (
        <div>
<div className='my-10 shadow-2xl pb-3'>
<img className='w-full' src={coverImage} alt="" />

<div className='flex justify-between items-center mx-4'>

    <div className='flex items-center justify-start my-4'>
        <img className='w-20' src={authorImage} alt="" />
        <div>
        <h2>{authorName}</h2>
        <p>{postingDate}</p>
        </div>
    </div>
    <div>
        <h3 className=''><span id='readingTime'>{readingTime} </span> Min read<button onClick={()=>handleSetBookmark(blog)} className='ml-1 hover:bg-slate-200 px-3 py-2 rounded-full'><i class="fa-regular fa-bookmark"></i></button></h3>
        
    </div>
</div>

<h1 className='text-5xl font-bold mb-5 mx-4' >{title}</h1>
{
    tags.map((tag,index) => <span className='m-4 font-bold text-gray-600 mb-8' key={index}><a href="">  #{tag}</a></span>)
}
<button onClick={()=>handleReadingTime(readingTime)} className='px-4 py-2 bg-slate-500 block rounded-xl font-bold text-white mx-4 my-7 mb-5 hover:bg-gradient-to-r from-purple-500 to-blue-500'>Mark As Read</button>
</div>
        </div>
    );
};
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleSetBookmark:PropTypes.func
}
export default Blog;