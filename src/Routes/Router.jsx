import React from 'react';
import {  BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Photo from "../components/photos/photo.jsx"

const Routes = ({HeaderOpen}) => {

    return(
    <Switch>
        <Route  exact path="/home" component={() => <Photo HeaderOpen={HeaderOpen} title="Home" query="Cats"/>} />
        <Route exact path="/pugs" component={() => <Photo HeaderOpen={HeaderOpen} title="Pugs" query="Pugs"/>} />
        <Route exact path="/animals" component={() => <Photo HeaderOpen={HeaderOpen} title="Animals" query="Animals"/>} />
        <Route exact path="/cars" component={() => <Photo HeaderOpen={HeaderOpen} title="Cars" query="Cars"/>} />
        <Route exact path="/others" component={() => <Photo HeaderOpen={HeaderOpen} title="Others" query="random"/>} />
        <Redirect to="/home"></Redirect>
    </Switch>
  
  
    )

    
}

export default Routes;
