import React from "react";
import { FaAngleRight } from "react-icons/fa"; // Import the icon from react-icons

const ContactPage = () => {
    return (
        <>
            {/* Contact Banner */}
            <section
                className="mt-contact-banner mt-24"
                data-wow-delay="0.4s"
                style={{
                    backgroundImage: "url(/images/img06-banner.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "50% 50%",
                    minHeight: "207px",
                    padding: "82px 0 40px",
                    textTransform: "capitalize",
                }}
            >
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full text-center">
                            <h1 className="text-[44px] leading-[46px] font-bold uppercase font-montserrat mb-4 letter-spacing-[1px] text-[#383838]">
                                CONTACT
                            </h1>
                            <nav className="breadcrumbs text-[14px] leading-[16px] font-light text-[#383838]">
                                <ul className="list-none inline-block">
                                    <li className="inline-block mr-2">
                                        <a
                                            href="index.html"
                                            className="transition-colors duration-250 hover:text-red-500"
                                        >
                                            Home <FaAngleRight className="inline ml-1" />
                                        </a>
                                    </li>
                                    <li className="inline-block">
                                        <a
                                            href="#"
                                            className="transition-colors duration-250 hover:text-red-500"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Detail */}
            <section
                className="mt-contact-detail content-info wow fadeInUp"
                data-wow-delay="0.4s"
                style={{
                    padding: "75px 0 65px",

                }}
            >
                <div className="container mx-auto px-24">
                    <div className="flex flex-wrap">
                        {/* Left Column: Contact Info */}
                        <div className="w-full sm:w-2/3 mb-8 sm:mb-0">
                            <div className="txt-wrap mb-8">
                                <h1 className="text-[30px] leading-[33px] font-semibold mb-6">
                                    schön. chair maker
                                </h1>
                                <p className="mb-4">
                                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut <br />enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                    nisi ut <br />aliquip ex ea commodo consequat.
                                </p>
                            </div>
                            <ul className="contact-txt list-none text-[14px] leading-[16px] font-light">
                                <li className="mb-4 inline-block mr-8">
                                    <strong>Address</strong>
                                    <address className="block">
                                        Suite 18B, 148 Connaught Road <br />
                                        Central <br />
                                        New Yankee
                                    </address>
                                </li>
                                <li className="mb-4 inline-block mr-8">
                                    <strong>Phone</strong>
                                    <a href="#" className="block">
                                        +1 (555) 333 22 11
                                    </a>
                                </li>
                                <li className="mb-4 inline-block">
                                    <strong>E_mail</strong>
                                    <a href="#" className="block">
                                        info@schon.chair
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* Right Column: Contact Form */}
                        <div className="w-full sm:w-1/3">
                            <h2 className="text-[30px] leading-[33px] font-semibold mb-6">
                                Have a question?
                            </h2>
                            <form action="#" className="contact-form">
                                <fieldset>
                                    <input
                                        type="text"
                                        className="form-control border border-gray-700 rounded-full w-full h-10 mb-3 p-2"
                                        placeholder="Name"
                                    />
                                    <input
                                        type="email"
                                        className="form-control border border-gray-700 rounded-full w-full h-10 mb-3 p-2"
                                        placeholder="E-Mail"
                                    />
                                    <input
                                        type="text"
                                        className="form-control border border-gray-700 rounded-full w-full h-10 mb-3 p-2"
                                        placeholder="Subject"
                                    />
                                    <textarea
                                        className="form-control border border-gray-700 rounded-lg w-full mb-3 p-2"
                                        placeholder="Message"
                                        rows="4"
                                    ></textarea>
                                    <button
                                        type="submit"
                                        className="btn-type3 uppercase bg-black text-white py-2 px-4 rounded-full transition-colors duration-250 hover:bg-red-600"
                                    >
                                        Send
                                    </button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Holder */}
            <div
                className="mt-map-holder wow fadeInUp"
                data-wow-delay="0.4s"
                style={{ height: "571px", position: "relative", width: "100%" }}
            >
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed/v1/place?key=YOUR_VALID_GOOGLE_MAPS_API_KEY&q=52.392363,1.480408"
                    allowFullScreen
                ></iframe>
                {/* Map info overlay */}
                <div className="map-info absolute top-0 left-0 p-4">
                    <h2 className="text-xl font-bold">Sochan</h2>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
