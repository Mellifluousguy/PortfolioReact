import React from 'react'

const SocialMedia = (props) => {
  return (
    <div className='social'>
        <a href={props.link} target= 'blank_'>
        <img src={props.img} width='250px' alt="Logo" />
        <h3>{props.title}</h3>
        </a>
    </div>
  )
}

export default SocialMedia