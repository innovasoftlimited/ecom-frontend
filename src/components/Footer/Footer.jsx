import { FaEnvelope, FaFacebook, FaGooglePlus, FaLinkedin, FaMapMarker, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer id="mt-footer" className=" ">
            <div className="container mx-auto px-16 py-16 customGray">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="mb-4">
                            <a href="/">
                                <img src="/logo/logo.png" alt="Schon" className="w-32" />
                            </a>
                        </div>
                        <p className="text-sm text-gray-400">
                            Exercitation ullamco laboris nisi ut aliquip ex commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <ul className="flex space-x-3 mt-4">
                            {["twitter", "facebook", "google-plus", "youtube", "linkedin", "whatsapp"].map((platform) => (
                                <li key={platform}>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        {platform === "twitter" && <FaTwitter />}
                                        {platform === "facebook" && <FaFacebook />}
                                        {platform === "google-plus" && <FaGooglePlus />}
                                        {platform === "youtube" && <FaYoutube />}
                                        {platform === "linkedin" && <FaLinkedin />}
                                        {platform === "whatsapp" && <FaWhatsapp />}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Twitter Section */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Twitter</h3>
                        <div className="space-y-4">
                            <div className="flex space-x-3">
                                <FaTwitter className="text-blue-400" />
                                <p className="text-sm text-gray-400">
                                    Laboris nisi ut <a href="#" className="text-blue-400">#schön</a> aliquip econse-
                                    <br />
                                    <a href="#" className="text-blue-400">https://t.co/vreNJ9nEDt</a>
                                </p>
                            </div>
                            <div className="flex space-x-3">
                                <FaTwitter className="text-blue-400" />
                                <p className="text-sm text-gray-400">
                                    Ficia deserunt mollit anim id est labo-
                                    <br />
                                    <a href="#" className="text-blue-400">https://t.co/vreNJ9nEDt</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Product Tags */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3">Product Tags</h3>
                        <ul className="flex flex-wrap gap-2">
                            {["Sofas", "Armchairs", "Living", "Bedroom", "Lighting", "Tables", "Pouf", "Wood", "Office", "Outdoor", "Kitchen", "Stools", "Footstools", "Desks"].map((tag) => (
                                <li key={tag}>
                                    <a href="#" className=" text-gray-500 border-1 border-gray-300 px-2 py-1 text-xs rounded-full hover:bg-gray-300">{tag}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="text-right">
                        <h3 className="text-lg font-semibold mb-3">Information</h3>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex justify-end space-x-3">
                                <FaMapMarker className="text-gray-400" />
                                <span>Connaught Road Central Suite 18B, 148 New Yankee</span>
                            </li>
                            <li className="flex justify-end space-x-3">
                                <FaPhone className="text-gray-400" />
                                <a href="tel:15553332211" className="hover:text-white">+1 (555) 333 22 11</a>
                            </li>
                            <li className="flex justify-end space-x-3">
                                <FaEnvelope className="text-gray-400" />
                                <a href="mailto:info@schon.chair" className="hover:text-white">info@schon.chair</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className=" mt-8 py-6">
                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
                    <p className="text-sm text-gray-400">© <a href="/" className="hover:text-white">schön</a> - All rights Reserved</p>
                    <img src="/logo/bankcard.png" alt="bank-card" className="w-32 mt-4 md:mt-0" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
