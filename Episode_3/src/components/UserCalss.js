import React from "react";
class UserClass extends React.Component{
    constructor(props){

        super(props);
        this.state={
            count:0
        }
        console.log("Child constructor");
    }
    componentDidMount(){
        console.log("Child component mounted")
    }
    render(){
        console.log("child render");
        const {Name,Position,Location}=this.props;
        const {count}=this.state;
        return (
            <div className="UserClass">
                <h1>{Name}</h1>
                <h2>{Position}</h2>
                <h3>{count}</h3>
                <button onClick={()=>
                    this.setState({
                        count:this.state.count+1,
                    })
                }>click me</button>
                <h3>{Location}</h3>
            </div>
        )
    }
}
export default UserClass;