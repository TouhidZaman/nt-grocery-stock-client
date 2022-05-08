import React from 'react';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import useInventoryItems from '../../../../../hooks/useInventoryItems';


const DisplayItems = () => {
    const navigate = useNavigate();
    const limitTo = 6;
    const [inventoryItems] = useInventoryItems(undefined, limitTo);
    
    return (
        <section className="w-5/6 md:w-2/3 lg:w-10/12 mx-auto py-8">
            <div className="flex flex-col items-center pb-10">
                <h3 className="text-3xl text-stone-400 mb-3">Inventory items</h3>
                <div className="mb-2 border-b w-[120px] border-stone-300 rounded-lg"></div>
                <p className="text-stone-500">Latest inventory items are showing below</p>
            </div>
            <div className="grid xl:grid-cols-2 gap-6">
                {inventoryItems.map((inventoryItem) => (
                    <div
                        key={inventoryItem._id}
                        className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl  border-gray-700 bg-gray-800 hover:bg-gray-700"
                    >
                        <img
                            className="p-3 w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
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
                                    {inventoryItem.quantity ? inventoryItem.quantity : <span className="text-red-300">stock out</span>}
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
                            <div className="text-center sm:text-left">
                                <button
                                    onClick={() =>
                                        navigate(`/inventory/${inventoryItem._id}`)
                                    }
                                    className="mt-2 py-2.5 px-10 mr-2 mb-2 text-sm font-medium focus:outline-none rounded-full border focus:z-10 focus:ring-4 focus:ring-blue-800 bg-gray-800 hover:bg-blue-700 text-gray-400 border-gray-600 hover:border-none hover:text-white"
                                >
                                    Update Stock
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-right my-8">
                <button
                    onClick={() => navigate('/manage-inventory')}
                    type="button"
                    className="mt-2 text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                >
                    Manage Inventories
                    <FontAwesomeIcon className="ml-2" icon={faArrowRight}/>
                </button>
            </div>
        </section>
    );
};

export default DisplayItems;