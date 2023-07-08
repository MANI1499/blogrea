import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import { Contact } from './components/Contact';
import { Home } from './components/Home';
import { Login } from './components/Login'
import { Provider } from 'react-redux';
import { store } from './store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/contact' element= { <Contact />} />
          <Route path='/login' element= { <Login />} />
        </Routes>
      </Router>
      </Provider>
    </div>
  );
}

export default App;
