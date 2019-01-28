import React from 'react';

class PostForm extends React.Component {


    render() {
        return (
            <div>
                <h3>Add Post</h3>
                <hr />
                <form>
                    <input type="text" name="title" placeholder="title" />
                    <input type="text" name="body" placeholder="body" />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default PostForm;