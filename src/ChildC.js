import React from "react";
const ChildC = ({onAction}) =>{
    const handleClick = () =>{
        onAction("This message is from child")
    }
    return (
        <div>
            <h2>ChildComponent</h2>
            <button onClick={handleClick}>Send Message to Parent</button>
        </div>
    )


}
export default ChildC