import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderPart from './components/HeaderPart/HeaderPart';
import Home from './components/Home/Home';
import TablePart from './components/TablePart/TablePart';


function App() {
  return (
    <div>
      <HeaderPart></HeaderPart>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tabledata' element={<TablePart></TablePart>}></Route>
      </Routes>
    </div>
  );
}

export default App;
