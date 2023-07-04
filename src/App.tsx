import React from 'react';
import './App.css';
import { Person, Country } from './components/Person'

function App() {
  return (
    <div className="App">
      <Person 
        name="Mani"
        email = "nana@mail.com"
        age = {23}
        isMarried = {true}
        friends = {[ 'jake', 'mani', 'jessica']}
        country = { Country.Haiti}
      />

    </div>
  );
}

export default App;
