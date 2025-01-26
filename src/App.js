
import { Component } from "react"
import CardList from "./components/card-list/card-list.component";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchfield: '',
    }
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(users => this.setState(() => { return { monsters: users } }, () => { console.log(this.state) }))
  }


  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchfield = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchfield }
    }, () => {

    })

  }
  render() {
    const {monsters,searchfield}=this.state;
    const{onSearchChange}=this;
    console.log("render");

    const filteredMonster =monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchfield);

    })

    return (
      <div className="App">
        <header className="App-header">
          <input
            className=""
            type="search"
            placeholder="search monsters"
            onChange={onSearchChange}

          />
          {/* {filteredMonster.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })} */}
          
          <CardList/>
        </header>
      </div >
    );

  }

}


export default App;
