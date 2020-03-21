import React from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Check from './components/Check';
import Default1 from './components/Default1';
import Details from './components/Details';
import DrinkMenulist from './components/Menus/DrinkMenulist';
import FoodMenuList from './components/Menus/FoodMenuList';


function App() {
  return (
     <React.Fragment>
       <Navbar/>
       <Switch>
         <Route path="/" exact component={FoodMenuList}/>
         <Route path="/2" exact component={DrinkMenulist}/>
         <Route path="/check" component={Check}/>
         <Route path="/detalis" component={Details}/>
         <Route  component={Default1}/>
       </Switch>
     </React.Fragment>
  );
}

export default App;
