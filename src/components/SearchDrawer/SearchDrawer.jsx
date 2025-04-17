import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useAxiosRequest from '../../hooks/useAxiosRequest';
import { closeDrawer } from '../../redux/reducers/drawerSlice';

const SearchDrawer = ({ isOpenDrawer }) => {
    const dispatch = useDispatch();
    const { execute } = useAxiosRequest();

    const handleCloseDrawer = () => {
        dispatch(closeDrawer());
    };
    const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL;

    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedQuery, setDebouncedQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 300); // 300ms debounce delay

        return () => {
            clearTimeout(handler);
        };
    }, [searchQuery]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await execute("GET", "/search-product", null, {
                    name: debouncedQuery,
                });
                setSearchResults(response.data || []);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        if (debouncedQuery) {
            fetchProducts();
        }
    }, [debouncedQuery]);

    return (
        <div>
            {/* Search drawer */}
            <div className={`fixed top-0 left-1/2 -translate-x-1/2 z-30 w-full px-4 md:w-[730px] lg:w-[930px] transition-all duration-300 ${isOpenDrawer ? 'opacity-100 visible top-4 z-150' : 'opacity-0 invisible top-0'
                }`}>
                <div className="bg-white rounded-md shadow-xl overflow-hidden">
                    <div className="flex items-center p-4 border-b">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-gray-500 mx-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                        </svg>

                        <input
                            type="text"
                            placeholder="Search..."
                            className="flex-1 p-2 outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />

                        <button
                            onClick={() => handleCloseDrawer()}
                            className="p-2 hover:text-gray-600 transition-colors"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Search results */}
                    <div className="max-h-[60vh] overflow-y-auto">
                        {searchQuery?.length > 0 ? (
                            searchResults?.length > 0 ? (
                                searchResults.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/product/${item.id}`}
                                        className="flex items-center p-4 hover:bg-gray-50 transition-colors border-b last:border-b-0"
                                        onClick={() => handleCloseDrawer()}
                                    >
                                        <img
                                            src={baseUrl + item.thumb_image}
                                            alt={item.name}
                                            className="w-16 h-16 md:w-24 md:h-24 rounded-md object-cover mr-4"
                                        />
                                        <div className="flex-1">
                                            <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                                            {item.unit_price && (
                                                <div className="text-sm text-gray-700">
                                                    <span className="font-semibold">{item.unit_price} TK</span>
                                                    {item.originalPrice && (
                                                        <del className="ml-2 text-gray-400">{item.originalPrice}</del>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                ))
                            ) : (
                                <div className="p-4 text-center text-gray-500">No items found</div>
                            )
                        ) : null}
                    </div>
                </div>
            </div>

            {/* Backdrop */}
            {isOpenDrawer && (
                <div

                    onClick={() => handleCloseDrawer()}
                />
            )}
        </div>
    );
};

export default SearchDrawer;