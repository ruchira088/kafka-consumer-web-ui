import axios from "axios"

const axiosClient = axios.create({ baseURL: process.env.API_SERVER })

export const fetchApiServerInformation =
    () => axiosClient.get("/service-info")

export const listen =
    (onMessage, onOpen) => {
        const webSocket = new WebSocket(`ws://${process.env.API_SERVER}/live-messages`)

        webSocket.addEventListener("open", onOpen)
        webSocket.addEventListener(
            "message",
            ({ data }) => {
                const message = JSON.parse(data)

                if (message.isHeartBeat === true) {
                    console.log(message)
                } else {
                    onMessage(message)
                }
            }
        )
    }