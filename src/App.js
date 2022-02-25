import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Apartments from './pages/Apartments';
import Homepage from './pages/Homepage';

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
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
