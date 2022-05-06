import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const InventoryItems = ({ inventoryItems, deleteItem }) => {
    return (
        <div className="rounded-xl w-5/6 md:w-2/3 lg:w-2/3 mx-auto py-10">
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
                                <span className="sr-only">Actions</span>
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
                                <td className="px-6 py-4">{inventoryItem.quantity}</td>
                                <td className="px-6 py-4">{inventoryItem.category}</td>
                                <td className="px-6 py-4">৳{inventoryItem.price}</td>
                                <td className="px-6 py-4 text-right">
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
        </div>
    );
};

export default InventoryItems;
