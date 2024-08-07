import React, { useState } from 'react'
import './SignPage.css'
import axios from 'axios'
// import { navigate } from 'react-router';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from '../redux/login';


const SignPage = () => 
{
    const navigate = useNavigate();
    const [email,Setemail] = useState('');
    const [password,SetPassword] = useState('');

    const dispatch = useDispatch();


    async function SubmitHandler(event)
    {   
        event.preventDefault();
        const response = await axios.post("http://localhost:4000/save",{email,password})


        console.log(response.data.response);
        localStorage.setItem("response",JSON.stringify(response.data.response))


        if(response.data.success === false)
        {
            toast.warning('You are already Login')
        }
        else
        {
            toast.success('SignUp Succesfully')
            dispatch(setLogin(true))
            navigate("/")
        }

    }
  return (

    <div class="sign-navbar">
    <Navbar></Navbar>

    <div class="sign-wrapper">

        <div class="sign-container">

            <div class="sign-left">
                <img src="/images/2678153.jpg" alt="Welcome Image" />
            </div>

            <div class="sign-right">

                <div id="sign-welcome">Welcome</div>

                <div class="sign-main-container">

                    <h2 id="sign-form-heading">SignUp Account</h2>

                    <div class="sign-form-container">
                        <form class="sign-formc" onSubmit={SubmitHandler}>
                            <input type="email" placeholder="Email" name="Email" value={email} onChange={(e)=>Setemail(e.target.value)} required />
                            <input type="password" placeholder="Password" name="Password" value={password} onChange={(e)=>SetPassword(e.target.value)} required />
                            <button>Continue</button>
                        </form>
                    </div>
                </div>

                <div class="sign-anchor">
                    <p class="sign-anchor-para">already have an account.<Link to="/login"> Login</Link></p>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default SignPage