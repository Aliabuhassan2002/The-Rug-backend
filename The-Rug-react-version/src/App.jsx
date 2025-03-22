
import Navbar from './components/Navbar/Navbar'
import About from './components/AboutUs/About'
import Contact from './components/Contact/Contact'
import Accessories from './components/Accessories/Accessories'
import Shop from './components/Shop/Shop'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard'
import Register from './components/Register/Register'
import ProductDeatails from './components/ProductDetails/ProductDetails'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

import BecomeProvider from "./components/BecomeProvider/BecomeProvider";
import Login from './components/Login/Login'
import ProviderProfile from "./components/ProviderProfile/Profile"



function App() {


  return (

    <>
 <Router>
      <Navbar/>
<Routes>

  <Route path='/' index element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/contact' element={<Contact/>}></Route>
  <Route path='/shop' element={<Shop/>}></Route>
  <Route path='/accessories' element={<Accessories/>}></Route>
  <Route path='/dashboard' element={<Dashboard/>}></Route>
  <Route path='/register' element={<Register/>}></Route>
  <Route path='/login' element={<Login/>}></Route>
  <Route path='/details/:productId' element={<ProductDeatails/>}></Route>
  <Route path='/cart' element={<Cart/>}></Route>
  <Route path="/provider-profile" element={<ProviderProfile />} />
  
  
  

  <Route path='/checkout' element={<Checkout/>}></Route>
<Route path="/become-provider" element={<BecomeProvider />} />
</Routes>
<Footer/>
</Router>
  
    </>
  )
}

export default App
