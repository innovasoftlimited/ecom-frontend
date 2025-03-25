import React, { useState } from 'react';

const Faq = () => {
    // 0: first panel open by default, -1 means all closed.
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        // Toggle current panel: if it's already open, close it; otherwise, open it.
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <main className="mt-main mt-24">
            {/* Banner Section */}
            <section
                className="mt-contact-banner bg-cover bg-center py-16"
                style={{ backgroundImage: 'url(/images/img43.jpg)' }}
            >
                <div className="container mx-auto px-4">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <h1 className="text-4xl font-bold uppercase mb-4 text-gray-800 tracking-wider">
                                FAQs
                            </h1>
                            <nav className="breadcrumbs">
                                <ul className="flex justify-center items-center space-x-2 text-sm">
                                    <li className="flex items-center">
                                        <a
                                            href="index.html"
                                            className="text-gray-800 hover:text-red-500 transition-colors"
                                        >
                                            home
                                        </a>
                                    </li>
                                    <li className="text-gray-800">faqs</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="mt-about-sec py-12">
                <div className="container mx-auto px-4 md:px-24">
                    <div className="row">
                        <div className="col-xs-12">
                            <div className="txt">
                                <h2 className="text-3xl font-bold uppercase mb-4 text-gray-700">
                                    FAQs
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-3">
                                    Morbi in erat malesuada, sollicitudin massa at, tristique nisl. Maecenas id eros scelerisque,
                                    vulputate tortor quis, efficitur arcu sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Umco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                    <strong className="block mt-4 text-xl font-semibold text-gray-800">
                                        Vestibulum sit amet metus euismod, condimentum lectus id, ultrices sem.
                                    </strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Register Form Section */}
            <section className="mt-detail-sec pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto ">
                        <div id="accordion-collapse" data-accordion="collapse">
                            {/* First Accordion Item */}
                            <h2 id="accordion-collapse-heading-1">
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(0)}
                                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                    aria-expanded={openIndex === 0 ? "true" : "false"}
                                    aria-controls="accordion-collapse-body-1"
                                >
                                    <span>What is Flowbite?</span>
                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 shrink-0 transition-transform duration-200 ${openIndex === 0 ? "rotate-180" : ""
                                            }`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id="accordion-collapse-body-1"
                                className={`${openIndex === 0 ? "block" : "hidden"}`}
                                aria-labelledby="accordion-collapse-heading-1"
                            >
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Flowbite is an open-source library of interactive components built on
                                        top of Tailwind CSS including buttons, dropdowns, modals, navbars, and
                                        more.
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Check out this guide to learn how to{" "}
                                        <a
                                            href="/docs/getting-started/introduction/"
                                            className="text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            get started
                                        </a>{" "}
                                        and start developing websites even faster with components on top of
                                        Tailwind CSS.
                                    </p>
                                </div>
                            </div>

                            {/* Second Accordion Item */}
                            <h2 id="accordion-collapse-heading-2">
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(1)}
                                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                    aria-expanded={openIndex === 1 ? "true" : "false"}
                                    aria-controls="accordion-collapse-body-2"
                                >
                                    <span>Is there a Figma file available?</span>
                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 shrink-0 transition-transform duration-200 ${openIndex === 1 ? "rotate-180" : ""
                                            }`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id="accordion-collapse-body-2"
                                className={`${openIndex === 1 ? "block" : "hidden"}`}
                                aria-labelledby="accordion-collapse-heading-2"
                            >
                                <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Flowbite is first conceptualized and designed using the Figma software
                                        so everything you see in the library has a design equivalent in our
                                        Figma file.
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Check out the{" "}
                                        <a
                                            href="https://flowbite.com/figma/"
                                            className="text-blue-600 dark:text-blue-500 hover:underline"
                                        >
                                            Figma design system
                                        </a>{" "}
                                        based on the utility classes from Tailwind CSS and components from
                                        Flowbite.
                                    </p>
                                </div>
                            </div>

                            {/* Third Accordion Item */}
                            <h2 id="accordion-collapse-heading-3">
                                <button
                                    type="button"
                                    onClick={() => toggleAccordion(2)}
                                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                                    aria-expanded={openIndex === 2 ? "true" : "false"}
                                    aria-controls="accordion-collapse-body-3"
                                >
                                    <span>What are the differences between Flowbite and Tailwind UI?</span>
                                    <svg
                                        data-accordion-icon
                                        className={`w-3 h-3 shrink-0 transition-transform duration-200 ${openIndex === 2 ? "rotate-180" : ""
                                            }`}
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 10 6"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 5 5 1 1 5"
                                        />
                                    </svg>
                                </button>
                            </h2>
                            <div
                                id="accordion-collapse-body-3"
                                className={`${openIndex === 2 ? "block" : "hidden"}`}
                                aria-labelledby="accordion-collapse-heading-3"
                            >
                                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        The main difference is that the core components from Flowbite are open
                                        source under the MIT license, whereas Tailwind UI is a paid product.
                                        Another difference is that Flowbite relies on smaller and standalone
                                        components, whereas Tailwind UI offers sections of pages.
                                    </p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        However, we actually recommend using both Flowbite, Flowbite Pro, and
                                        even Tailwind UI as there is no technical reason stopping you from using
                                        the best of two worlds.
                                    </p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Learn more about these technologies:
                                    </p>
                                    <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                                        <li>
                                            <a
                                                href="https://flowbite.com/pro/"
                                                className="text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Flowbite Pro
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://tailwindui.com/"
                                                rel="nofollow"
                                                className="text-blue-600 dark:text-blue-500 hover:underline"
                                            >
                                                Tailwind UI
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Faq;
