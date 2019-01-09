import React, {Component} from "react";
import BookmarkForm from "./../forms/BookmarkForm";
import  { connect } from "react-redux";
import { fetchBookMarks } from "./../../actions";

class BookmarksPage extends Component {

    componentDidMount() {
        const { fetchBookMarks } = this.props;
        fetchBookMarks();
    }

    render() {
        const { bookmarks } = this.props;

        return(
            <div>
                <h2>New Bookmark</h2>
                <BookmarkForm onBookmarkFormSubmit={this.props.onBookmarkFormSubmit} />
                <h2>My Bookmarks</h2>
                <ul>
                    {bookmarks.map(bookmark => {
                        return(
                            <li key={bookmark._id}>
                                <a href={bookmark.url}>{bookmark.title}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bookmarks: state.bookmarks
    }
}

export default connect(mapStateToProps, {fetchBookMarks})(BookmarksPage);