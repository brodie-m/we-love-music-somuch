import './App.css';
import { BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect } from 'react-router-dom'
import Artist from './components/Artist';
import Carousel from './components/Slider';
import Topbar from './components/Topbar';
import Slider from './components/Slider';
import Gogo from './components/Gogo';
import Fans from './components/Fans';
import Something from './components/Something'
import NotFound from './components/NotFound.js'
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route path='/home' exact>
          <div className="App">

            <Topbar />
            <div className="container">

            </div>
            <div id="fansHolder" className="d-flex mt-5">
              <Fans className="w-25" title="its a prop" />
              <div className="Container d-flex justify-content-center w-75">
                <Slider />
              </div>
            </div>
          </div>
        </Route>
        <Route path='/something' exact>
          <Topbar />
          <Something />
        </Route>
        <Route path="*">
          <Topbar />
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
