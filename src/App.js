import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component'
import './App.css';


class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchField: ''
    }

    this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}))
  }

  // rule of thumb - use arrow fxns on any class methods that I define and aren't part of React (render(), etc)
  // arrow fxns bind the 'this' context to the place they were defined in the first place (App Component)
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() { // every time the state changes, this render method fires again and re-renders
    const monsters = this.state.monsters
    const searchField = this.state.searchField
    
    const filteredMonsters = monsters.filter((monster) => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1> Monsters Inc</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}> { // this component receives monsters as a prop
        }
        </CardList>
      </div>
    )
  }
}

export default App;

