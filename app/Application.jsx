import React from "react"
import {uniq, sortBy} from "ramda"
import {listen} from "./kafkaConsumer"
import TopicsList from "./TopicsList.jsx"
import MessagesList from "./MessagesList.jsx"

const MESSAGE_LIST_SIZE = 200

export default class Application extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: [],
            topicNames: [],
            followTail: true,
            isConnected: false
        }
    }

    onMessage =
        message => {
            const {messages, topicNames} = this.state

            const newMessages =
                messages.length > MESSAGE_LIST_SIZE ? messages.slice(1).concat(message) : messages.concat(message)

            this.setState({
                messages: newMessages,
                topicNames: sortBy(x => x)(uniq(topicNames.concat(message.topicName)))
            })
        }


    onConnection = () => this.setState({isConnected: true})

    componentDidMount() {
        listen(this.onMessage, this.onConnection)
    }

    componentDidUpdate() {
        this.follow()
    }

    follow = () => {
        const {followTail} = this.state
        const {window, document} = this.props

        if (followTail) {
            window.scrollTo(0, document.body.offsetHeight)
        }

    }

    render() {
        const {messages, isConnected, topicNames} = this.state

        return (
            <div className="application">
                <TopicsList topicNames={topicNames}/>
                <MessagesList messages={messages} isConnected={isConnected}/>
            </div>
        )

    }
}