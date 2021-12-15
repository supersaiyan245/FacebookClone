import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Posts from '../screens/Posts.jsx';
import PostCreate from '../screens/PostCreate.jsx';
import PostEdit from '../screens/PostEdit.jsx';
import { deletePost, postPost } from '../services/post.js';


export default function MainContainer({ currentUser }) {
  const [Posts, setPosts] = useState([]);
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
    setPosts((prevState) => [...prevState, newFood]);
    history.push('/foods');
  };

  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };
}
