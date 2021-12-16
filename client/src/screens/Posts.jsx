import { Link } from 'react-router-dom';

export default function Posts({ posts, handlePostDelete, currentUser }) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {/* <Link to={`/${post.id}`}></Link> */}
            <p>{post.content}</p>
            <img src={post.imgUrl}></img>
          {currentUser?.id === post?.user_id && (
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
