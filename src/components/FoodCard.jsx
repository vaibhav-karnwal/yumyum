import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({
  id,
  name,
  halfPlatePrice,
  fullPlatePrice,
  desc,
  img,
  rating,
  handleToast,
}) => {
  const dispatch = useDispatch();
  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = (option) => {
    console.log(option);
    dispatch(
      addToCart({
        id,
        name: name + `(${option} plate)`,
        price: option === "half" ? halfPlatePrice : fullPlatePrice,
        rating,
        img,
        qty: 1,
        size: option,
      })
    );
    handleToast(`${name} (${option} plate)`);
    setShowPopup(false);
  };

  return (
    <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-2xl gap-2 shadow-xl">
      <img
        src={img}
        alt=""
        className="w-auto h-[160px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
      />
      <div className="flex justify-between text-sm">
        <h2>{name}</h2>
        <span className="text-yellow">₹{halfPlatePrice}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 60)}...</p>
      <div className="flex justify-between">
        <span className="flex items-center justify-center">
          <AiFillStar className="mr-1 text-yellow" /> {rating}
        </span>
        <button
          onClick={() =>
            halfPlatePrice > 0 ? setShowPopup(true) : handleAddToCart("full")
          }
          className="p-1 text-sm text-white rounded-lg bg-yellow hover:text-black"
        >
          Add to cart
        </button>
      </div>

      {showPopup && halfPlatePrice > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white p-5 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold">Choose Plate Size</h3>
            <div className="mt-3 flex justify-center gap-3">
              <button
                className="bg-yellow text-white p-2 rounded-lg hover:text-black"
                onClick={() => handleAddToCart("half")}
              >
                Half Plate - ₹{halfPlatePrice}
              </button>
              <button
                className="bg-yellow text-white p-2 rounded-lg hover:text-black"
                onClick={() => handleAddToCart("full")}
              >
                Full Plate - ₹{fullPlatePrice}
              </button>
            </div>
            <button
              className="mt-4 text-sm text-gray-500 hover:text-black"
              onClick={() => setShowPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodCard;
