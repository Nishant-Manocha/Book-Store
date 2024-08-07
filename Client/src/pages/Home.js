import React from 'react'
import './Home.css'
import Navbar  from '../components/Navbar'
import BlogSection from '../components/BlogSection'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

function Home(props)  
{
  return (
    <div className="wrapper">
        <div className="hero-container">
            <div className="container">
                <Navbar login={props.login} setLogin={props.setLogin}></Navbar>


                <div className="hero-main-content">
                    <div className="left">
                        <img src="/images/library.png" alt="Library" width="100%"/>
                    </div>
                    <div className="right">
                        <h1>Your Gateway to Literary Treasures</h1>
                        <div className="line"></div>
                        <p>Dive into a world of endless stories, knowledge, and imagination with our curated collection of books spanning every genre.</p>
                        <button className="Style-button learn-button">Learn More</button>
                    </div>
                </div>

            </div>
        </div>

        <div className='container'>
            <BlogSection bdata={props.bdata}></BlogSection>

        
        </div>

        <AboutUs></AboutUs>
        <Footer></Footer>
      
    </div>
  )
}
export default Home;