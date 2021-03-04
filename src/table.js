import './table.css';
import React, { Component } from "react";

export default class Table extends Component {
 
  render() {
      //console.log(this.props.users)
      const data = this.props.users
      const namelist = data.map((name, index) =>{
        console.log(name.name)
        return (
        
          <tr key={index}>
            <td>{name.name}</td>
            
             <td className={name.dob >= "2021-01-01" ? 'bgclr' : ''}>{name.dob}</td>
            <td>{name.gender}</td>
          </tr>
          
        )
      })
    return (
      <div>
        <h1>The data table</h1>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Gender</th>
              </tr>
              </thead>
              <tbody>
                {namelist}
              </tbody>
          </table> 
      </div>
    );
  }
}
