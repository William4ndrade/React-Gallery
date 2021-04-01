import React, { useState } from 'react';
import "./Header.css";


const Header = (props) => {
    const [screen, setscreen] = useState({
        screenOpen: true
    })

    function ChangeScreen() {
        if (screen.screenOpen) {
            setscreen({
                screenOpen: false
            })

        } else {
            setscreen({
                screenOpen: true
            })
    
        }

    }

    


    return (
        
        <>
        {props.OpenOrclose(screen.screenOpen)}
        {screen.screenOpen 
            ? 
            <header className="headerpage">
            <section id='content'>
                <div className="brandbar" >
                    <h2 className="brandname"> <i className="fas fa-grip-lines-vertical"></i>Photos</h2>
                    <p className="bars" onClick={ChangeScreen} ><i className="fas fa-bars"></i></p>


                </div>
                <nav className="navegationarea">
                    <ul>
                        <li><a href="/home"> <i className="fas fa-home navicon"></i> Home</a></li>
                        <li><a href="/home"><i className="fas fa-dog navicon"></i> Animals</a></li>
                        <li><a href="/home"><i className="fas fa-car navicon"></i> Cars</a></li>
                        <li><a href="/home"><i className="fas fa-paw navicon"></i>Pugs </a></li>
                        <li><a href="/home"><i className="fas fa-globe-americas navicon"></i> Others </a></li>

                    </ul>


                </nav>


            </section>
            <footer>
                <p>© William, Inc.</p>
            </footer>
        </header>

            :

            <header className="headerpageclose">
            <section id='content'>
                <div className="brandbarclose" >
                    <p className="bars" onClick={ChangeScreen} ><i className="fas fa-bars"></i></p>
                </div>
                <nav className="navegationareaclose">
                    <ul>
                        <li><a href="/home"> <i className="fas fa-home navicon"></i> </a></li>
                        <li><a href="/home"><i className="fas fa-dog navicon"></i> </a></li>
                        <li><a href="/home"><i className="fas fa-car navicon"></i> </a></li>
                        <li><a href="/home"><i className="fas fa-paw navicon"></i> </a></li>
                        <li><a href="/home"><i className="fas fa-globe-americas navicon"></i></a></li>
                    </ul>
                </nav>
            </section>
            <footer>
                <p>© William, Inc.</p>
            </footer>
        </header>
        
    
    
    
    
    
    }
        

        </>
        


    )
}

export default Header;