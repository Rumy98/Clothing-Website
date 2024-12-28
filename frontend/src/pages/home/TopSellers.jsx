

import React, { useState } from "react";
import ClothCard from "../clothes/ClothCard";
import { useFetchAllClothesQuery } from "../../redux/features/clothes/clothApi";

const categories = [
  "Choose a category",
  "Tops",
  "Bottoms",
  "Outerwear",
  "Accessories",
];

const TopSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState("Choose a category");
  const {
    data: clothes = [],
    isLoading,
    isError,
    error,
  } = useFetchAllClothesQuery();

  const filteredClothes =
    selectedCategory === "Choose a category"
      ? clothes
      : clothes.filter(
          (cloth) => cloth.category === selectedCategory.toLowerCase()
        );

  return (
    <div className="bg-gray-200 py-10">
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          name="category"
          id="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {isLoading && <p>Loading...</p>}
      {isError && (
        <p className="text-red-500">
          {error?.data?.message || "Error fetching data"}
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredClothes.length > 0 ? (
          filteredClothes.slice(0, 10).map((cloth, index) => (
            <div key={index}>
              <ClothCard cloth={cloth} />
            </div>
          ))
        ) : (
          <p>No clothes found in this category</p>
        )}
      </div>
    </div>
  );
};

export default TopSellers;
