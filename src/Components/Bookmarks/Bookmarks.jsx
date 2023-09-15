import PropTypes from 'prop-types';
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 p-4 m-8 rounded-xl text-center bg-gray-100 ">
            <div>
                <h3 className="text-2xl bg-white p-4 m-4 rounded-xl  text-violet-500">Spent time on read : {readingTime} min</h3>
            </div>
            <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,index) => <Bookmark
                    key={index}
                    bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;