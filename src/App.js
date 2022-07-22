import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/> 


      </Routes>
    </div>
  );
}

export default App;
