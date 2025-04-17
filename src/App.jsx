import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom'; // Import Navigate
import './App.css';
import Checkout from './components/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import SearchDrawer from './components/SearchDrawer/SearchDrawer';
import AboutUs from './pages/AboutUs';
import AdminPanel from './pages/AdminPanel';
import ContactPage from './pages/ContackPage';
import ErrorSection from './pages/ErrorPage';
import Faq from './pages/Faq';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Login';
import OrderDetails from './pages/OrderDetails';
import OrderTracking from './pages/OrderTracking';
import ProductDetail from './pages/ProductDetails';
import RegisterPage from './pages/Register';
import ShopPage from './pages/ShopPage';
import CartPage from './pages/ShoppingCart';
import UserProfile from './pages/UserProfile';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductCreateForm from './components/AdminPanel/ProductsPanel/ProductCreate';
import OrderCompletePage from './pages/OrderComplete';
import { closeDrawer } from './redux/reducers/drawerSlice';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const isOpen = useSelector((state) => state.drawer.isOpen);
  const dispatch = useDispatch();
  // const { expiresAt } = useSelector((state) => state.auth);
  const location = useLocation(); // Get the current route

  // useEffect(() => {
  //   if (!expiresAt) return;

  //   const timeLeft = expiresAt - Date.now();
  //   if (timeLeft <= 0) {
  //     dispatch(logout());
  //   } else {
  //     const timeout = setTimeout(() => dispatch(logout()), timeLeft);
  //     return () => clearTimeout(timeout);
  //   }
  // }, [expiresAt, dispatch]);

  const handleCloseDrawer = () => {
    dispatch(closeDrawer());
  };

  return (
    <>
      <ScrollToTop />
      <ToastContainer
        toastClassName={() => "relative flex p-4 min-h-16 rounded-xl justify-between overflow-hidden cursor-pointer shadow-lg"}
        bodyClassName={() => "flex items-center text-sm font-white font-med block p-3"}
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div
        className={`fixed top-0 w-full h-full flex bg-black/35 transition-opacity duration-300 ease-in-out ${isOpen ? "z-[150] visible opacity-100" : "z-[21] invisible opacity-0"
          }`}
        onClick={() => handleCloseDrawer()}
      ></div>
      {/* Conditionally render Navbar */}
      {!location.pathname.includes('/admin') && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />

        {/* Admin Routes */}
        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/admin/product-create" element={<ProductCreateForm />} />
        </Route>

        {/* User Routes */}
        <Route element={<ProtectedRoute allowedRoles={['user']} />}>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/order-details/:id" element={<OrderDetails />} />
          <Route path="/order-track/:id" element={<OrderTracking />} />
          <Route path="/order-complete" element={<OrderCompletePage />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<ErrorSection />} />
      </Routes>
      {isOpen && <SearchDrawer isOpenDrawer={isOpen} />}
      {!location.pathname.includes('/admin') && <Footer />}


    </>
  );
}

export default App;
