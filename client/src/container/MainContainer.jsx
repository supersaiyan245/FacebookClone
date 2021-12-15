import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Posts from '../screens/Posts.jsx';
import PostCreate from '../screens/PostCreate.jsx';
import PostEdit from '../screens/PostEdit.jsx';
import { getAllPosts, deletePost, postPost, putPost } from '../services/post.js';
import { getAllUsers } from '../services/user.js';
import Users from '../screens/Users.jsx';

export default function MainContainer({ currentUser }) {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchUsers = async () => {
      const Users = await getAllUsers();
      setUsers(Users);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const Posts = await getAllPosts();
      setPosts(Posts);
    };
    fetchPosts();
  }, []);

  const handlePostCreate = async (formData) => {
    const newPost = await postPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push('/');
  };

  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };
  
  const handlePostUpdate = async (id, formData) => {
    const newPost = await putPost(id, formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(id) ? newPost : post;
      })
    );
    history.push('/');
  };

  
  return (
    <div>
      <Switch>
        <Route path='/posts/:id/edit'>
          <PostEdit posts={posts} handlePostUpdate={handlePostUpdate} />
        </Route>
        <Route path='/posts/new'>
          <PostCreate handlePostCreate={handlePostCreate} />
        </Route>
        <Route path='/'>
          <div className="allposts">
            <Users users={users}/>
            <Posts
              posts={posts}
              handlePostDelete={handlePostDelete}
              currentUser={currentUser}
              />
          </div>
        </Route>
      </Switch>
    </div>
  )
}
