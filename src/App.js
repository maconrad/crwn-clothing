import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Homepage from './pages/homepage/Homepage.comp'
import './App.css';

const HatsPage =(props) => {
  console.log(props)
  //props.match.params.hatId
  //Option 1 via Link
  //Option 2 via History prop
  //Option 3 via props.match.url = dynamic Routes
  return (
  <div>
    <h1>Hats Page</h1>
    <Link to='/'>Home</Link>
    <Link to={`${props.match.url}/13`}>To number 13</Link>
    <button onClick={() => props.history.push('/')} >Back</button>
  </div>
)}

function App() {
  // exact={false} (or without the exact)
  // localhost:3000/hats  -> Homepage matches and both render 
  // <Route path='/hats/:hatId' component={HatsDetails} />
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
        
      </Switch>
    </div>
  );
}

export default App;
