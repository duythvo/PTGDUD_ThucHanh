import { useCart } from "../Context_API/CartContext";
import { foods } from "../../assets/assets";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";

const ProductList = () => {
  const { addToCart } = useCart();
  return (
    <div>
      <h2 className="text-center mt-5 text-xl font-medium">
        📦 Available Products
      </h2>
      <div className="w-full grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0 relative">
        {foods.slice(0, 10).map((item, index) => (
          <div
            key={item._id}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img
              className="w-full max-h-70 object-cover"
              src={item.image}
              alt="food"
            />
            <div className="flex justify-between text-xl m-2 font-bold">
              <h4>{item.name}</h4>
              <BookmarkBorderOutlinedIcon sx={{ fontSize: 40 }} />
            </div>
            <p className="bg-gray-100 text-gray-800 max-w-20 rounded-2xl text-center mb-5 ml-2">
              {item.time}
            </p>
            <div className="m-2">
              <button
                onClick={() => addToCart(item)}
                className="bg-orange-300 w-full p-2 rounded-xl font-bold cursor-pointer"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductList;
