import useInventoryItems from "../../../../hooks/useInventoryItems";
import InventoryItems from "../inventory-items/InventoryItems";

const ManageInventory = () => {
    const [inventoryItems, handleDeleteInventoryItem] = useInventoryItems();

    return (
        <InventoryItems
            inventoryItems={inventoryItems}
            deleteItem={handleDeleteInventoryItem}
        />
    );
};

export default ManageInventory;
