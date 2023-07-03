import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { MyContext } from '../Context/Context';

const AddBlog = () => {
  const { title, setTitle } = useContext(MyContext);
  const navigate = useNavigate();
  const [blog, setBlog] = useState(''); 

  const handleInputChange = (event) => {
    event.preventDefault();
    const title1 = event.target.title.value;
    console.log(title1);
    
    const blog1 = event.target.blog.value;
    setTitle(s=>s=[...title, { id: Date.now(), title: title1, blog: blog1 }]);
    console.log(title);
    console.log(blog);
    navigate("/");
  };

  return (
    <div className='add'>
      <form onSubmit={handleInputChange} className='form'>
       
        <input className='inp'
          type="text"
          id="title"
          placeholder="Enter blog title"
        /><br></br>
        <textarea className='inp'
          placeholder="Add your blog"
          id="blog"
          
           
        /><br></br>
        <button className='addbtn' type="submit">Add</button>
        <button onClick={()=>navigate('/')} type="button" className='addcan'>Cancel</button>
      </form>
      <h1></h1>
    </div>
  );
};

export default AddBlog;
