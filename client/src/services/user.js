import api from './apiConfig';

export const getAllUsers = async () => {
  const resp = await api.get('/');
  return resp.data;
};
