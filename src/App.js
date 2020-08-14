import React from 'react';
import logo from './logo.svg';
import Greet from './components/Greet';
// import productList from './productList';
import ProductList from './components/ProductList';
// import LoginComponent from './components/LoginComponent';
import LoginContainer from './containers/LoginContainer';

function App() {
  return (
    <div className="App">
      <LoginContainer />
      {/* <Greet />
      <ProductList /> */}

     
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
