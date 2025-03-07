import React from "react";
import { useSelector } from "react-redux";

const TableContent = () => {
  const products = useSelector((state) => state.rootReducer.product_list);
  return (
    <div className="py-10">
      <div className="max-w-7xl px-6 mx-auto">
        {products.map((product) => (
          <p className="my-5">{product.name}</p>
        ))}
      </div>
    </div>
  );
};

export default TableContent;
