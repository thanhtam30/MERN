import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/ItemModal'
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import {Container} from 'reactstrap'
class App extends Component {
  render() {
    return (
      <Provider store={store}> 
         <div className="App">
       <AppNavbar/>
       <Container>
       <ShoppingList/>
       <ItemModal/>
       </Container>
      </div>
      </Provider>
     
    );
  }
}

export default App;
