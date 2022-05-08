import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight, faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const InventoryItems = ({ inventoryItems, deleteItem }) => {
    const navigate = useNavigate();

    return (
        <div className="rounded-xl w-5/6 md:w-2/3 lg:w-9/12 mx-auto py-10">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Item name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Quantity
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sold
                            </th>
                            <th scope="col" className="px-6 py-3">
                               Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryItems.map((inventoryItem) => (
                            <tr
                                key={inventoryItem._id}
                                className="border-b bg-gray-800 border-gray-700"
                            >
                                <th
                                    scope="row"
                                    className="px-6 py-4 font-medium text-stone-400 whitespace-nowrap"
                                >
                                    {inventoryItem.itemName}
                                </th>
                                <td className="px-6 py-4 text-center">{inventoryItem.quantity ? inventoryItem.quantity : <span className="text-red-300">stock out</span>}</td>
                                <td className="px-6 py-4">{inventoryItem.category}</td>
                                <td className="px-6 py-4">৳{inventoryItem.price}</td>
                                <td className="px-6 py-4">{inventoryItem.sold}</td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() => navigate(`/inventory/${inventoryItem._id}`)}
                                        className="hover:text-yellow-500 mr-2"
                                    >
                                        <FontAwesomeIcon
                                            className="text-lg pr-2"
                                            icon={faEdit}
                                        />
                                    </button>
                                    <button
                                        onClick={() => deleteItem(inventoryItem._id)}
                                        className="hover:text-red-500"
                                    >
                                        <FontAwesomeIcon
                                            className="text-lg pr-2"
                                            icon={faTrashAlt}
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="text-right mt-4">
                <button
                    onClick={() => navigate('/add-inventory')}
                    type="button"
                    className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Add New Item
                    <FontAwesomeIcon className="ml-2" icon={faArrowRight}/>
                </button>
            </div>
        </div>
    );
};

export default InventoryItems;
