import React, { useState } from 'react';
import Photos from '../../components/photos/photo';
import "./home.css"

const Home = ({HeaderOpen}) => {

    const [Search, SetSearch] = useState("");
    const [query, setQuery] = useState("")

  return (
      <>
          

           <Photos HeaderOpen={HeaderOpen} query={query ? query : "nature"} title="Home" />
           <div className="inputarea">
              <div className="borderinput"> 
                  <input onChange={target => {
                      const word = target.target.value
                      SetSearch(word) 
                  }} placeholder="Pesquisa sua imagem aqui" type="search" name="search" id="searchinput"/>
                  <i onClick={() => setQuery(Search)} class="fas fa-search"></i>
              </div>
           </div>
      </>
  )
  }
export default Home;