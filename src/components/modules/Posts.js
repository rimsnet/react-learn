import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/postAction';

class Posts extends React.Component {

    componentDidMount() {
        this.props.fetchPost();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost)
        }
    }


    render() {

        const postItems = this.props.posts.map(list => (
            <div key={list.id}>
                <h3>{list.title}</h3>
                <p>{list.body}</p>
            </div>
        ))

        return (
            <div>
                <h3>Posts</h3>
                <hr />
                {postItems}
            </div>
        )
    }

}

Posts.propTypes = {
    fetchPost: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}


const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPost })(Posts);