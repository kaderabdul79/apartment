import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Slider></Slider>
        <Switch>
          <Route exact path="/"></Route>    
        </Switch>  
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
