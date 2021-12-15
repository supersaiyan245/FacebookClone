import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit({ posts, handlePostUpdate }) {
  const [formData, setFormData] = useState({
    content: '',
    imgUrl: '',
  });
  const { content, imgUrl } = formData;
  const { id } = useParams();

 
