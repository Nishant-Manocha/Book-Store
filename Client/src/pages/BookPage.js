import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './BookPage.css';
import BookCard from '../components/BookCard';
import Footer from '../components/Footer';

const BookPage = (props) => 
{
  const bookdata = props.bookdata;
  const [likedBooks, setLikedBooks] = useState([]);
  const [showLikedBooks, setShowLikedBooks] = useState(false);

  function showingLikedBooks() 
  {
    const getLikedBooksData = bookdata.filter(book => likedBooks.includes(book.id));
    console.log(getLikedBooksData);
    return getLikedBooksData;
  }

  const displayedBooks = showLikedBooks ? showingLikedBooks() : bookdata;


  return (
    <div className="wrapper">
      <div className="book-container">
        <div className="container">
          <Navbar />
          <h1 className='bookstore-heading'>Digital Book Store: Download Your Favorite Books</h1>
        </div>
      </div>

      <div className='book-center'>
        
        <div className='book-center-heading-container'>
          <div className='book-horizontal-line'></div>
          <h1 className='book-center-heading'>{!showLikedBooks ? "Latest Books" : "Liked Books"}</h1>
        </div>
        
        <button className='out-button' onClick={() => setShowLikedBooks(!showLikedBooks)}> {!showLikedBooks ? "Liked Books" : "Latest Books"}</button>

      </div>

      <div className='books-card-container'>
        {
          displayedBooks.map((data) => (<BookCard key={data.id} {...data} likedBooks={likedBooks} setLikedBooks={setLikedBooks}/>))
        }
      </div>
      <Footer></Footer>

    </div>

  );
}

export default BookPage;
