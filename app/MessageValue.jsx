import React from "react"
import JsonView from "react-json-view"

export default ({ value }) => (
    <div className="message-value">
        <JsonView src={value} name={null} displayObjectSize={false} displayDataTypes={false}/>
    </div>
)