import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Posts from '../screens/Posts.jsx';
import PostCreate from '../screens/PostCreate.jsx';
import PostEdit from '../screens/PostEdit.jsx';
import { getAllPosts, deletePost, postPost, putPost } from '../services/post.js';
import { getAllUsers } from '../services/user.js';
import Users from '../screens/Users.jsx';
import Login from '../screens/Login.jsx';
import Register from '../screens/Register.jsx';

export default function MainContainer({ currentUser, handleRegister, handleLogin }) {
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
    const fetchPosts = async (id) => {
      const Posts = await getAllPosts(id);
      setPosts(Posts);
    };
    fetchPosts(currentUser?.id);
  }, []);

  const handlePostCreate = async (user_id, postData) => {
    const newPost = await postPost(user_id, postData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push('/');
  };

  const handlePostDelete = async (user_id, id) => {
    await deletePost(user_id, id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };
  
  const handlePostUpdate = async ( user_id, id, formData) => {
    const newPost = await putPost(user_id, id, formData);
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
        <Route path="/Login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/Register">
          <Register handleRegister={handleRegister} />
        </Route>
        <Route path='/posts/:id/edit' exact>
          <PostEdit
            posts={posts}
            currentUser={currentUser}
            handlePostUpdate={handlePostUpdate} />
        </Route>
          <Route path='/create' exact>
            <PostCreate
              handlePostCreate={handlePostCreate}
              currentUser={currentUser}
            />
          </Route>
        <Route path="/" exact>
          <Users users={users}/>
          <Posts
            posts={posts}
            handlePostDelete={handlePostDelete}
            currentUser={currentUser}
          />
        </Route>
        <aside className="left"></aside>
        <aside className="right"></aside>
      </Switch>
    </div>
  )
}
