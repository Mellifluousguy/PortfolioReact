import React from 'react'
import profile from '../Assets/profile.png';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom'
import './style.css'



const MainPage = () => {
  return (
    <div className='MainPage'> 
      <div className="MainContainer">
        <div className="container">
        <img src={profile} alt="Profile Picture" />
        <h1>Hi I'm <Typewriter 
        words={['Mohit Gupta', 'Web Developer', 'Student', 'Learner']}
        loop={0}
        cursor
        cursorStyle='|'/></h1>
                    <Link to="/skills"><li>{'Skills'}</li></Link>

        </div>
      </div>
    </div>
  )
}

export default MainPage