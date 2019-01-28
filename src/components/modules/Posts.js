import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions/postAction';

class Posts extends React.Component {

    componentDidMount() {
        this.props.fetchPost();
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

const mapStateToProps = state => ({
    posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPost })(Posts);