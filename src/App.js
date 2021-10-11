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
      <div className ="d-flex ">
        
      <Fans className="w-25"/>
        
      <div className="Container d-flex justify-content-center w-75">
      <Slider/>
      </div>
      </div>
      
    </div>
  );
}

export default App;
