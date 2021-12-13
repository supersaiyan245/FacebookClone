import api from './apiConfig';

export const getAllPosts = async () => {
  const resp = await api.get('/post');
  return resp.data;
};

export const getOnePost = async (id) => {
  const resp = await api.get(`/post/${id}`);
  return resp.data;
};

export const postPost = async (postData) => {
  const resp = await api.post('/post', { post: postData });
  return resp.data;
};

export const putPost = async (id, postData) => {
  const resp = await api.put(`/post/${id}`, { post: postData });
  return resp.data;
};

export const deletePost = async (id) => {
  await api.delete(`/post/${id}`);
};

export const addPost = async (idData) => {
  const resp = await api.post('/posts', { post: idData });
  return resp.data;
};
