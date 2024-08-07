import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../redux/login';


function Navbar()
{
  const {login} = useSelector(state => state.loginuser)
  const dispatch = useDispatch();

  async function LogOutHAndler()
  {
      const response=JSON.parse(localStorage.getItem('response'));
      const check  = response.existingUser || response
      const res = await axios.delete(`http://localhost:4000/delete/${check._id}`)

      if(res.data.success===true)
      {
        toast.success("Log Out Succesfully")
        sessionStorage.clear()
        dispatch(setLogin(false))
      }
      else 
      {
        toast.warning("Some Error in Log Out")
      }
      

  }
  return (
  <div className='container'>
      <div className="menu-container">
        <Link to="/"><img className="image" src="/images/logo.jpg" alt="Logo" width="90px" height="40px"/></Link>
        <div class="menu">
            <Link to="/" className="menu-items">Home</Link>
            <Link to="/blog" className="menu-items">Blog</Link>
            <Link to="/books" className="menu-items">Books</Link>
            <Link to="/contact-us" className="menu-items">Contact Us</Link>
        </div>
        
        {
          !login ? <Link to="/login"><button className="Style-button">Login</button></Link>
               :<button className="Style-button" onClick={LogOutHAndler}>Log Out</button>
        }
    </div>
  </div>
    
  )
}
export default Navbar;