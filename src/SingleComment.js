import React from 'react'
import Profileimage from './image/profile.png'
const SingleComment = (props) => {
    console.log(props)
    return (
        <div className='comment'>
        <a href='/' className='avatar'>
            <img src={props.profile} alt="profile picture" />
        </a>
        <div className='content'>
            <a href='/' className='author'>
               {props.name}
        </a>
            <div className='metadata'>
                <span className='date'>
                    {props.time}
            </span>
            </div>
            <div className='text'>
                {props.text} 
        </div>
        </div>

    </div>
       
    )
}
export default SingleComment;