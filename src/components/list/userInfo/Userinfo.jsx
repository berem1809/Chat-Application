import React from 'react'
import './userinfo.css'

const Userinfo = () => {
  return (
    <div className="userInfo">
     <div className="user">
        <img src="src\assets\avatar.png" alt="Avatar" className="src" />
        <h2>Piranaavei Joeson</h2>
     </div>
     <div className="icons">
        <img src="src\assets\more.png" alt="More" className="src" />
        <img src="src\assets\video.png" alt="Video" className="src" />
        <img src="src\assets\edit.png" alt="Edit" className="src" />
     </div>
    </div>
  )
}

export default Userinfo