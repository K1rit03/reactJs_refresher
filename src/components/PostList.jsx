import NewPost from './NewPost';
import { useState } from 'react';
import Post from './Post';
import classes from './PostList.module.css';
import Modal from './Modal';

function PostList({ isPosting, onStopPosting }) {
  const [post, setPost] = useState([]);

  function addPostHandler(postData) {
    setPost((existingPost) => [postData, ...existingPost]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {post.length > 0 && (
        <ul className={classes.posts}>
          {post.map((post) => (
            <Post author={post.author} key={post.body} body={post.body} />
          ))}
        </ul>
      )}
    </>
  );
}

export default PostList;