import React from 'react' 
import Rainbow from './hoc/rainbow'

const About = () => {
    return (
        <div className="container">
           <h4 className="center">About</h4>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ducimus quia modi earum, nam nisi autem. Et dolorum praesentium nobis dignissimos corrupti cum nemo ut!</p>
        </div>
    )
}
export default Rainbow(About)