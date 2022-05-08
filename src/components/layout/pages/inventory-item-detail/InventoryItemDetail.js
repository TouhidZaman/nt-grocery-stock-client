import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../../ui/loading/Loading";

const InventoryItemDetail = () => {
    const { itemId } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [inventoryItem, setInventoryItem] = useState({});
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    //Getting inventory item using id
    useEffect(() => {
        const loadItems = async () => {
            setLoading(true);
            let url = `https://nt-grocery-stock.herokuapp.com/inventory-items/${itemId}`;

            try {
                await axios.get(url).then((response) => {
                    const data = response.data;
                    setInventoryItem(data);
                    setLoading(false);
                });
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        };
        loadItems();
    }, [itemId]);

    //Updating stock quantity
    const updateQuantity = async (quantity, sold) => {
        let url = `https://nt-grocery-stock.herokuapp.com/inventory-items/${itemId}`;
        try {
            await axios.put(url, { quantity, sold }).then((response) => {
                if (response.data?.acknowledged) {
                    if (sold) {
                        setInventoryItem({ ...inventoryItem, quantity, sold });
                    } else {
                        setInventoryItem({ ...inventoryItem, quantity });
                    }
                    toast.success("Stock Updated successfully!");
                    reset();
                }
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    //Handling Delivered
    const handleDeliveredInventoryItem = () => {
        const updatedQuantity = parseInt(inventoryItem.quantity) - 1;
        const sold = parseInt(inventoryItem.sold) + 1;
        if (updatedQuantity < 0) {
            toast.warn("Out of stock");
        } else {
            updateQuantity(updatedQuantity, sold);
        }
    };

    //Handling Restock
    const onSubmit = (data) => {
        const updatedQuantity =
            parseInt(data.restockQuantity) + parseInt(inventoryItem.quantity);
        if (updatedQuantity < 0) {
            toast.warn("Out of stock");
        } else {
            updateQuantity(updatedQuantity);
        }
    };

    //handling data loading
    if(loading) {
        return <Loading />
    }
    return (
        <div className="w-5/6 md:w-2/3 lg:w-2/3 mx-auto py-8">
            <div className="flex flex-col items-center pb-6">
                <h3 className="text-3xl text-stone-400 mb-3">Inventory Stock Update</h3>
                <div className="mb-2 border-b w-[120px] border-stone-300 rounded-lg"></div>
            </div>
            <div
                key={inventoryItem._id}
                className="flex flex-col items-center rounded-lg border shadow-md md:flex-row border-gray-700 bg-gray-800"
            >
                <img
                    className="pt-3 sm:p-2 object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                    src={inventoryItem.imgUrl}
                    alt="Item-img"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-stone-400">
                        {inventoryItem.itemName}
                    </h5>
                    <p className="mb-2 font-normal text-gray-400">
                        {inventoryItem.description}
                    </p>
                    <p className="mb-3 font-normal text-stone-400">
                        Item ID:{" "}
                        <span className="text-blue-300">{inventoryItem._id}</span>
                    </p>
                    <div className="flex mb-2 font-normal text-stone-400">
                        <h3>
                            Price:{" "}
                            <span className=" text-blue-300 text-xl">
                                ৳{inventoryItem.price}
                            </span>
                        </h3>
                        <h3 className="ml-3">
                            Quantity:{" "}
                            <span className=" text-blue-300 text-xl">
                                {inventoryItem.quantity ? (
                                    inventoryItem.quantity
                                ) : (
                                    <span className="text-red-300">stock out</span>
                                )}
                            </span>
                        </h3>
                        <h3 className="ml-3">
                            Sold:{" "}
                            <span className=" text-blue-300 text-xl">
                                {inventoryItem.sold}
                            </span>
                        </h3>
                    </div>
                    <p className="mb-3 font-normal text-stone-400">
                        Supplier:{" "}
                        <span className="text-blue-300">
                            {inventoryItem.supplierName}
                        </span>
                    </p>
                    <div className="w-full grid md:grid-cols-3 xl:gap-1">
                        <div className="md:col-span-2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col md:flex-row items-center justify-between">
                                    <div className="relative z-0 w-full mb-6 md:mb-0 mt-3 md:mt-0 group">
                                        <input
                                            className="block py-2.5 px-0 w-full text-sm bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0 peer"
                                            type="number"
                                            name="floating_restock_quantity"
                                            {...register("restockQuantity", {
                                                required: "Restock Quantity* is required",
                                            })}
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="floating_restock_quantity"
                                            className="peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                        >
                                            Enter Restock Quantity
                                        </label>
                                        {errors.restockQuantity && (
                                            <p className="mt-2 text-sm text-red-500">
                                                <span className="font-medium">
                                                    {errors.restockQuantity?.message}
                                                </span>
                                            </p>
                                        )}
                                    </div>
                                    <div className="md:ml-5 text-center sm:text-left">
                                        <button
                                            type="submit"
                                            className="mt-2 py-2.5 px-10 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-green-800 bg-gray-800 hover:bg-green-700 text-gray-400 border-gray-600 hover:border-none hover:text-white"
                                        >
                                            Restock
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="text-center sm:text-left">
                            <button
                                onClick={handleDeliveredInventoryItem}
                                className="mt-2 py-2.5 px-10 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-yellow-800 bg-gray-800 hover:bg-yellow-700 text-gray-400 border-gray-600 hover:border-none hover:text-white"
                            >
                                Delivered
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right my-8">
                <button
                    onClick={() => navigate("/manage-inventory")}
                    type="button"
                    className="mt-2 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                    Manage Inventories
                    <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
};

export default InventoryItemDetail;
