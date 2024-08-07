import React from 'react'
import BlogCards  from './BlogCards';
import './BlogSection.css'

function BlogSection (props) 
{
  return (

    <div>
        <div className="blog-heading-container">
            <div className="horizontal-line"></div>
            <h2 className="blog-heading">Latest Blog Post</h2>
        </div>

        <div className="cards-container">
        {
            props.bdata && props.bdata.length > 0 ? (
            props.bdata.map((data) => (
              <BlogCards key={data.id} {...data}></BlogCards>
            ))
          ) : (
            <p>No blog posts available</p>
          )
        }
        </div>    
    </div>
  );
}
export default BlogSection;