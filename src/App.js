import React, {Component} from 'react';
// imprt logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  render() { // as soon as state changes, this render method fires again
    return (
        <div className="App">
          {
            this.state.monsters.map(monster => (
              <h1 key={monster.id}> {monster.name} </h1>
            ))}
        </div>
    )
  }
}

export default App;

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('I have succeded')
  }, 1000)
})
// every .then is wrapped in a resolved promise
myPromise.then(value => console.log(value))
