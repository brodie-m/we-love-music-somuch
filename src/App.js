import './App.css';
import {BrowserRouter as Router, Route, Link, NavLink, Switch} from 'react-router-dom'
import Artist from './components/Artist';
import Carousel from './components/Slider';
import Topbar from './components/Topbar';
import Slider from './components/Slider';
import Gogo from './components/Gogo';
import Fans from './components/Fans';
import Something from './components/Something'
function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/home' exact>
          <div className="App">

          <Topbar/>
          <div className="container">
              
          </div>
          <div id = "fansHolder" className ="d-flex mt-5">
            <Fans className="w-25" title="its a prop"/>
          <div className="Container d-flex justify-content-center w-75">
          <Slider/>
          </div>
          </div>
          </div>
        </Route>
        <Route path = '/something' exact>
            <Something/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
