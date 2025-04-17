import { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import useAxiosRequest from '../../../hooks/useAxiosRequest';
import { toastSuccess } from '../../../utils/toast';

const ProductCreateForm = () => {
    const { execute, loading } = useAxiosRequest();

    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [colors, setColors] = useState([]);

    const [product, setProduct] = useState({
        name: '',
        description: '',
        category_id: '',
        brand_id: '',
        thumb_image: null,
        featured: 0,
        is_active: 1,
        best_seller: 0,
        unit_price: 0,
        product_details: []
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryResponse = await execute("GET", "/category-list");
                setCategories(categoryResponse.data);

                const brandResponse = await execute("GET", "/brands");
                setBrands(brandResponse.data);

                const sizeResponse = await execute("GET", "/size-attributes");
                setSizes(sizeResponse.data);

                const colorResponse = await execute("GET", "/color-attributes");
                setColors(colorResponse.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleMainInputChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setProduct(prev => ({ ...prev, thumb_image: e.target.files[0] }));
    };

    const handleVariantChange = (index, e) => {
        const { name, value, files } = e.target;
        const updatedVariants = product.product_details.map((variant, i) =>
            i === index
                ? { ...variant, [name]: files ? files[0] : value }
                : variant
        );
        setProduct(prev => ({ ...prev, product_details: updatedVariants }));
    };

    const addNewVariant = () => {
        setProduct(prev => ({
            ...prev,
            product_details: [
                ...prev.product_details,
                {
                    size_attribute_id: '',
                    color_attribute_id: '',
                    sku: '',
                    unit_price: 0,
                    quantity: 0,
                    image: null
                }
            ]
        }));
    };

    const removeVariant = (index) => {
        const filtered = product.product_details.filter((_, i) => i !== index);
        setProduct(prev => ({ ...prev, product_details: filtered }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', product.name);
        formData.append('description', product.description);
        formData.append('category_id', product.category_id);
        formData.append('brand_id', product.brand_id);
        formData.append('thumb_image', product.thumb_image);
        formData.append('featured', product.featured);
        formData.append('is_active', product.is_active);
        formData.append('best_seller', product.best_seller);
        formData.append('unit_price', product.unit_price);

        product.product_details.forEach((variant, index) => {
            formData.append(`product_details[${index}][size_attribute_id]`, variant.size_attribute_id);
            formData.append(`product_details[${index}][color_attribute_id]`, variant.color_attribute_id);
            formData.append(`product_details[${index}][sku]`, variant.sku);
            formData.append(`product_details[${index}][unit_price]`, variant.unit_price);
            formData.append(`product_details[${index}][quantity]`, variant.quantity);
            if (variant.image) {
                formData.append(`product_details[${index}][image]`, variant.image);
            }
        });

        try {
            await execute("POST", "/products", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            toastSuccess("Product created successfully:");
        } catch (error) {
            console.error("Error creating product:", error);
        }
    };

    const handleCategoryChange = (newValue) => {
        setProduct(prev => ({ ...prev, category_id: newValue?.value || '' }));
    };

    const handleBrandChange = (newValue) => {
        setProduct(prev => ({ ...prev, brand_id: newValue?.value || '' }));
    };

    return (
        <div className="  ">
            <div className="">
                <form onSubmit={handleSubmit} className="space-y-10">
                    {/* Basic Information */}
                    <section className="border-b pb-8">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Product Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={product.name}
                                    onChange={handleMainInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Category *</label>
                                <CreatableSelect
                                    isClearable
                                    options={categories.map(cat => ({ value: cat.id, label: cat.name }))}
                                    onChange={handleCategoryChange}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    isLoading={loading}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Brand *</label>
                                <CreatableSelect
                                    isClearable
                                    options={brands.map(brand => ({ value: brand.id, label: brand.name }))}
                                    onChange={handleBrandChange}
                                    className="react-select-container"
                                    classNamePrefix="react-select"
                                    isLoading={loading}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Thumbnail Image</label>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700">Unit Price *</label>
                                <input
                                    type="number"
                                    name="unit_price"
                                    value={product.unit_price}
                                    onChange={handleMainInputChange}
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    name="description"
                                    value={product.description}
                                    onChange={handleMainInputChange}
                                    rows="4"
                                    className=" block w-full h-15 rounded-md bg-gray-50 border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-3 gap-20">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Featured</label>
                                    <input
                                        type="checkbox"
                                        name="featured"
                                        checked={product.featured}
                                        onChange={(e) => setProduct(prev => ({ ...prev, featured: e.target.checked ? 1 : 0 }))}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Is Active</label>
                                    <input
                                        type="checkbox"
                                        name="is_active"
                                        checked={product.is_active}
                                        onChange={(e) => setProduct(prev => ({ ...prev, is_active: e.target.checked ? 1 : 0 }))}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Best Seller</label>
                                    <input
                                        type="checkbox"
                                        name="best_seller"
                                        checked={product.best_seller}
                                        onChange={(e) => setProduct(prev => ({ ...prev, best_seller: e.target.checked ? 1 : 0 }))}
                                        className="mt-2"
                                    />
                                </div>
                            </div>


                        </div>
                    </section>

                    {/* Product Variants */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-2xl font-semibold text-gray-800">Product Variants</h3>
                            <button
                                type="button"
                                onClick={addNewVariant}
                                className="inline-flex items-center px-5 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            >
                                Add Variant
                            </button>
                        </div>
                        {product.product_details.map((variant, index) => (
                            <div key={index} className="relative bg-gray-50 p-6 rounded-lg shadow border border-gray-200 mb-6">
                                <button
                                    type="button"
                                    onClick={() => removeVariant(index)}
                                    className="absolute top-3 right-3 text-red-600 hover:text-red-800 text-xl font-bold"
                                >
                                    &times;
                                </button>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Size *</label>
                                        <select
                                            name="size_attribute_id"
                                            value={variant.size_attribute_id}
                                            onChange={(e) => handleVariantChange(index, e)}
                                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            required
                                        >
                                            <option value="">Select Size</option>
                                            {sizes.map(size => (
                                                <option key={size.id} value={size.id}>{size.value}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Color *</label>
                                        <select
                                            name="color_attribute_id"
                                            value={variant.color_attribute_id}
                                            onChange={(e) => handleVariantChange(index, e)}
                                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            required
                                        >
                                            <option value="">Select Color</option>
                                            {colors.map(color => (
                                                <option key={color.id} value={color.id}>{color.value}</option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">SKU *</label>
                                        <input
                                            type="text"
                                            name="sku"
                                            value={variant.sku}
                                            onChange={(e) => handleVariantChange(index, e)}
                                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Quantity *</label>
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={variant.quantity}
                                            onChange={(e) => handleVariantChange(index, e)}
                                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Price *</label>
                                        <input
                                            type="number"
                                            name="unit_price"
                                            value={variant.unit_price}
                                            onChange={(e) => handleVariantChange(index, e)}
                                            className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Image</label>
                                        <input
                                            type="file"
                                            name="image"
                                            onChange={(e) => handleVariantChange(index, e)}
                                            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex items-center px-10 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create Product
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default ProductCreateForm;
