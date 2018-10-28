import React from "react"
import ReactDOM from "react-dom"
import Application from "./Application.jsx"

const Index =
    () =>
        <div className="index-page">
            <Application/>
        </div>

ReactDOM.render(<Index/>, document.getElementById("application-root"))