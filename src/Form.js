import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-dom';
import './App.css';
export default class App extends Component { 
  constructor(props){
    super(props);
    this.state={
      buttons:[]
    };
  }
  
  async componentDidMount(){
    const get = await fetch("http://46.101.236.211:1234/interview/time_slots/")
    const json = await get.json();
    const allDates = Object.keys(json);
    var parse = [
  {
    "2018-12-18": [
      {
        "id": 1,
        "time": "2018-12-18T12:00:00+06:00",
        "season": 1,
        "status": false,
        "is_free": true
      },
      {
        "id": 2,
        "time": "2018-12-18T12:15:00+06:00",
        "season": 1,
        "status": false,
        "is_free": true
      },
      {
        "id": 3,
        "time": "2018-12-18T12:30:00+06:00",
        "season": 1,
        "status": false,
        "is_free": true
      }
    ]
  },
  {
    "2018-12-05": [
      {
        "id": 5,
        "time": "2018-12-05T11:01:00+06:00",
        "season": 1,
        "status": false,
        "is_free": true
      }
    ]
  },
  {
    "2018-12-22": [
      {
        "id": 8,
        "time": "2018-12-22T00:00:00+06:00",
        "season": 1,
        "status": false,
        "is_free": true
      },
      {
        "id": 9,
        "time": "2018-12-22T09:30:00+06:00",
        "season": 1,
        "status": false,
        "is_free": true
      }
    ]
  },
  {
    "2018-12-23": [
      {
        "id": 33,
        "time": "2018-12-23T09:15:00+06:00",
        "season": 1,
        "status": false,
        "is_free": true
      },
      {
        "id": 34,
        "time": "2018-12-23T09:30:00+06:00",
        "season": 1,
        "status": false,
        "is_free": true
      }
    ]
  },
  {
    "2018-12-24": [
      {
        "id": 57,
        "time": "2018-12-24T09:15:00+06:00",
        "season": 1,
        "status": false,
        "is_free": true
      }
    ]
  },
  {
    "2018-12-25": [
      {
        "id": 81,
        "time": "2018-12-25T09:15:00+06:00",
        "season": 1,
        "status": false,
        "is_free": true
      },
      {
        "id": 82,
        "time": "2018-12-25T09:30:00+06:00",
        "season": 1,
        "status": false,
        "is_free": true
      }
    ]
  }
];

console.log("Convert", JSON.parse(JSON.stringify(parse)));

    var a = "2018-12-18";
    const date = json[allDates[0] ];
    console.log(parse);
    

   console.log(json);

   
   for (var id in parse) {
 const s = parse.map((button, index)=>{
        return(
          <tr key={button.id}>
          <td>{button.time}</td>
          <td><button>Click</button></td>
          <td></td>
          <td></td>
          <td></td>
          </tr>
        );  
      });
    this.setState({buttons: s});
}
}
render(){
  const but = this.state.buttons;
  return(
<table>
<thead>
<tr>
      <th></th>
             <th>1.05.2019</th>
             <th>2.05.2019</th>
             <th>3.05.2019</th>
             <th> </th>
          </tr>
       </thead>
       <tbody>
            {but}

       </tbody>
     </table>

   ) 

 }
    }
import React, { Component } from 'react';
import {Modal, Button} from "react-bootstrap";
import './App.css';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {


    return (
        <div className="static-modal">
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>One fine body...</Modal.Body>

            <Modal.Footer>
              <Button>Close</Button>
              <Button bsStyle="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
    );
  }

}
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-dom';
import './App.css';
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      buttons:[]
    };
  }

  async componentDidMount(){
    const get = await fetch("http://46.101.236.211:1234/interview/time_slots/")
    const json = await get.json();
    const allDates = Object.keys(json);

    console.log("allD", allDates);
    const arr = allDates;


   // console.log("Convert", JSON.parse(JSON.stringify(parse)));



/*    json.time.map((button)=>{
        return(
            <tr key={button.id}>
              <td>{button.time}</td>
              <td><button>Click</button></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
        );
      });*/
    var date;

    var output = [];


       for(var i = 0; i < allDates.length; i++ )
    {
      date = allDates[i];
      output[i] = json[date];
    }
       console.log(output);
     console.log(output[0]);
      console.log(Object.keys(output[0]));
      console.log(Object.keys(output[0][0]));

    this.setState({buttons: output});

console.log(this.state.buttons);
  }
  render(){
    const but = this.state.buttons;
    return(
        <table>
          <thead>
          <tr>
            <th></th>
            <th>1.05.2019</th>
            <th>2.05.2019</th>
            <th>3.05.2019</th>
            <th> </th>
          </tr>
          </thead>
          <tbody>
          {
            but
          }

          </tbody>
        </table>

    )

  }
}
