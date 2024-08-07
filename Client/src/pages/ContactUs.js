import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './ContactUs.css';
import { FaLocationDot,FaPhone} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import axios from 'axios';
import { toast } from 'react-toastify';

function ContactUs() 
{
  const [name,Setname] = useState('');
  const [email,Setemail] = useState('');
  const [message,Setmessage] = useState('');

  async function SubmitHandler(event)
  {
    event.preventDefault();
    
    const response = await axios.post("http://localhost:4000/contact",{name,email,message})
    console.log(response)
    if(response.data.success===true)
    {
      toast.success("Contact Info Send Successfully")
    } 
    else
    {
      toast.error("Problem in Sending Contact Info")
    }
  }
  return (
    <div className='Upper-container'>
      <Navbar />
      <div className='lower-container'>
        <div className='Contact-container'>
          <div className='content'>
            <div className='left-side'>
              <div className='address details'>
                <FaLocationDot className='icons' />
                <div className='topic'>Address</div>
                <div className='text-one'>Fazilka, Punjab</div>
                <div className='text-two'>India</div>
              </div>
              <div className='phone details'>
                <FaPhone  className='icons'/>
                <div className='topic'>Phone</div>
                <div className='text-one'>+91 9877668028</div>
              </div>
              <div className='email details'>
                <IoIosMail className='icons'/>
                <div className='topic'>Email</div>
                <div className='text-one'>nishantmanocha05@gmail.com</div>
              </div>
            </div>

            <div className='right-side'>
              <div className='topic-text'>Send us a message</div>
              <p>
                If you have any work for me or any queries related to my tutorials, you can send me a message here. It's my pleasure to help you.
              </p>
              <form onSubmit={SubmitHandler}>
                <div className='input-box'>
                  <input type='text' placeholder='Enter your name' name='name' value={name} onChange={(e)=>Setname(e.target.value)} />
                </div>
                <div className='input-box'>
                  <input type='text' placeholder='Enter your email' name='email' value={email} onChange={(e)=>Setemail(e.target.value)}/>
                </div>
                <div className='input-box message-box'>
                  <input type='text' placeholder='Enter your message' name='message' value={message} onChange={(e)=>Setmessage(e.target.value)} />
                </div>
                <div className='button'>
                  <input type='submit' value='Send Now' />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
