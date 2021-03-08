import React from 'react';

const Comment = (props) => {
    const {name, email} = props.comment;
    return (
        <div>
            <h2>Name : {name}</h2>
            <p>{email}</p>
        </div>
    );
};

export default Comment;