import './App.css';
import Artist from './components/Artist';
import Carousel from './components/Slider';
import Topbar from './components/Topbar';
import Slider from './components/Slider';
import Gogo from './components/Gogo';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <div className="Container d-flex justify-content-center">
      <Slider/>
      </div>
      
    </div>
  );
}

export default App;
