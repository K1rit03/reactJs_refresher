import NewPost from './NewPost';

import Post from './Post';
import classes from './PostList.module.css';


function PostList(){
    return(
        <>
        
        <NewPost/>
        <ul className={classes.posts}>
            <Post author="James: " body = "Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds, because you know that the testing of your faith produces perseverance. - James 1:2-3"/>
            <Post author="John" body = "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. - John 3:16"/>
        </ul>
        </>
         
    );

}

export default PostList;