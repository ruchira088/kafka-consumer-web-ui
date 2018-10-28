import React from "react"
import { uniq, sortBy } from "ramda"
import {listen} from "./kafka-consumer"

export default class Application extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            topicNames: [],
            isConnected: false
        }
    }

    onMessage =
        message => {
            const {messages, topicNames} = this.state

            this.setState({
                messages: messages.concat(message),
                topicNames: sortBy(x => x)(uniq(topicNames.concat(message.topicName)))
            })
        }


    onConnection = () => this.setState({isConnected: true})

    componentDidMount() {
        listen(this.onMessage, this.onConnection)
    }

    render() {
        const {messages, isConnected} = this.state

        return (
            <div className="application">

            </div>
        )

    }
}