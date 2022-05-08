import useInventoryItems from "../../../../hooks/useInventoryItems";
import Loading from "../../../ui/loading/Loading";
import InventoryItems from "../inventory-items/InventoryItems";

const ManageInventory = () => {
    const [inventoryItems, handleDeleteInventoryItem, loading] = useInventoryItems();
    if(loading) {
        return <Loading />
    }
    return (
        <InventoryItems
            inventoryItems={inventoryItems}
            deleteItem={handleDeleteInventoryItem}
        />
    );
};

export default ManageInventory;
