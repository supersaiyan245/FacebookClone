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

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlePostCreate(formData);
      }}
    >
      <h3>Create Food</h3>
        <label>
          Content:
          <input type='text' name='ContentPost' value={content} onChange={handleChange} />
        </label>
        <label>
          imgUrl:
          <input type='text' name='PostImage' value={imgUrl} onChange={handleChange} />
        </label>
      <button>Submit</button>
    </form>
  );
}
