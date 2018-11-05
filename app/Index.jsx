import React from "react"
import ReactDOM from "react-dom"
import Application from "./Application.jsx"

import "./styles/index.scss"

const Index =
    props =>
        <div className="index-page">
            <Application {...props}/>
        </div>

ReactDOM.render(<Index document={document} window={window}/>, document.getElementById("application-root"))