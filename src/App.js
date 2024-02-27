import logo from './logo.svg';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Hello React!!! Prima applicazione con React

        <DateApp></DateApp>
        <DateApp2 />
        <DateApp3 />

      </header>
    </div>
  );
}

//creo una classe per un  nuovo componente

class DateApp extends React.Component {
  render() {
    return <h1>Questa è la data in cui ho creato il mio primo componente con react : 27/02/2024</h1>
  }
}

// secondo metodo per creare un nuovo componente

function DateApp2() {
  return <h2>E questa è la data in cui avrò imparato a sviluppare un intera applicazione: 27/03/2024</h2>
}

// terzo metodo per creare un nuovo componente

const DateApp3 = () => <h3>Questa è la data in cui avró già iniziato ad imparare qualcos'altro 28/03/2024</h3>;

export default App;
