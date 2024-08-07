import React from 'react'
import Navbar from '../components/Navbar'
import BlogSection from '../components/BlogSection'
import NewForm from '../components/NewForm'


const BlogPage = (props) => 
{
  const styles = { backgroundColor: "rgb(209 213 219)",width:"100%"};

    function saveProduct(newBlog)
    {
      props.saveProduct(newBlog)
    }
  
  return (
    <div className="wrapper">
      <div className="book-container">
        <div className="container">
          <Navbar />
          <h1 className='bookstore-heading'>ALL The Blog That Will Going To Help You in Journey</h1>
        </div>
      </div>

    <div className='container'>
      <BlogSection bdata={props.bdata}></BlogSection>
    </div>

    <div className='bcontainer' style={styles}>
      <NewForm  onsaveProduct={saveProduct} saveProduct={props.saveProduct}></NewForm>
    </div>

    </div>
  )
}

export default BlogPage