import React from 'react';

class Posts extends React.Component {

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(response => {
            console.log(response)
        })
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
            </div>
        )
    }

}

export default Posts;