
import {Component} from "react";
class About extends Component{
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"Dummy",
                location:"default"
            }
        }
    //    console.log("parent constructor");
    }
    async componentDidMount(){
  /*      console.log("Parent Component Did Mount");
        const data=await fetch("https://api.github.com/users/akshaymarch7");
        const json=await data.json();
        this.setState({
            userInfo:json,
        })*/
       this.timer=setInterval(()=>{
        console.log("Namaste react")},1000)
    }
    componentDidUpdate(){
        console.log("Parent Component did update")
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("Parent component unmount");
    }

    render(){
  /*      const {name,location}=this.state.userInfo;
 //       console.log("Parent render")
        return (<div className="about">
            <h1>Namaste React</h1>
            <UserClass Name={name} Location={location}/>
         
        </div>);*/

    }
}

export default About;