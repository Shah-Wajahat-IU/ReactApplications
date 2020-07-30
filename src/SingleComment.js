import React from 'react'

const SingleComment = (props) => {
    console.log(props)
    return (
        <div className='comment'>
        <a href='/' className="card-img-top" style={{width:"100%"}}>
            <img src={props.profile} alt="profile picture" />
        </a>
        <div >
            <a href='/' className="card-title">
               {props.name}
        </a>
            <div className='metadata'>
                <span className='date'>
                    {props.time}
            </span>
            </div>
            <div className='card-text'>
                {props.text} 
        </div>
        </div>

    </div>
       
    )
}
export default SingleComment;