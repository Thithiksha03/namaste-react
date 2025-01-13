
import ItemList from "./ItemList";

const RestaurantCategories =({data, showItems, setShowIndex}) => {


const handleClick =() => {
    setShowIndex();
}
    // console.log(data);
    return (<div className="w-6/12 mx-auto my-5 bg-gray-200 shadow-lg p-5 ">
        {/* Header */}
        <div className="flex justify-between cursor-pointer" onClick={handleClick} >
        <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/>}
    </div>)
}

export default RestaurantCategories;