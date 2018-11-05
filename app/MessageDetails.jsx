import React from "react"
import classNames from "classnames"
import moment from "moment"

export default ({ message }) => (
    <div className="message-details">
        <KeyValuePair keyName="Key" value={message.key} className="message-key"/>
        <KeyValuePair keyName="Topic" value={message.topicName} className="message-topic"/>
        <KeyValuePair
            keyName="Received at"
            value={moment(message.receivedAt).format("h:mm:ss:SSS a, ddd MMM Do YYYY")}
            className="message-received-at"/>
    </div>
)

const KeyValuePair =
    ({ keyName, value, className }) => (
        <div className={classNames(className, "kv-pair")}>
            <div className="kv-pair-key">{ keyName }</div>
            <div className="kv-pair-value">{ value }</div>
        </div>
    )