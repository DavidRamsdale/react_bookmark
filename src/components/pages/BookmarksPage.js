import React, {Component} from "react";
import BookmarkForm from "./../forms/BookmarkForm";

class BookmarksPage extends Component {
    state = { bookmark: [] }

    onBookmarkFormSubmit = (bookmark) => {
        this.setState({ bookmark });
    }

    render() {
        return(
            <div>
                <h2>New Bookmark</h2>
                <BookmarkForm onBookmarkFormSubmit={this.props.onBookmarkFormSubmit} />
            </div>
        );
    }
}

export default BookmarksPage;