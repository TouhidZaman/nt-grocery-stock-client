import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useInventoryItems = (email, limitTo) => {
    /*  Note: Custom hook - useInventoryItems(email, limitTo) :
         - First parameter is to filter items by email
         - Second parameter is to limit data
        Tips: All parameters are optional. if you have none you can put undefined 
    */
    
    const [inventoryItems, setInventoryItems] = useState([]);

    //Getting all inventory items
    useEffect(() => {
        const loadItems = async () => {
            let url = `https://nt-grocery-stock.herokuapp.com/inventory-items?${
                email ? `addedBy=${email}` : ""
            }${limitTo ? `&limitTo=${limitTo}` : ""}`;

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
    }, [email, limitTo]);

    //Delete single inventory item handler
    const handleDeleteInventoryItem = async (itemId) => {
        const confirm = window.confirm("Are you sure ?");
        if (confirm) {
            await axios
                .delete(`https://nt-grocery-stock.herokuapp.com/inventory-items/${itemId}`)
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