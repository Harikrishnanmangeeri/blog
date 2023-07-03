import React, {useContext} from 'react'
import { useParams } from "react-router-dom"
import { MyContext } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
const ViewBlog = () => {
  const { title  } = useContext(MyContext);
  const ab=useNavigate()
  const { id } = useParams()
  const asd=title.filter(h=>h.id==id)
  return (
    <div className='App' >
      <div className='abc'>
         <h1 className='bgn'>{asd[0].title}</h1>
         <h2 className='bgn'>{asd[0].blog}</h2>
      <button type="button" onClick={()=>ab('/')} className='addcan'>Back</button>
      </div>
    </div>
  )
}

export default ViewBlog