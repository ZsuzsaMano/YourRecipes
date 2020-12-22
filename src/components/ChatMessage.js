import React from 'react'

const ChatMessage = (props) => {
  return (
    <div className="bubble">
      <p className="bubble__name">Zsuzsa</p>
      <p className="bubble__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis velit ducimus odit.</p>
      <p className="bubble__time">2 minutes ago</p>
    </div>
  )
}

export default ChatMessage;
