import { useState } from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Photo from "./components/photos/photo"


function App() {

  const [headerstate, setheaderstate] = useState({
      Open: true
  })

  function OpenOrClose(HeaderProp){
      setheaderstate(HeaderProp)
  }


  return (
    <>
      <Header OpenOrclose={OpenOrClose} />
      <Photo HeaderOpen={headerstate} title='Pugs' query="pug"/>
    </>
  );
}

export default App;
