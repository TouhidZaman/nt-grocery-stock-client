import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase/firebase.init";
import useInventoryItems from "../../../../hooks/useInventoryItems";
import InventoryItems from "../inventory-items/InventoryItems";

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [inventoryItems, handleDeleteInventoryItem] = useInventoryItems(user?.email);

    return (
        <InventoryItems
            inventoryItems={inventoryItems}
            deleteItem={handleDeleteInventoryItem}
        />
    );
};

export default MyItems;
