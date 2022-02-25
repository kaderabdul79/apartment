import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Apartments from './pages/Apartments';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
import Login from './pages/Login';

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
          <Route path="/contact"><Contact></Contact></Route>    
        </Switch>  
        <Switch>
          <Route path="/login"><Login></Login></Route>    
        </Switch>
        {/* <Switch>
          <Route path="/register"><Contact></Contact></Route>    
        </Switch> */}
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
