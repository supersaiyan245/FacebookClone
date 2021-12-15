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
import { Link } from 'react-router-dom';

export default function MainContainer({ currentUser, handleRegister, handleLogin }) {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const history = useHistory();
  console.log(posts)
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
        <Route path="/Login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/Register">
          <Register handleRegister={handleRegister} />
        </Route>
       <main className="edit-post">
          <Route path='/posts/:id/edit'>
          <PostEdit posts={posts} handlePostUpdate={handlePostUpdate} />
          </Route>
        </main>
        <article className="create-new-post">
          <Route path='/posts/new'>
            <PostCreate handlePostCreate={handlePostCreate} />
          </Route>
        </article>
        <main>
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
        </main>
        <aside className="left"></aside>
        <aside className="right"></aside>
      </Switch>
    </div>
  )
}
