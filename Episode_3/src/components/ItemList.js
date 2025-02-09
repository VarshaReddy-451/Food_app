import { useDispatch } from "react-redux";
import { addItem } from "../utilis/cartSlice";

const ItemList = ({ items }) => {
    console.log(items); // Log items to check their structure
    const dispatch = useDispatch();

    const handleItem = (itemName) => {
        console.log("clicked", itemName);
        dispatch(addItem(itemName));
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} onClick={handleItem}>
                    <span>{item.card.info.name}</span>
                    <span> ₹{(item.card.info.price / 100).toFixed(2)}</span>
                    <button >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemList;
