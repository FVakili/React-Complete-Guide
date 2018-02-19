import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'stephanie', age: 26},

    ],
    otherstate: 'Some othe value'
  }
  SwitchNameHandler= (newName)=> {
    //console.log('was clicked');
    this.setState({
      persons:[
      { name: newName, age: 28},
      { name: 'Manu', age: 29},
      { name: 'stephanie', age: 27}
    ]
    })
  }

  namechangeHandler=(event) => {
    this.setState({
      persons:[
      { name: 'Max', age: 28},
      { name: event.target.value , age: 29},
      { name: 'stephanie', age: 26}
    ]
    })
  }

  render() {
    const style ={
      backgroundcolor: 'white',
      font: 'inherit',
      border: '1px soild blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className ="App">
      <h1> Hi, I'm a React App</h1>
      <p> This is really working</p>
      {/* <button onClick={this.SwitchNameHandler.bind(this, 'Maximilian')} >Switch Name</button> */}
      <button 
        style={style}
        onClick={()=> this.SwitchNameHandler('Maxmilian')}>Switch Name</button>
      <Person 
        name= {this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
      <Person 
        name= {this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click ={this.SwitchNameHandler.bind(this, 'Max!')}
        changed={this.namechangeHandler}> my Hobbies: Racing </Person>
      <Person 
        name= {this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );

    // return(
    //   React.createElement('div', {className:'App'}, React.createElement('h1', null, 'Create my First app'))
    // );
  }
}

export default App;
