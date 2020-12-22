import logo from './logo.svg';
import './App.css';
import slogo from "./slogo.png"
import React from "react"
import {TextField} from "@material-ui/core"
import emailjs from "emailjs-com"
export default class App extends React.Component {

  sendEmail=(e)=>{
    e.preventDefault()
    emailjs.sendForm("service_zwoliyp","template_bqx0l5i",e.target, "user_EcBb3qPGhB7OSmnOdVoUU")
    alert("Email sent")
   window.location.reload()
  }

  componentDidMount(){
    document.addEventListener('contextmenu',event=>{
      event.preventDefault()
    })
  }
  render(){

  
  return (
    <div className="App">
      <header className="App-header">

      <h1 className="touch">Get in touch with me!</h1>
      <br/>
      <br/> 
      <form className="formdiv"onSubmit={this.sendEmail} >
      <h1>Fill in these details:</h1>

      <label>
        Email:
        <input
          name="to_email"
          type="email"
        
          
          required />
      </label>
      

      <label>
      Name:
        <input
          name="name"
          type="text"
       
         
          required />
      </label>

     <label>
       <textarea name="message" required id="textarea1" rows="9" style={{fontFamily:"cursive"}} cols="50" placeholder="Enter message here"/>
     </label>
      <label>
        <input
          name="acceptedTerms"
          type="checkbox"
       
          required />
        I accept that I am sending a mail to another email address      
      </label>

      <button>Submit</button>
    </form>
    
    <h1 style={{color:"saddlebrown"}}>Souritra Kar 2020</h1>
      </header>
      
    </div>
  )
  }
}
