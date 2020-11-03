import React, { Component } from 'react';
import  './App.css';




export default class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      Person:{
        fullName:'Nahed Neji',
        bio:'blablabla',
        imgsrc:'/unnamed.png',
        profession:'student',
      },
        
      visibility: false,
      date: new Date()
      
    };
    
  }
  
  toggleVisibility=()=>{
  if (!this.state.visibility){
    this.setState ({
      visibility: true
    });
}
else{
   this.setState  ({
      visibility: false
   });
};
  };

 
 

   render() {
    return (
      <div className='App ' >
      <button onClick={this.toggleVisibility}>Click Me</button>     
      <h1>click the button please</h1>
      {  (this.state.visibility)?
        
     
           
    (<div>  
    
    <h2>{this.state.Person.fullName}</h2>
    <h2>{this.state.Person.bio}</h2>
    <img src={this.state.Person.imgsrc}></img>
     
     <h2>{this.state.Person.profession}</h2>
     <h4>It is {this.state.date.toLocaleTimeString()}.</h4>
     </div>):null
       }
     </div>
    )}
         
          

     
       
    
    
        

    
      
    
  }


