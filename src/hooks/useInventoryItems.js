import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useInventoryItems = (email) => {
    const [inventoryItems, setInventoryItems] = useState([]);

    //Getting all inventory items
    useEffect(() => {
        const loadItems = async () => {
            let url = `http://localhost:5000/inventory-items${
                email ? `?addedBy=${email}` : ""
            }`;
            try {
                await axios.get(url).then((response) => {
                    const items = response.data;
                    setInventoryItems(items);
                });
            } catch (error) {
                console.log(error.message);
            }
        };
        loadItems();
    }, [email]);

    //Delete single inventory item handler
    const handleDeleteInventoryItem = async (itemId) => {
        const confirm = window.confirm("Are you sure ?");
        if (confirm) {
            await axios
                .delete(`http://localhost:5000/inventory-item/${itemId}`)
                .then((response) => {
                    if (response.data?.acknowledged) {
                        toast("Item Deleted successfully!");
                        const filteredItems = inventoryItems.filter(
                            (inventoryItem) => inventoryItem._id !== itemId
                        );
                        setInventoryItems(filteredItems);
                    }
                });
        }
    };

    return [inventoryItems, handleDeleteInventoryItem];
};

export default useInventoryItems;
