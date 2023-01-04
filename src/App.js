import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./views/Header";
import Hero from "./views/Hero";

import FoodDetails from './views/FoodDetails';


function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='content'>
          <Switch>
            <Route exact path="/">
              <Hero />
            </Route>
            <Route path="/food/:id">
              <FoodDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
