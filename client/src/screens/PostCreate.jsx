import { useState } from 'react';

export default function PostCreate({ handlePostCreate }) {
  const [formData, setFormData] = useState({
    content: '',
    imgUrl: '',
  });
  const { content, imgUrl } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


