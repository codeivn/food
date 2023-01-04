import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./views/Header";
import Hero from "./views/Hero";
import Footer from "./views/Footer";
import FoodDetails from './views/FoodDetails';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className='content'>
          <Switch>
            <Route path="/">
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
