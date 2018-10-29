import React from "react"
import Message from "./Message.jsx"

export default ({ messages }) => (
    <div className="messages-list">
        { messages.map((message, index) => <Message message={message} key={index}/>) }
    </div>
)