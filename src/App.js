import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      sellItems: [],
      searchField: ''
    };
  }

  // This part can take some json predefined data for me
  // componentDidMount(){
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({ sellItems: users }));
  // }

  componentDidMount(){
    fetch('items.json')
    .then(response => response.json())
    .then(name => this.setState({ sellItems: name }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { sellItems, searchField } = this.state;
    const filterSellItems = sellItems.filter(singleItem => 
      singleItem.name.toLowerCase().includes(searchField.toLowerCase())
    );
  
    console.log(filterSellItems);
    return (
      <div className="App">
        <h1>Products for Sell</h1>
        <SearchBox 
          placeholder='Search products'
          handleChange={ this.handleChange }  
        />
        <CardList sellItems={ filterSellItems } />
      </div>
    )
  }
}

export default App;
