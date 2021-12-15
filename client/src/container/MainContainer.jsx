import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Posts from '../screens/Posts.jsx';
import PostCreate from '../screens/PostCreate.jsx';
import PostEdit from '../screens/PostEdit.jsx';


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

