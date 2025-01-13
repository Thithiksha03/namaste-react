import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const CartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (<div className="text-center m-5 p-9">
        <h1 className="text-lg font-bold">Cart</h1>
        <button className=" bg-slate-200 hover:bg-slate-300 p-2 m-3" onClick={handleClearCart}>Clear Cart</button>
        {CartItems.length === 0 && <h1>Your Cart is Empty... Please Add Items to the Cart!!!</h1>}

        <div className="w-6/12 m-auto">
            <ItemList items = {CartItems} />
        </div>
    </div>);
};

export default Cart;