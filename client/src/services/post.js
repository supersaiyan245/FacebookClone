import api from './apiConfig';

export const getAllPosts = async () => {
  const resp = await api.get('/');
  return resp.data;
};

export const getOnePost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
};

export const postPost = async (postData) => {
  const resp = await api.post('/', { post: postData });
  return resp.data;
};

export const putPost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData });
  return resp.data;
};

export const deletePost = async (id) => {
  await api.delete(`/posts/${id}`);
};

export const addPost = async (idData) => {
  const resp = await api.post('/posts', { post: idData });
  return resp.data;
};
