import React, { useEffect, useState } from "react";
import "./item.css";
import ItemList from "./ItemList";
import { products } from "../productos/productos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const traerProductos = () => {
      return new Promise((res) => {
        const prodFiltrados = products.filter(
          (prod) => prod.categoria === categoryName
        );
        setTimeout(() => {
          res(categoryName ? prodFiltrados : products);
        }, 300);
      });
    };
    traerProductos()
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <>
    <ItemList items={items} />
    </>
  );
};

export default ItemListContainer;
