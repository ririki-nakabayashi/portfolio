import React from "react"
import ReactDOM from "react-dom"
import App from "./app/App"
import {StoreProvider} from "./app/store"
import './index.css'

ReactDOM.render(<StoreProvider><App /></StoreProvider>, document.getElementById("root"))
