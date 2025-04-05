import NewPost from './NewPost';
import { useState } from 'react';
import Post from './Post';
import classes from './PostList.module.css';
import Modal from './Modal';


function PostList(){ 

    const [enteredBody, setEnteredBody] = useState('');

    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }

    function onAuthorChange(event){
        setEnteredAuthor(event.target.value);
    }
    
    return(
        <>
            <Modal>
                <NewPost
                onBodyChange= {bodyChangeHandler}
                onAuthorChange= {onAuthorChange}
                />
            </Modal>
        <ul className={classes.posts}>
            <Post author={enteredAuthor} body = {enteredBody}/>
            <Post author="John" body = "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16"/>
        </ul>
        </>
         
    );

}

export default PostList;