import React from 'react';

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
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(response => {
                console.log(response)
            })
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

export default PostForm;