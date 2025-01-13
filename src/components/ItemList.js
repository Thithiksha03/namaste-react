import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";


const ItemList = ({items}) => {

    const dispatch = useDispatch();

    const handleAddItems = (item) =>{
        // dispatch an action
        dispatch(addItem(item));
    };

    // console.log(items)
    return (<div >
       {items.map((item) => 
        (<div data-testid = "foodItems" key={item.card.info.id} className="p-3 m-2 border-b-2 border-gray-3000 text-left flex justify-between">
        <div className="py-3 w-9/12">
        
        <div>
            <span>{item.card.info.name}</span>
            <span> - ₹ {item.card.info.defaultPrice/100}</span>
        </div>
        <p className="text-xs text-slate-600">{item.card.info.description}</p>
        </div>

        <div>
            <img  src={IMG_URL + item.card.info.imageID}/>
            <button className="rounded-lg mx-5  p-2 shadow-lg bg-white m-3 hover:bg-slate-200" onClick={() => handleAddItems(item)}>ADD + </button>
        </div>
        </div>)
    )}
    </div>)
}

export default ItemList;