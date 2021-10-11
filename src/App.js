import './App.css';
import Artist from './components/Artist';
import Carousel from './components/Slider';
import Topbar from './components/Topbar';
import Slider from './components/Slider';
import Gogo from './components/Gogo';
import Fans from './components/Fans';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="container">
        <div></div>
      </div>
      <div id = "fansHolder" className ="d-flex mt-5">
        <Fans className="w-25"/>
      <div className="Container d-flex justify-content-center w-75">
      <Slider className = 'big-width'/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
