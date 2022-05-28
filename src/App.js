import './App.css';
import Navber from './pages/Navber/Navber';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Erorr from './pages/Erorr/Erorr';
import Login from './pages/Login/Login/Login';
import Signup from './pages/Login/Signup/Signup';
import Deshbord from './pages/Deshbord/Deshbord/Deshbord';
import RequireAuth from './pages/Login/RequriAuth/RequriAuth';
import Blog from './pages/Blog/Blog';
import Purchase from './pages/Order/Purchase';
import Myorders from './pages/Deshbord/Myorders/Myorders';
import Allorders from './pages/Deshbord/Allorders/Allorders';
import Addproduct from './pages/Deshbord/Addproducts/Addproduct';
import ManageProducts from './pages/Deshbord/ManageProducts/ManageProducts';
import AddReview from './pages/Deshbord/AddReview/AddReview';
import Users from './pages/Deshbord/Users/Users';
import RequireAdmin from './pages/Login/RequriAuth/RequriAdmin';
import Myprofile from './pages/Deshbord/MyProfile/Myprofile';



function App() {
  return (
    <>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="deshbord" element={
          <RequireAuth><Deshbord></Deshbord></RequireAuth>
        }>
          <Route path="myorders" element={<Myorders></Myorders>}></Route>
          <Route path="addreview" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<Myprofile></Myprofile>}></Route>
          <Route path="allorders" element={
            <RequireAdmin><Allorders></Allorders></RequireAdmin>
          }></Route>
          <Route path="addProduct" element={
            <RequireAdmin><Addproduct></Addproduct></RequireAdmin>
          }></Route>
          <Route path="manageProducts" element={
            <RequireAdmin><ManageProducts></ManageProducts></RequireAdmin>
          }></Route>
          <Route path="admin" element={
            <RequireAdmin><Users></Users></RequireAdmin>
          }></Route>



        </Route>


        <Route path="/product/:productid" element={
          <RequireAuth><Purchase></Purchase></RequireAuth>
        }></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/*" element={<Erorr></Erorr>}></Route>
      </Routes>
    </>
  );
}

export default App;
