import blogdata from './BlogData';
import booksdata from './BooksData';
import { useState } from 'react';
import { Route,Routes } from 'react-router';
import Home from './pages/Home';
import ContactUs from './pages/ContactUs';
import BookPage from './pages/BookPage';
import BlogPage from './pages/BlogPage';
import LoginPage from './pages/LoginPage'
import SignPage from './pages/SignPage'

function App() 
{
  const [bdata,setBlogData] =useState(blogdata)
  const [bookdata,setBookData] =useState(booksdata)
  const indexBlogData = bdata.slice(0,6);


  function saveProduct(newBlog)
  {
    setBlogData(bdata => [...bdata, newBlog]);
  }

  
  return (
    <div>

    <Routes>
      <Route path='/' element={<Home  bdata={indexBlogData}/>}></Route>
      <Route path='/blog' element={<BlogPage bdata={bdata} saveProduct={saveProduct}/>}></Route>
      <Route path='/books' element={<BookPage bookdata={bookdata} />}></Route>
      <Route path='/contact-us' element={<ContactUs></ContactUs>}></Route>
      <Route path='/login' element={<LoginPage ></LoginPage>}></Route>
      <Route path='/sign' element={<SignPage></SignPage>}></Route>
    </Routes>
    </div>

    
  );
}

export default App;
