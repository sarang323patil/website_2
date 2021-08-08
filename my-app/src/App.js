import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import {Route, Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home'
import Vision from './components/Vision'
import Perks from './components/Perks'
import ContactUs from './components/ContactUs'
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <Grid container className="App">
      <Router>
      <header>
        <Navbar></Navbar>
      </header>
      
        <Switch>
          <Route exact path='/'  component={Home}></Route>
          <Route exact path='/' component={Vision}></Route>
          <Route exact path='/' component={Perks}></Route>
          <Route exact path='/' component={ContactUs}></Route>
         </Switch>
        </Router> 
          
          <Vision></Vision>
          <Perks></Perks>
          <ContactUs></ContactUs>
          



        
          </Grid>
  );
}

export default App;
