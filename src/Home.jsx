import React from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { setProductList } from "./store/actions";

const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.rootReducer.product_list);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
    },
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://167.88.42.205/api/products/?format=json"
        );
        dispatch(setProductList(response.data.results));
      } catch (e) {
        console.log("Unable to Fetch Products", e);
      }
    };
    fetchProducts();
  }, [dispatch]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <p className="text-center pt-10 pb-20 text-2xl">
        Redux Async State Management
      </p>
      <Table columns={columns} dataSource={productList} />
    </div>
  );
};

export default Home;
