import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function PostEdit({ currentUser, handlePostUpdate }) {
  const [formData, setFormData] = useState({
    content: '',
    imgUrl: '',
  });
  const { content, imgUrl } = formData;
  const { id } = useParams();

  
  
 
  // useEffect(() => {
  //   const fillOutFormData = () => {
  //     const postItem = posts.find((post) => post.id === Number(id));
  //     setFormData({ name: postItem.name });
  //   };
  //   if (posts.length) fillOutFormData();
  // }, [posts, id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData)
  };

  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostUpdate(currentUser.id, id, formData);
      }}
    >
      <h3>Edit Post</h3>
        <label>
          Content:
          <input type='text' name='content' value={content} onChange={handleChange} placeholder='Edit your thoughts'/>
        </label>
        <label>
          imgUrl:
          <input type='url' name='imgUrl' value={imgUrl} onChange={handleChange} placeholder='Change your image'/>
        </label>
      <button>Submit</button>
    </form>
  );
}