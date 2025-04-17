import React, { useState } from "react";
import { FaAngleDown, FaExchangeAlt, FaHeart, FaStar, FaThLarge, FaThList } from "react-icons/fa";
import ProductCard from "../components/ProductTab/ProductCard";

const ShopPage = () => {
  const [view, setView] = useState("grid");

  const brandFilters = [
    { id: 1, label: "Casali", num: 2 },
    { id: 2, label: "Decar", num: 12 },
    { id: 3, label: "Fantini", num: 4, checked: true },
    { id: 4, label: "Flamentstyle", num: 4 },
    { id: 5, label: "Heerenhuis", num: 6 },
    { id: 6, label: "Hoffmann", num: 10 },
    { id: 7, label: "Italfloor", num: 3 },
  ];

  const categories = [
    { label: "CHAIRS", num: 12 },
    { label: "SOFAS", num: 24 },
    { label: "ARMCHAIRS", num: 9 },
    { label: "BEDROOM", num: 2 },
    { label: "LIGHTING", num: 17 },
    { label: "KITCHEN", num: 10 },
    { label: "ACCESSORIES", num: 23 },
  ];

  const hotSaleProducts = [
    {
      label: "Egon Wooden Chair",
      image: "/images/img05.jpg",
      off: "$75,00",
      price: "$55,00",
      stars: [1, 1, 1, 0],
    },
    {
      label: "Oyo Cantilever Chair",
      image: "/images/img08.jpg",
      off: "$75,00",
      price: "$55,00",
    },
    {
      label: "Kurve Chair",
      image: "/images/img09.jpg",
      off: "$75,00",
      price: "$55,00",
      stars: [1, 1, 1, 0],
    },
    {
      label: "Marvelous Wooden Chair",
      image: "/images/img10.jpg",
      off: "$75,00",
      price: "$55,00",
    },
  ];

  const products = [
    { id: 1, name: "Bombi Chair", image: "/images/img01.jpg", price: "200,00" },
    { id: 2, name: "Product 2", image: "/images/img02.jpg", price: "150,00" },
    { id: 3, name: "Product 3", image: "/images/img03.jpg", price: "100,00" },
    { id: 4, name: "Product 4", image: "/images/img04.jpg", price: "250,00" },
    { id: 5, name: "Product 5", image: "/images/img05.jpg", price: "300,00" },
    { id: 6, name: "Product 6", image: "/images/img06.jpg", price: "200,00" },
    { id: 7, name: "Product 7", image: "/images/img07.jpg", price: "150,00" },
    { id: 8, name: "Product 8", image: "/images/img08.jpg", price: "100,00" },
    { id: 9, name: "Product 9", image: "/images/img09.jpg", price: "250,00" },
    { id: 10, name: "Product 10", image: "/images/img10.jpg", price: "300,00" },
  ];

  return (
    <>
      <section
        className="mt-contact-banner bg-cover bg-center py-16 mt-24"
        style={{ backgroundImage: 'url(/images/img43.jpg)' }}
      >
        <div className="container mx-auto px-4">
          <div className="row">
            <div className="col-xs-12 text-center">
              <h1 className="text-5xl font-bold uppercase mb-4 text-gray-800 tracking-wider">
                Chair
              </h1>
              {/* <nav className="breadcrumbs">
                <ul className="flex justify-center items-center space-x-2 text-sm">
                  <li className="flex items-center">
                    <a
                      href="index.html"
                      className="text-gray-800 hover:text-red-500 transition-colors"
                    >
                      home
                    </a>
                  </li>
                  <li className="text-gray-800">Register</li>
                </ul>
              </nav> */}
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Sidebar */}
          <aside
            id="sidebar"
            className="w-full lg:w-1/4 px-4 mb-8 lg:mb-0 wow fadeInLeft"
            data-wow-delay="0.4s"
          >
            {/* Filter Widget */}
            <section className="shop-widget filter-widget bg-gray-100 border border-gray-200 p-8 mb-10">
              <h2 className="text-xl font-bold uppercase text-gray-700 mb-4">
                FILTER
              </h2>
              <span className="sub-title text-sm font-semibold text-gray-700 block mb-4">
                Filter by Brands
              </span>
              <ul className="space-y-2">
                {brandFilters.map((brand) => (
                  <li key={brand.id} className="flex items-center justify-between">
                    <label htmlFor={`check-${brand.id}`} className="flex items-center">
                      <input
                        id={`check-${brand.id}`}
                        type="checkbox"
                        defaultChecked={brand.checked}
                        className="mr-2"
                      />
                      <span>{brand.label}</span>
                    </label>
                    <span className="text-sm text-gray-600">{brand.num}</span>
                  </li>
                ))}
              </ul>
              <span className="sub-title text-sm font-semibold text-gray-700 block mt-6 mb-4">
                Filter by Price
              </span>
              <div className="price-range">
                <div className="range-slider relative h-1 bg-gray-400 rounded-full mb-4">
                  <span className="dot absolute left-5 top-[-4px] w-3 h-3 border-2 border-gray-700 bg-white rounded-full"></span>
                  <span className="dot dot2 absolute left-40 top-[-4px] w-3 h-3 border-2 border-gray-700 bg-white rounded-full"></span>
                </div>
                <span className="price text-sm text-gray-700 block mb-4">
                  Price $ 10 - $ 599
                </span>
                <a
                  href="#"
                  className="filter-btn inline-block text-sm bg-gray-700 text-white py-1 px-3 rounded hover:bg-red-500 transition-colors"
                >
                  Filter
                </a>
              </div>
            </section>

            {/* Categories Widget */}
            <section className="shop-widget mb-10">
              <h2 className="text-xl font-bold uppercase text-gray-700 mb-4">
                CATEGORIES
              </h2>
              <ul className="space-y-3 text-gray-600 uppercase">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center border-b border-gray-600 pb-2"
                  >
                    <a href="#" className="hover:text-red-500">
                      {cat.label}
                    </a>
                    <span className="text-sm">{cat.num}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Hot Sale Widget */}
            <section className="shop-widget">
              <h2 className="text-xl font-bold uppercase text-gray-700 mb-4">
                HOT SALE
              </h2>
              {hotSaleProducts.map((prod, idx) => (
                <div key={idx} className="flex mb-4">
                  <div className="img w-20 flex-shrink-0">
                    <a href="product-detail.html">
                      <img src={prod.image} alt="image description" className="w-full" />
                    </a>
                  </div>
                  <div className="text ml-3 flex-grow">
                    <div className="frame mb-1">
                      <strong className="block text-sm text-gray-700">
                        <a href="product-detail.html" className="hover:text-red-500">
                          {prod.label}
                        </a>
                      </strong>
                      {prod.stars && (
                        <ul className="mt-stars flex space-x-1 text-yellow-500">
                          {prod.stars.map((star, i) => (
                            <li key={i}>
                              <FaStar className={`fa ${star ? "fa-star" : "fa-star-o"}`} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      {prod.off && (
                        <del className="text-sm text-gray-500">{prod.off}</del>
                      )}
                      <span className="text-sm text-gray-800">{prod.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </aside>

          {/* Main Content */}
          <div
            className="w-full lg:w-3/4 px-4 wow fadeInRight"
            data-wow-delay="0.4s"
          >
            {/* Shoplist Header */}
            <header className="mt-shoplist-header flex flex-col md:flex-row items-center justify-between mb-6">
              <div className="btn-box relative mb-4 md:mb-0">
                <ul className="flex space-x-4 items-center">
                  <li className="relative group">
                    <a
                      href="#"
                      className="drop-link inline-flex items-center text-sm font-medium text-gray-600 border border-gray-300 rounded-full px-4 py-2 hover:text-red-500 hover:border-red-500 transition-colors"
                    >
                      Default Sorting
                      <FaAngleDown className="ml-2" aria-hidden="true" />
                    </a>
                    <div
                      className="drop absolute left-0 mt-0 w-40 bg-white border border-gray-300 rounded opacity-0 invisible
                   transition-opacity duration-300 group-hover:opacity-100 group-hover:visible
                   pointer-events-none group-hover:pointer-events-auto z-10"
                    >
                      <ul className="list-none">
                        <li>
                          <a href="#" className="block px-4 py-2 hover:text-red-500">
                            ASC
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:text-red-500">
                            DSC
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:text-red-500">
                            Price
                          </a>
                        </li>
                        <li>
                          <a href="#" className="block px-4 py-2 hover:text-red-500">
                            Relevance
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button
                      onClick={() => setView("grid")}
                      className={`mt-viewswitcher inline-block p-3 border border-gray-300 rounded-full text-gray-600 hover:text-red-500 transition-colors ${view === "grid" ? "bg-gray-300" : ""}`}
                    >
                      <FaThLarge aria-hidden="true" />
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setView("list")}
                      className={`mt-viewswitcher inline-block p-3 border border-gray-300 rounded-full text-gray-600 hover:text-red-500 transition-colors ${view === "list" ? "bg-gray-300" : ""}`}
                    >
                      <FaThList aria-hidden="true" />
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mt-textbox text-sm text-gray-600">
                <p>
                  Showing <strong>1–9</strong> of <strong>65</strong> results
                </p>
                <p>
                  View{" "}
                  <a href="#" className="hover:text-red-500">
                    9
                  </a>{" "}
                  /{" "}
                  <a href="#" className="hover:text-red-500">
                    18
                  </a>{" "}
                  /{" "}
                  <a href="#" className="hover:text-red-500">
                    27
                  </a>{" "}
                  /{" "}
                  <a href="#" className="hover:text-red-500">
                    All
                  </a>
                </p>
              </div>
            </header>

            {/* Product List */}
            <div className={`mt-productlisthold list-none flex flex-wrap mx-2 ${view === "list" ? "flex-col" : ""}`}>
              {products.map((product) => (
                view === "grid" ? (
                  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                    <ProductCard key={product.id} name={product.name} image={product.image} price={product.price} product={product} />
                  </div>
                ) : (
                  <div className="pb-2 overflow-hidden border-b border-gray-200 after:content-[''] after:table after:clear-both">
                    <div className="inline-block align-top w-full sm:w-1/3 pt-4">
                      <img
                        src={product.image}
                        alt="image description"
                        className="mx-auto max-w-full"
                      />
                    </div>
                    <div className="inline-block align-top w-full sm:w-2/3 pt-4 pl-4">
                      <div className="sm:flex sm:justify-between">
                        <div className="sm:w-2/3 pr-4 border-r border-gray-200">
                          <strong className="block text-lg text-gray-700 font-bold mb-4">
                            <a
                              href="product-detail.html"
                              className="transition duration-250 hover:text-red-500"
                            >
                              {product.name}
                            </a>
                          </strong>
                          <span className="block text-xl text-black font-semibold mb-5">
                            {product.price}
                          </span>
                          <p className="text-sm text-gray-600">
                            Koila is a chair designed for restaurants and food lovers in general.
                            Designed in collaboration with restaurant professionals, it ensures
                            comfort and an ideal posture, as there are armrests on both sides of the
                            chair.
                          </p>
                        </div>
                        <div className="sm:w-1/3 text-right pt-4 pr-4">
                          <ul className="flex justify-end space-x-1 text-yellow-500 mb-5">
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              <FaStar />
                            </li>
                            <li>
                              Reviews (12)
                            </li>
                          </ul>
                          <a
                            href="#"
                            className="btn-cart text-sm text-gray-600 bg-gray-200 font-bold w-full rounded-full py-3 mb-5 uppercase text-center block transition duration-250 hover:bg-red-500 hover:text-white"
                          >
                            ADD TO CART
                          </a>
                          <ul className="text-xs text-gray-600 uppercase mb-5 flex flex-col items-end space-y-2">
                            <li>
                              <a href="#" className="transition duration-250 hover:text-red-500 flex items-center">
                                <FaHeart className="mr-2" /> ADD TO WISHLIST
                              </a>
                            </li>
                            <li>
                              <a href="#" className="transition duration-250 hover:text-red-500 flex items-center">
                                <FaExchangeAlt className="mr-2" /> COMPARE
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* Pagination */}
            <nav className="mt-pagination text-center">
              <ul className="flex justify-center space-x-2">
                {[1, 2, 3, 4].map((page) => (
                  <li key={page}>
                    <a
                      href="#"
                      className="block px-3 py-1 bg-gray-100 text-gray-600 hover:text-white hover:bg-red-500 transition-colors"
                    >
                      {page}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopPage;
