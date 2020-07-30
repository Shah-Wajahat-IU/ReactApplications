import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment'
import Profileimage from './image/profile.png'
import Profileimage1 from './image/profile1.png'
import Profileimage2 from './image/profile2.png'
const App = () => {
    return (
        <div className='ui comments'>
            <SingleComment name="Wajahat" 
            time='Today at 5:00' 
            text ="Really Good work"
            profile={Profileimage}/>
            <SingleComment name="Hamza" 
            time='Today at 6:30'
            text="Its an Amzaing app"
            profile={Profileimage1}/>
            <SingleComment name ="Kamran" 
            time='Today at 7:00'
            text ="I really Love it"
            profile={Profileimage2}
             />
        </div>

    )


}
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)