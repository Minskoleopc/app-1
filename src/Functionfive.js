import React from "react";
import { useState } from "react";

function Functionfive({ message }) {
    const [msg, setMessage] = useState(message)
    let changeMessage = () => {
        setMessage("message 2")
    }
    return (
        <div>
            <h1>{msg}</h1>
            <button onClick={changeMessage}>ChangeMessage</button>
        </div>
    )

}
export default Functionfive