import React,{useState}from "react";
const Functiontwo = () =>{

    const [isLoggedIn , setLoggedIn] = useState(false)

    // jsx

    return (
        <div>
            <h1>Welcome to our website</h1>
            {isLoggedIn ? <p>You are logged in !</p>:<p>You are logged out!</p>}
            <button onClick={()=> setLoggedIn(!isLoggedIn)}>
                {isLoggedIn ? "Log out":"Log in"}
            </button>
        </div>
    )




}

export default Functiontwo;

// shotcircuit 
// tenary 
// variable , element based
// props