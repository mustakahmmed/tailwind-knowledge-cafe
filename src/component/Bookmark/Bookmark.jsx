import PropTypes from "prop-types";

const Bookmark = ({bookmark}) => {
    const{title}=bookmark;
    return (
        <div>
            <h1 className="font-bold text-2xl bg-slate-100 rounded-xl mt-5 mx-10 px-5 py-4">{title}</h1>
        </div>
    );
};
Bookmark.propTypes={
    bookmark:PropTypes.object
}

export default Bookmark;