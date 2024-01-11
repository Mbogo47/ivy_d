import React from 'react'
import ChatNavBar from './ChatNavBar'
import Search from './Search'
import Chats from './Chats'

const SideBar = () => {
  return (
    <div className="sidebar">
    <ChatNavBar />
    <Search/>
    <Chats/>
  </div>
  )
}

export default SideBar