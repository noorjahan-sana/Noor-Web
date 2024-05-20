import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Home from './pages/Home';
import Order from './pages/Order';
import Cart from './pages/Cart';
import Dashboard from './pages/Dashboard';
import Page from './pages/Page';
import State from './context/State';
import Allproduct from './pages/Allproduct';
import Login from './pages/Registration/Login';
import Signup from './pages/Registration/Signup';
import ProductInfo from './pages/ProductInfo';
import AddProduct from './pages/admin/AddProduct';
import UpdateProduct from './pages/admin/UpdateProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateOrder from './pages/admin/UpdateOrder';
function App() {
  return (
    <State>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<ProtectedRoutes> <Order /></ProtectedRoutes>} />
          <Route path="/cart" element={<ProtectedRoutes><Cart /></ProtectedRoutes>} />
          <Route path='/allproducts' element={<Allproduct/>}/>
          <Route path="/dashboard" element={<ProtectedRoutesForAdmin><Dashboard /></ProtectedRoutesForAdmin>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={<ProtectedRoutesForAdmin><AddProduct/></ProtectedRoutesForAdmin>} />
          <Route path="/updateproduct" element={<ProtectedRoutesForAdmin><UpdateProduct/></ProtectedRoutesForAdmin>} />
          <Route path="/updateorder" element={<ProtectedRoutesForAdmin><UpdateOrder/></ProtectedRoutesForAdmin>} />
          <Route path="/*" element={<Page />} />
        </Routes>
      </Router>
      <ToastContainer/>
    </State>

  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem('user')) {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}

export const ProtectedRoutesForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))
  if(admin===null) {
    return <Navigate to='/login' />
  }
 
  
  if (admin.user.email === 'noorsana24042002@gmail.com') {
    return children
  }
  else {
    return <Navigate to='/login' />
  }
}