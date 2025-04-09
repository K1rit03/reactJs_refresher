import NewPost from './NewPost';
import { useState } from 'react';
import Post from './Post';
import classes from './PostList.module.css';
import Modal from './Modal';


function PostList({isPosting, onStopPosting}){ 

    const [modalIsVisible, setModalIsVisible] = useState(true);
    
    function hideModalHandler(){
        setModalIsVisible(false);
    }
    return(
        <>
            {isPosting &&  (
                <Modal onClose={onStopPosting}>
                    <NewPost onCancel={onStopPosting}
                />
            </Modal>
            )}
        <ul className={classes.posts}>
           
            <Post author="John" body = "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16"/>
        </ul>
        </>
         
    );

}

export default PostList;