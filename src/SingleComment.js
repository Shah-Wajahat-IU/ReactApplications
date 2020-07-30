import React from 'react'
import Profileimage from './image/profile.png'
const SingleComment = () => {
    return (
        <div className='comment'>
        <a href='/' className='avatar'>
            <img src={Profileimage} alt="profile picture" />
        </a>
        <div className='content'>
            <a href='/' className='author'>
                Walid
        </a>
            <div className='metadata'>
                <span className='date'>
                    Today at 5:00
            </span>
            </div>
            <div className='text'>
                it's Amazing 
        </div>
        </div>

    </div>
       
    )
}
export default SingleComment;