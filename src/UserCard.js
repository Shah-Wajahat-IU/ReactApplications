import React from "react";

const UserCard =(props)=>
{
    return(
        <div className='card' style={{width:"400px" }}>
            <div className ='content'>
                <div className='header'>
                    Muhammad Ahmed
                </div>
                <div className='description'>
                    {props.children}
                </div>
            </div>
            <div className='ui bottom button'>
                <i className ='add icon'></i>
                Add Friend
            </div>
        </div>
    )

}
export default UserCard;