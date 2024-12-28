import React from "react";
import { FaShoppingCart } from "react-icons/fa"
import { useParams } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { useFetchClothByIdQuery } from "../../redux/features/clothes/clothApi";

const SingleCloth = () => {
  const { id } = useParams(); // Get cloth ID from URL
  const { data: cloth, isLoading, isError } = useFetchClothByIdQuery(id); // Fetch cloth data by ID

  const dispatch=useDispatch();
  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
  }
  if (isLoading) return <div>Loading...</div>; // Loading state
  if (isError) return <div>Error happening to load cloth info</div>; // Error state

  return (
    <div className="max-w-lg shadow-md p-5">
      <h1 className="text-2xl font-bold mb-6">{cloth.name}</h1>

      <div>
        <img
          src={`${getImgUrl(cloth.image)}`}
          alt={cloth.name}
          className="mb-8"
        />
      </div>

      <div className="mb-5">
        <p className="text-gray-700 mb-2">
          <strong>Brand:</strong> {cloth.brand || 'Rumy'}
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Published:</strong> {new Date(cloth?.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-700 mb-4 capitalize">
          <strong>Category:</strong> {cloth.category}
        </p>
        <p className="text-gray-700">
          <strong>Description:</strong> {cloth.description}
        </p>
      </div>

      <button
        onClick={() => handleAddToCart(cloth)} // Add to cart functionality
        className="btn-primary px-6 space-x-1 flex items-center gap-1"
      >
        <FaShoppingCart className="" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default SingleCloth;
