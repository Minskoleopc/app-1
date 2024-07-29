import React from "react";

const items = [
    {id:1,name:"Apple"},
    {id:2,name:"Mango"},
    {id:3,name:"Grapes"},
    {id:4,name:"Banana"},
    {id:5,name:"Papaya"}
]

function Functionsix(){
    return(
        <div>
            <h1>List of fruits</h1>
            <ul>
               {items.map((item)=>(
                    <li key = {item.id}>{item.name}</li>
               ))}
            </ul>
        </div>
    )
}
export default Functionsix

