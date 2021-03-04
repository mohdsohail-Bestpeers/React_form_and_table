import './App.css';
import Form from './form'
import Table from './table'

import React, { Component } from 'react'
  

export default class App extends Component {

  state = {user: []};
  adduser = (user) =>{
    console.log(user)
    //console.log(user.name)
    this.setState({user:[...this.state.user, user]})
  }

  render() {
    return (
      <div>
        <Form adduser={this.adduser}/>
       <Table users={this.state.user}/>
      </div>
    )
  }
}

