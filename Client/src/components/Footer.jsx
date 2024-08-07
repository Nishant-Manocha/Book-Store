import React from 'react'
import { FaLocationDot,FaPhone} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import './Footer.css'
import { Link } from 'react-router-dom';
function Footer() 
{
  return (
    <div className="footer">
        <div className='footer-container'>
            <div className='footer-top'>
                    <div className='footer-items'>
                        <div className='footer-icons'>
                            <FaLocationDot className='footer-icons'></FaLocationDot>
                        </div>
                        <div className='footer-icons-details'>
                            <h3>Find Us</h3>
                            <p>Fazilka,Punjab</p>
                        </div>
                    </div>
                    <div className='footer-items'>
                        <div className='footer-icons'>
                            <FaPhone className='footer-icons'></FaPhone>
                        </div>
                        <div className='footer-icons-details'>
                            <h3>Call Us</h3>
                            <p>9877668028</p>
                        </div>
                    </div>
                    <div className='footer-items'>
                        <div className='footer-icons'>
                            <IoIosMail></IoIosMail>
                        </div>
                        <div className='footer-icons-details'>
                            <h3>Mail Us</h3>
                            <p>nishantmanocha05@gmail.com</p>
                        </div>
                    </div>
            </div>
        
            <div className="footer-line"></div>

            <div className="footer-bottom">
                    <div className='footer-bottom-left'>
                        <div className='footer-logo'>
                           <Link to="/"><img src="/images/logo.jpg" alt="" width={"100px"} height={"100px"} className='image'/></Link>
                            <h2>Book Store</h2>
                        </div>
                        <p>Welcome to Literary Haven, your ultimate destination for all things literary. Whether you're an avid reader, an aspiring writer, or just someone who loves to get lost in the world of books, our website has something special for you.</p>
                        <h3>Follow Us</h3>

                        <div className='footer-buttons'>
                            <Link to="/"><img src="/images/linkedin.jpeg" alt="" width={"30px"} height={"30px"} className='footer-social-handels'/></Link>
                            <Link to="/"><img src="/images/insta.png" alt="" width={"30px"} height={"30px"}/></Link>
                        </div>
                    </div>

                    <div className='footer-bottom-right'>
                        <h2>Useful Links</h2>
                        <div className='footer-underline'></div>
                        <div className="footer-menu">
                            <Link to="/" class="footer-menu-items">Home</Link>
                            <Link to="/blog" class="footer-menu-items">Blog</Link>
                            <Link to="/books" class="footer-menu-items">Books</Link>
                            <Link to="/contact-us" class="footer-menu-items">Contact Us</Link>
                        </div>
                    </div>

            </div>

            <div className="footer-line"></div>

            <div className="copyright-para">
                This is a college project of Mimit Malout
            </div>
        </div>
    </div>
    
  );
}
export default Footer;