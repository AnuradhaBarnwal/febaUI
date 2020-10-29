import React from 'react';
import './App.css';
import Row from './components/HomePage/Row'
import Nav from './components/HomePage/Nav'
import Sidebar from './Sidebar'
import Filter from './components/HomePage/Filter'


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
