import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../../firebase/firebase.init";
import useInventoryItems from "../../../../hooks/useInventoryItems";
import Loading from "../../../ui/loading/Loading";
import InventoryItems from "../inventory-items/InventoryItems";

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [inventoryItems, handleDeleteInventoryItem, loading] = useInventoryItems(user?.email);
    
    //loading while data is fetching
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

export default MyItems;
