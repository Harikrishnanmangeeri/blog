import './App.css';
import { Route, Routes } from 'react-router-dom';
import AddBlog from './Blog/AddBlog';
import ViewBlog from './Blog/ViewBlog';
import Bloghome from './Blog/Bloghome';
import {MyContext} from './Context/Context';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState([]);
  return (
    <>
  
     
        <MyContext.Provider value={{ title, setTitle }}>
          <Routes>
            <Route path="/" element={<Bloghome />} />
            <Route path="/blogAdd" element={<AddBlog />} />
            <Route path="/viewblog/:id" element={<ViewBlog />} />
          </Routes>
        </MyContext.Provider>
      
   
    </>
  );
}

export default App;
