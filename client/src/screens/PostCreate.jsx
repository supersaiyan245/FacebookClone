import { useState } from 'react';

export default function PostCreate({ handlePostCreate, currentUser }) {
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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(currentUser.id, formData);
      }}
    >
      <h3>Create Food</h3>
        <label>
          Content:
          <input type='text' name='content' value={content} onChange={handleChange} />
        </label>
        <label>
          imgUrl:
          <input type='text' name='imgUrl' value={imgUrl} onChange={handleChange} />
        </label>
      <button>Submit</button>
    </form>
  );
}
