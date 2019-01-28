import React from 'react';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(response => {
            this.setState({
                posts: response
            })
        })
    }

    render() {
        
        const postItems = this.state.posts.map(list => (
            <li key={list.id}>{list.body}</li>
        ));

        return (
            <div>
                <h3>Posts</h3>
                <hr />
                <ul>
                   {postItems}
                </ul>
            </div>
        )
    }

}

export default Posts;