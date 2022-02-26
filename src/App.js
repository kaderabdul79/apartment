import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Apartments from './pages/Apartments';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleApartment from './pages/SingleApartment';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/"><Homepage></Homepage></Route>    
        </Switch>  
        <Switch>
          <Route path="/apartments"><Apartments></Apartments></Route>    
        </Switch>  
        <Switch>
          <PrivateRoute path="/myapartments"><SingleApartment></SingleApartment></PrivateRoute>    
        </Switch> 
        <Switch>
          <Route path="/contact"><Contact></Contact></Route>    
        </Switch>  
        <Switch>
          <Route path="/login"><Login></Login></Route>    
        </Switch>
        <Switch>
          <Route path="/register"><Register></Register></Route>    
        </Switch>
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
