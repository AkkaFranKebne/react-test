import React, { Component } from 'react';
import HelloStateless from './HelloStateless.jsx';{/* add new import */}

class HelloStatefull extends Component {
    
 constructor(props){
   super(props);
   this.state={
     counter:0
   }
 }
klikam = ()=>{
   this.setState({counter:this.state.counter+1},
     ()=>{  console.log(this.state.counter);
     })

 } 

odejmuje = ()=>{
   this.setState({counter:this.state.counter-1},
     ()=>{  console.log(this.state.counter);
     })

 }

     render(){
        const {count} = this.state;
        console.log(this.props);
        return(
            <div className ="HelloStatefull">
            <HelloStateless/>
            <div>{count}</div>
            <button onClick={this.klikam} >+1</button>
            <button onClick={this.odejmuje} >-1</button>
            </div>
        );
        
    }  
}

{/* wywoluje komponent*/}
export default HelloStatefull;