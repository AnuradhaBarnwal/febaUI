import React from 'react';
import './App.css';
import Row from './Row'
import Nav from './Nav'
import Sidebar from './Sidebar'
import Filter from './Filter'


function App() {
  return (
    <div className="App">
      <Nav />
      <Filter />
      <Row />
      
      <div className="divider"></div>
      <footer>
        Copyright &copy House of Couton
      </footer>
    </div>
  );
}

export default App;
