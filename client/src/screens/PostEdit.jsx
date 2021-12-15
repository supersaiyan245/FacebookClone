import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit({ posts, handlePostUpdate }) {
  const [formData, setFormData] = useState({
    content: '',
    imgUrl: '',
  });
  const { content, imgUrl } = formData;
  const { id } = useParams();

 
  useEffect(() => {
    const fillOutFormData = () => {
      const postItem = posts.find((post) => post.id === Number(id));
      setFormData({ name: postItem.name });
    };
    if (posts.length) fillOutFormData();
  }, [posts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
