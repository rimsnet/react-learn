import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../../actions/postAction';

class PostForm extends React.Component {

    constructor() {
        super()
    }

    submitHander = e => {
        e.preventDefault();

        const body = {
            title: e.target.title.value,
            body: e.target.body.value
        }

        this.props.createPost(body);
    }

    render() {
        return (
            <div>
                <h3>Add Post</h3>
                <hr />
                <form onSubmit={this.submitHander}>
                    <input type="text" name="title" placeholder="title" />
                    <input type="text" name="body" placeholder="body" />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}




const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts
})

export default connect(null, { createPost })(PostForm);