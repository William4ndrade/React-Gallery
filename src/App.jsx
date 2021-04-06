import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header"
import Routes from './Routes/Router';



function App() {

  const [headerstate, setheaderstate] = useState({
      Open: true
  })

  function OpenOrClose(HeaderProp){
      setheaderstate(HeaderProp)
  }


  return (
    <>
      <BrowserRouter>
      <Header OpenOrclose={OpenOrClose} />
      <Routes HeaderOpen={headerstate}/>
     
      </BrowserRouter>
    </>
  );
}

export default App;
