import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import SearchDrawer from './components/SearchDrawer/SearchDrawer';
import AboutUs from './pages/AboutUs';
import ContactPage from './pages/ContackPage';
import ErrorSection from './pages/ErrorPage';
import Faq from './pages/Faq';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import ProductDetail from './pages/ProductDetails';
import RegisterPage from './pages/Register';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/ShoppingCart';

import { logout } from './redux/reducers/authSlice';
import { closeDrawer } from './redux/reducers/drawerSlice';

function App() {
  const isOpen = useSelector((state) => state.drawer.isOpen);
  const dispatch = useDispatch();
  const { expiresAt } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!expiresAt) return;

    const timeLeft = expiresAt - Date.now();
    if (timeLeft <= 0) {
      dispatch(logout());
    } else {
      const timeout = setTimeout(() => dispatch(logout()), timeLeft);
      return () => clearTimeout(timeout);
    }
  }, [expiresAt, dispatch]);

  const handleCloseDrawer = () => {
    dispatch(closeDrawer());
  };

  return (
    <>
      <div
        className={`fixed top-0 w-full h-full flex bg-black/35 transition-opacity duration-300 ease-in-out ${isOpen ? "z-[150] visible opacity-100" : "z-[21] invisible opacity-0"
          }`}
        onClick={() => handleCloseDrawer()}
      ></div>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/order-tracking" element={<OrderTracking />} /> */}

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Route>

        <Route path="*" element={<ErrorSection />} />


      </Routes>
      {isOpen && <SearchDrawer isOpenDrawer={isOpen} />}
      <Footer />
    </>
  );
}

export default App;
