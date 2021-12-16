import api from './apiConfig';

export const getAllPosts = async (id) => {
  const resp = await api.get(`/users/${id}/posts`);
  return resp.data;
};

export const getOnePost = async (user_id, id) => {
  const resp = await api.get(`/users/${user_id}/posts/${id}`);
  return resp.data;
};

export const postPost = async (postData) => {
  const resp = await api.post('/posts', { post: postData });
  return resp.data;
};

export const putPost = async (user_id, id, postData) => {
  const resp = await api.put(`/users/${user_id}/posts/${id}`, { post: postData });
  return resp.data;
};

export const deletePost = async (user_id, id) => {
  await api.delete(`users/${user_id}/posts/${id}`);
};

export const addPost = async (idData) => {
  const resp = await api.post('/posts', { post: idData });
  return resp.data;
};
