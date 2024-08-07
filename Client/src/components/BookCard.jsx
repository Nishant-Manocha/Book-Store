import React from 'react'
import './BookCard.css'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { saveAs } from 'file-saver';

function BookCard (props)  
{
    // const descr = props.desc.substring(0,200)+".....";
    let likedBooks=props.likedBooks;
    let setLikedBooks=props.setLikedBooks;
    let title = props.title;
    function handleDownload() 
    {
      saveAs(props.downloadUrl,`${title}.pdf`);
    }
  

    function onclickHandler()
    {
        if(likedBooks.includes(props.id))
        {
            setLikedBooks((prev) => prev.filter((cid) => cid !== props.id));
            toast.warning('Liked Removed')

        }
        else
        {
            if(likedBooks.length===0)
            {
                setLikedBooks([props.id])
            }
            else
            {
                setLikedBooks((prev)=> [...prev,props.id])
            }
            toast.success('Liked succesfully')
        }
        
    }

  return (
    
    <div className="book-cards">
        <div className='left-image'>
            <img src={props.image} alt="" className="book-image" width="250px" height="200px" />
        </div>
        <div className='right-desc'>
            <h3 className="books-cards-heading">{props.title}</h3>
            <p className='books-cards-para'>{props.desc}</p>

            <div className='books-button'>
                <button onClick={onclickHandler} >
                    {
                        likedBooks.includes(props.id) ? <FcLike className='like-icon'></FcLike> : <FcLikePlaceholder className='like-icon'></FcLikePlaceholder>
                    }
                </button>
                <button className='books-download-button' onClick={handleDownload}>Download</button>
            </div>
        </div>
    </div>
  );
}
export default BookCard;