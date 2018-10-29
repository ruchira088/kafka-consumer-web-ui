import React from "react"
import MessageValue from "./MessageValue.jsx"
import MessageDetails from "./MessageDetails.jsx"

import "./styles/message.scss"

export default ({ message }) => (
    <div className="message">
        <MessageDetails message={message}/>
        <MessageValue value={message.value}/>
    </div>
)