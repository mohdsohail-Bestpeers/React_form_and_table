import './form.css'
import React, { Component } from "react";


export default class Form extends Component {
    constructor(props){
        super(props)

        this.state = {name:'', dob:'', gender:'male'}
      }
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value        
        })
    }
    
    handleSubmit = (event) => {
        //alert(`Name:${this.state.name},DOB:${this.state.dob}, Gender:${this.state.gender}`)
        const user = {name:this.state.name,dob:this.state.dob,gender:this.state.gender};
        this.props.adduser(user);
        event.preventDefault()
       
    }
  render() {
    return (
      <div class="container">
      <form onSubmit={this.handleSubmit}>
        <div class="row">
          <div class="col-25">
            <label for="fname">Name</label>
          </div>
          <div class="col-75">
            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Your name.."/>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="lname">Date of Birth</label>
          </div>
          <div class="col-75">
            <input type="text" name="dob" value={this.state.dob} onChange={this.handleChange} placeholder="YYYY-MM-DD"/>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="country">Gender</label>
          </div>
          <div class="col-75">
            <select name="gender" value={this.state.gender} onChange={this.handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
          </div>
        </div>
        
        <div class="row">
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
    
   
    );
  }
}
