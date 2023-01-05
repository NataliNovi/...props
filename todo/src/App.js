import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [valueInput, setValueInput] = useState([]);

  return (
    <div className="App">
   <Header setValueInput={setValueInput} valueInput={valueInput}></Header>
   <Main valueInput={valueInput}></Main>
    </div>
  );
}

export default App;
