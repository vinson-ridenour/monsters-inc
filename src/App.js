import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
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
        <input 
          type='search' 
          placeholder='search monsters' 
          onChange={e => 
            this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={this.state.monsters}> { // this component receives monsters as a prop
        }
        </CardList>
      </div>
    )
  }
}

export default App;

