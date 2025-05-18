import React from 'react'
import Home from './pages/Home'
import { Route,Router,Routes, useLocation } from 'react-router-dom'
import ProductPage from './pages/ProductPage'
import Navbar from './pages/Navbar/Navbar'
import Footer from './pages/Footer'
import './App.css'
import ProductDetail from './pages/ProductDetail'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import AdminPanel from './pages/Admin/AdminPanel'
import ProductList from './pages/Admin/ProductList'
import AdminHome from './pages/Admin/AdminHome'
import MainLayout from './components/Layout/MainLayout'
import PlainLayout from './components/Layout/PlainLayout'
import CartPage from './pages/CartPage'
import { User } from 'lucide-react'
import UserProtectWrapper from './components/UserProtectWrapper'

const App = () => {
  const location = useLocation();

  // Routes where we want to hide the Navbar and Footer
  const hideNavAndFooterRoutes = ['/users/signin', '/users/signup', '/admin', '/admin/add-product', '/admin/list-products'];
  const hideNavAndFooter = hideNavAndFooterRoutes.includes(location.pathname);
  return (
    <div className='flex flex-col min-h-screen'>
      <main className='flex-1'>
        {/* Conditionally render Navbar */}
        {!hideNavAndFooter && <Navbar />}

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/product/:id' element={<ProductDetail/>} />
          <Route path='/users/signin' element={<SignIn />} />
          <Route path='/users/signup' element={<SignUp />} />
          <Route path="/cart" element={
            <UserProtectWrapper>
              <CartPage />
            </UserProtectWrapper>
          } />
          <Route path="/admin" element={<AdminHome />}>
            <Route path="add-product" element={<AdminPanel />} />
            <Route path="list-products" element={<ProductList />} />
          </Route>
        </Routes>

        {/* Conditionally render Footer */}
        {!hideNavAndFooter && <Footer />}
      </main>
    </div>
  )
}

export default App
