import React,{Component} from "react";
import ChildCC from "./ChildCC";
class ParentCC extends Component {
    constructor(props){
        super(props)

        this.state = {
            parent:"parentHeadind"
        }
    }

    greetParent = (childMessage)=>{
        alert(`Helllo message from child ${childMessage}`)
    }

    render(){
        return(
            <div>
                <h1>{this.state.parent}</h1>
                <ChildCC onAction = {greetParent} />
            </div>
        )
    }

}

export default ParentCC