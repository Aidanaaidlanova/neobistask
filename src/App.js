import React, { Component } from 'react';
import './App.css';
import data from './data.json';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      ar:[]
    };
  }

  async componentDidMount(){
    const get = await fetch("http://46.101.236.211:1234/interview/time_slots/")
    const json = await get.json();
    const allDates = Object.keys(json);
    let buttons=[];

    for(var i = 0; i < allDates.length; i++){
      var date = allDates[i];
      buttons.push(json[allDates[i]]);
    }
    await this.setState({ ar: buttons });
  }

  render(){

    let table = document.getElementById('table');

    if(this.state.ar !== []) {
        this.state.ar.map((one) => {
        let first = document.createElement('th');
        one.map((two)=>{
          let child = document.createElement('button');
          first.appendChild(child);
        })
        table.appendChild(first);
      });
    }
    return(
        <table>
          <thead>
          <tr>
          </tr>
          </thead>
          <th id="time">{data.map(row =>(<tr>{row.time}</tr>))}</th>
           <div id="table"></div>
       
        </table>

    )

  }
}
