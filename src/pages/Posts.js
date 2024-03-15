import React, { useEffect, useState } from 'react';
import classes from './posts.module.css';

function PostsPage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    //https://jsonplaceholder.typicode.com/posts/
    fetch('https://jsonplaceholder.typicode.com/posts/').then((response) =>
      response.json().then((data) => setPost(data))
    );
  }, []);

  return (
    <>
      <ul className={classes.content}>
        {post.map((p) => (
          <li> {p.title}</li>
        ))}
      </ul>
    </>
  );
}

export default PostsPage;
