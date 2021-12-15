import { Link } from 'react-router-dom';

export default function Posts({ posts, handlePostDelete, currentUser }) {
  return (
    <div>
      {posts.map((post) => (
        <div className="postcontainer" key={post.id}>
          <Link to={`/posts/${post.id}`}>
          <p>{post.content}</p>
          </Link>
          {currentUser?.id === post.user_id && (
            <>
              <Link to={`/posts/${post.id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={() => handlePostDelete(post.id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}
