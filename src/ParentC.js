// parent method as a prop sending to child component , child component 
// will with args which will received in parent
import ChildC from './ChildC'

import React , {useState} from "react";

const ParentC = () =>{
    const [message,setMessage] = useState("Hello i am from parent")

    const handleChildAction = (childMessage) => {
        alert(`Message from child component ${childMessage}`)
    }

    return (
        <div>
            <h1>Parent componet</h1>
            <ChildC onAction = {handleChildAction}/>
        </div>
    );

};

export default ParentC
