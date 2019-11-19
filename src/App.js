import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(jsonResponse => this.setState({ monsters: jsonResponse}));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = 
    monsters.filter( 
      monster => monster.name
                  .toLocaleLowerCase()
                  .includes(searchField)
      );
    return (
      <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox placeHolder='search monsters' handleChange={e => {
            this.setState({searchField: e.target.value}) }}/>
        <CardList 
          monstersList={filteredMonsters} 
          />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
