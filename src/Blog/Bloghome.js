import React, { useContext } from 'react';
import { MyContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
const Bloghome = () => {
  const { title } = useContext(MyContext);
 console.warn(title);
 const ab=useNavigate()
  return (
    <div className='App' >
      <button onClick={()=>ab('/blogAdd')} type="button" className='addbtn'>add</button>
     <div className='bgn'> {title.map((t) =>
      < button className='txt'onClick={()=>ab(`/viewblog/${t.id}`)}><h1 key={t.id} className='txt'>{t.title}</h1></button> )}</div>
    </div>
  );
};

export default Bloghome;
