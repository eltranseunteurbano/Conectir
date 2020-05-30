import React from 'react'
import './index.scss';


const BackgroundImage = () => {
    return(
        <div className="BackgroundImage" style={{backgroundImage: 'url("' + process.env.PUBLIC_URL + 'Images/LoginBackground.png")'}}>

        </div>
    )
}

export default BackgroundImage;