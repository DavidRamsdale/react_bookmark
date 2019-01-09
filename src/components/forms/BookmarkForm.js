import React, {Component} from "react";
import LocalApi from "./../../apis/local";
import { connect } from "react-redux";
import { createBookMark } from "./../../actions";

class BookmarkForm extends Component {
    state = { title: "", url: ""}

    onFormSubmit = async (event) => {
        event.preventDefault();
        const { title, url } = this.state;
        const { createBookMark } = this.props;

        createBookMark({ title, url });
    }

    onInputChange = (name, event) => {
        this.setState({ [name]: event.target.value });
    }
    
    render() {
        const { title, url } = this.state;

        return(
            <form onSubmit={this.onFormSubmit}>
                <p>
                    <label htmlFor="title">Title</label>
                    <input type="text" value={title} onChange={(event) => this.onInputChange("title", event)} />
                </p>
                <p>
                    <label htmlFor="url">url</label>
                    <input type="text" value={url} onChange={(event) => this.onInputChange("url", event)} />
                </p>
                <p>
                    <input type="submit" value="Create new bookmark" />
                </p>
            </form>
        );
    }
}

export default connect(null, {createBookMark})(BookmarkForm);