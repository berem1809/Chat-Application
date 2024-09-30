import React from 'react'
import './chatList.css'

const ChatList = () => {
  return (
  <div className="ChatList">
<div className='search'>
    <div className="searchBar">
        <img src="src\assets\search.png" alt="" className="src" />
        <input type="text" placeholder="Search" />
    </div>
    <img src="src\assets\plus.png" alt=""/>
</div>
  </div>
  )
}

export default ChatList