import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import {Routes, Route} from "react-router-dom";
import Contas from "./Pages/contas/Contas";
import Cadastrar from "./Pages/contas/Cadastrar";
import Edit from './Pages/contas/Edit';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>

        <Route path="/" element={<Home/>}/> 
        <Route path="/todos/:id" element={<Contas/>}/> 
        <Route path="/add-conta" element={<Cadastrar/>}/> 
        <Route path="/edit-conta/:id" element={<Edit/>}/> 


      </Routes>
    </div>
  );
}

export default App;
