import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import {Routes, Route} from "react-router-dom";
import Contas from "./Pages/contas/Contas";

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/> 
        <Route path="/todos/:id" element={<Contas/>}/> 


      </Routes>
    </div>
  );
}

export default App;
