import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../../firebase/firebase.init";
// import Loading from "../../../ui/loading/Loading";

const AddInventory = () => {
    const [user] = useAuthState(auth);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const onSubmit = async (data) => {
        setLoading(true);
        const addedBy = user?.email;
        const newInventoryItem = {
            ...data,
            sold: 0,
            addedBy,
        };

        try {
            await axios
                .post("https://nt-grocery-stock.herokuapp.com/inventory-items", newInventoryItem)
                .then((response) => {
                    // console.log(response.data);
                    setLoading(false);
                    if (response.data?.acknowledged) {
                        toast.success("Item Added successfully!");
                        reset();
                    }
                });
        } catch (error) {
            setLoading(false);
            console.log("axios error:", error?.message);
        }
    };

    //getting categories
    useEffect(() => {
        axios.get("https://nt-grocery-stock.herokuapp.com/categories").then((response) => {
            const categories = response.data;
            setCategories(categories);
        });
    }, []);

    // if (loading) {
    //     return <Loading />;
    // }

    return (
        <div className="bg-gray-900 py-8">
            <div className="shadow rounded-xl w-5/6 md:w-2/3 lg:w-2/5 mx-auto bg-gradient-to-r  p-6 sm:p-10 bg-gray-800">
                <h3 className="text-center sm:text-left  text-stone-400 text-2xl tex mb-8">
                    Add Inventory Item
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                                type="text"
                                name="floating_item_name"
                                {...register("itemName", {
                                    required: "Item Name* is required",
                                })}
                                placeholder=" "
                            />
                            <label
                                htmlFor="floating_item_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Item Name
                            </label>
                            {errors.itemName && (
                                <p className="mt-2 text-sm text-red-500">
                                    <span className="font-medium">
                                        {errors.itemName?.message}
                                    </span>
                                </p>
                            )}
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <select
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-gray-400 border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                                {...register("category", {
                                    required: "Select a category",
                                })}
                            >
                                <option value="">Choose a category</option>
                                {categories.map((category) => (
                                    <option key={category._id} value={category.name}>
                                        {category.name}
                                    </option>
                                ))}
                            </select>

                            {errors.category && (
                                <p className="mt-2 text-sm text-red-500">
                                    <span className="font-medium">
                                        {errors.category?.message}
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="grid xl:grid-cols-2 xl:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                                type="number"
                                name="floating_price"
                                {...register("price", {
                                    required: "Item Price* is required",
                                })}
                                placeholder=" "
                            />
                            <label
                                htmlFor="floating_price"
                                className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Item Price
                            </label>
                            {errors.price && (
                                <p className="mt-2 text-sm text-red-500">
                                    <span className="font-medium">
                                        {errors.price?.message}
                                    </span>
                                </p>
                            )}
                        </div>

                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                                name="floating_supplier_name"
                                type="number"
                                {...register("quantity", {
                                    required: "Item quantity* is required",
                                })}
                                placeholder=" "
                            />
                            <label
                                htmlFor="floating_supplier_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >
                                Item Quantity
                            </label>
                            {errors.quantity && (
                                <p className="mt-2 text-sm text-red-500">
                                    <span className="font-medium">
                                        {errors.quantity?.message}
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                            name="floating_supplier_name"
                            type="text"
                            {...register("supplierName", {
                                required: "Supplier Name* is required",
                            })}
                            placeholder=" "
                        />
                        <label
                            htmlFor="floating_supplier_name"
                            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Supplier Name
                        </label>
                        {errors.supplierName && (
                            <p className="mt-2 text-sm text-red-500">
                                <span className="font-medium">
                                    {errors.supplierName?.message}
                                </span>
                            </p>
                        )}
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                            name="floating_image_url"
                            type="text"
                            {...register("imgUrl", {
                                required: "Image URL* is required",
                            })}
                            placeholder=" "
                        />
                        <label
                            htmlFor="floating_image_url"
                            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Item Image (URL)
                        </label>
                        {errors.imgUrl && (
                            <p className="mt-2 text-sm text-red-500">
                                <span className="font-medium">
                                    {errors.imgUrl?.message}
                                </span>
                            </p>
                        )}
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                            name="floating_description"
                            type="text"
                            {...register("description", {
                                required: "Short Description* is required",
                            })}
                            placeholder=" "
                        />
                        <label
                            htmlFor="floating_description"
                            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Item Short Description
                        </label>
                        {errors.description && (
                            <p className="mt-2 text-sm text-red-500">
                                <span className="font-medium">
                                    {errors.description?.message}
                                </span>
                            </p>
                        )}
                    </div>

                    {loading && (
                        <p className="my-2 text-sm text-gray-500">
                            <span className="font-medium">Please wait ...</span>
                        </p>
                    )}
                    {/* {error && (
                        <p className="my-2 text-sm text-red-500">
                            <span className="font-medium">Error: {error}</span>
                        </p>
                    )} */}
                    <div className="text-center sm:text-left">
                        <button
                            type="submit"
                            className="mt-2 py-2.5 px-10 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-gray-700 bg-gray-800 hover:bg-gray-700 text-gray-400 border-gray-600 hover:text-white"
                        >
                            Add Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddInventory;
