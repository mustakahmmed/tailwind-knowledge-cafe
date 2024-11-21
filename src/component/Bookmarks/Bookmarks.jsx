import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmark}) => {
    return (
        <div className='md:w-1/3 bg-gray-500 ml-10'>
            <h1 className='text-4xl font-bold text-center m-5 text-white bg-black py-3 rounded-lg'>Bookmarks:{bookmark.length}</h1>
            {
                bookmark.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes={
    bookmark:PropTypes.array
}

export default Bookmarks;