import React, { useEffect, useRef, useState } from "react";
import { BsHandbag } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

import { removeProduct } from "../../redux/reducers/cartSlice"; // Import the removeProduct action
import { openDrawer } from "../../redux/reducers/drawerSlice";
import NavLinks from "./NavLinks";

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const cartRef = useRef(null);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const cartItems = useSelector((state) => state.cart.items);
  const totalCartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const dispatch = useDispatch();
  const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;
  const userType = useSelector((state) => state.auth.user?.type); // Get user type from Redux store

  const handleOpenDrawer = () => {
    dispatch(openDrawer());
  };
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartRef]);


  return (
    <nav className={`bg-white fixed top-0 left-0 w-full z-50 transition-all duration-300 rounded-br-lg rounded-bl-lg ${isScrolled ? "shadow-md py-2" : "py-4"}`}>
      {/* {isOpenDrawer && <SearchDrawer isOpenDrawer={isOpenDrawer} setisOpenDrawer={setisOpenDrawer} />} */}
      <div className="flex items-center font-medium justify-between px-4 md:px-8 transition-all duration-300">
        <div className="z-50 p-3 md:w-auto w-full flex justify-between">
          <Link to="/" >
            <img src={Logo} alt="logo" className="h-10 transition-all duration-300" /></Link>
          {/* <img src={Logo} alt="logo" className="md:cursor-pointer h-10 transition-all duration-300" /> */}
          <div className="flex items-center">
            <div className="relative mr-4 md:hidden">
              <div className="inline-block nav-font" onClick={() => handleOpenDrawer()}>
                <GoSearch className="text-2xl" />

              </div>
            </div>
            {/* <div className="relative mr-4 md:hidden">
              <div className="inline-block nav-font">
                <FaRegHeart className="text-2xl" />
                {wishlistItemCount > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {wishlistItemCount}
                  </span>
                )}
              </div>
            </div> */}
            <div className="relative mr-4 md:hidden">
              <Link to="/cart" className="inline-block nav-font">
                <BsHandbag className="text-2xl" />
                {totalCartQuantity > 0 && (
                  <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                    {totalCartQuantity}
                  </span>
                )}
              </Link>
            </div>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {open ? <FaTimes /> : <FaBars />}
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div>
          <ul className="md:flex hidden uppercase items-center gap-6 transition-all duration-300">
            {/* <li>
              <Link to="/" className="py-2 px-3 inline-block nav-font">
                Home
              </Link>
            </li> */}
            <NavLinks />
            <li>
              <Link to="/" className="py-2 px-3 inline-block nav-font">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="py-2 px-3 inline-block nav-font">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className="py-2 px-3 inline-block nav-font">
                About
              </Link>
            </li>
            <li className="relative">
              <div to="/" className="py-2 px-3 inline-block nav-font cursor-pointer" onClick={() => handleOpenDrawer()} >
                <GoSearch className="text-2xl" />
              </div>
            </li>
            {/* <li className="relative">
              <div className="py-2 px-3 inline-block nav-font"
              >
                <FaRegHeart className="text-2xl" />
                {wishlistItemCount > 0 && (
                  <span className="absolute top-1 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {wishlistItemCount}
                  </span>
                )}
              </div>
            </li> */}
            <li className="relative">
              <div className="py-2 px-3 inline-block nav-font cursor-pointer" onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}>
                <BsHandbag className="text-2xl" />
                {totalCartQuantity > 0 && (
                  <span className="absolute top-1 right-0 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                    {totalCartQuantity}
                  </span>
                )}
              </div>

              <div
                ref={cartRef}
                className={`mt-drop absolute top-full right-[-49px] z-220 w-[380px] transition-opacity duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
              >
                <div className="mt-drop-sub bg-gray-50 rounded-xl shadow-2xl">
                  <div className="mt-side-widget p-6 ">
                    {cartItems.length > 0 ? (
                      cartItems.map((item) => (
                        <div key={item.id} className="cart-row flex items-center mb-4 relative">
                          <a href="#" className="img block w-16 flex-shrink-0 mr-3">
                            <img
                              src={baseUrl + item.image} // Display image
                              alt={item.name}
                              className="w-full"
                            />
                          </a>
                          <div className="mt-h flex-grow">
                            <span className="mt-h-title block text-sm font-semibold">
                              <a href="#" className="hover:text-red-500">
                                {item.name}
                              </a>
                            </span>
                            <span className="price block text-sm font-bold text-black">
                              €{item.price}
                            </span>
                            <span className="mt-h-title block text-sm">Qty: {item.quantity}</span>
                          </div>
                          <div
                            onClick={() => dispatch(removeProduct(item.id))} // Ensure item.id exists
                            className="close absolute top-2 right-2 text-red-500 hover:text-black"
                          >
                            <FaTimes />
                          </div>
                        </div>
                      ))
                    ) : (
                      <p className="text-center text-gray-500">Your cart is empty.</p>
                    )}
                    {/* Cart Total */}
                    {cartItems.length > 0 && (
                      <div className="cart-row-total border-t border-gray-200 pt-4 mb-4 text-sm font-bold text-gray-700 flex justify-between">
                        <span className="mt-total">Sub Total</span>
                        <span className="mt-total-txt">
                          €{cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                        </span>
                      </div>
                    )}
                    {/* Cart Buttons */}
                    <div className="cart-btn-row flex justify-between">
                      <Link
                        to="/cart"
                        className="btn-type2 bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        VIEW CART
                      </Link>
                      <Link
                        to="/checkout"
                        className="btn-type3 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        CHECKOUT
                      </Link>
                    </div>
                  </div>
                </div>
                <span className="mt-mdropover"></span>
              </div>
            </li>
            <li>
              {
                isAuthenticated && userType === "user" ? <Link to="/user-profile" className="py-2 px-3 inline-block nav-font">
                  <CgProfile className="text-2xl" />
                </Link> : <Link to="/login" className="py-2 px-3 inline-block nav-font">
                  <button className="btn btn-sm not-first:focus:outline-none text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-3.5 py-1.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"> Login </button>
                </Link>
              }

            </li>
          </ul>
        </div>

        {/* Mobile Navigation */}
        <ul
          className={`md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-16 pl-4 transition-transform duration-500 ${open ? "left-0" : "left-[-100%]"
            }`}
        >
          <li>
            <Link to="/" className="py-4 px-3 inline-block nav-font">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-4 px-3 inline-block nav-font">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/" className="py-4 px-3 inline-block nav-font">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/" className="py-4 px-3 inline-block nav-font">
              About
            </Link>
          </li>
          {/* <li>
            <Link to="/" className="py-4 px-3 inline-block nav-font">
              <FaHeart className="inline mr-1" /> Wishlist
              {wishlistItemCount > 0 && (
                <span className="ml-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {wishlistItemCount}
                </span>
              )}
            </Link>
          </li> */}
          {/* <li>
            <Link to="/" className="py-4 px-3 inline-block nav-font">
              <FaShoppingCart className="inline mr-1" /> Cart
              {totalCartQuantity > 0 && (
                <span className="ml-1 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalCartQuantity}
                </span>
              )}
            </Link>
          </li> */}
          <li>
            <Link to="/" className="py-4 px-3 inline-block nav-font">
              <FaUser className="inline mr-1" /> Profile
            </Link>
          </li>
          <div className="py-5">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full">
              Get Started
            </button>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
