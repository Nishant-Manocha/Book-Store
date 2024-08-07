import React from 'react'

function BlogCards ({name,images,description})  
{

    const desc = description.substring(0,200)+".....";
  return (
    <div className="cards">
        <img src={images} alt="" className="image card-image" width="100%"/>
        <h3 className="cards-heading">{name}</h3>
        <p className="cards-para">{desc}</p>
        </div>
  );
}
export default BlogCards;