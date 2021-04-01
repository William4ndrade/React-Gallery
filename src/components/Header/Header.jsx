import React, { useState } from 'react';
import "./Header.css";
import { Link } from "react-router-dom"

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
                        
                        <li><Link to={"/home"}> <i className="fas fa-home navicon"></i> Home</Link></li>
                         <li> <Link to={"/animals"}><i className="fas fa-dog navicon"></i> Animals</Link></li> 
                        <li><Link to={"/cars"}><i className="fas fa-car navicon"></i> Cars</Link></li>
                        <li><Link to={"/pugs"}><i className="fas fa-paw navicon"></i>Pugs </Link></li>
                        <li><Link to={"/others"}><i className="fas fa-globe-americas navicon"></i> Others </Link></li>
                    
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
                        <li><Link to={"/home"}> <i className="fas fa-home navicon"></i> </Link></li>
                        <li><Link to={"/animals"}><i className="fas fa-dog navicon"></i> </Link></li>
                        <li><Link to={"/cars"}><i className="fas fa-car navicon"></i> </Link></li>
                        <li><Link to={"/pugs"}><i className="fas fa-paw navicon"></i> </Link></li>
                        <li><Link to={"/Others"}><i className="fas fa-globe-americas navicon"></i></Link></li>
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