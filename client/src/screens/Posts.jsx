import { Link } from 'react-router-dom';

export default function Posts({ posts, handlePostDelete, currentUser }) {
  return (
    <div>
      {posts.map((post) => (
        <div className="postcontainer" key={post.id}>
          <p>{post.content}</p> 
        </div>
      ))}
    </div>
  )
}
