import './App.css';
import Navber from './pages/Navber/Navber';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Erorr from './pages/Erorr/Erorr';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/Signup/Signup';

function App() {
  return (
    <>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/*" element={<Erorr></Erorr>}></Route>
      </Routes>
    </>
  );
}

export default App;
