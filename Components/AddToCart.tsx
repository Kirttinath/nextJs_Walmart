"use client";
import { Product } from "@/typings/productTypings";
import React from "react";
import { Button } from "./ui/button";
import useCartStore from "@/store";
import RemoveFromCart from "./RemoveFromCart";

const AddToCart = ({ product }: { product: Product }) => {
  const [cart, addToCart] = useCartStore((state) => [
    state.cart,
    state.addToCart,
  ]);
  console.log(cart);

  const howManyInCart = cart.filter(
    (item) => item.meta.sku === product.meta.sku
  ).length;

  console.log("How many in Cart : ", howManyInCart);

  const handleAdd = () => {
    console.log("Adding To Cart ", product);
    addToCart(product);
  };

  if (howManyInCart > 0) {
    return (
      <div className="flex space-x-5 items-center">
        <RemoveFromCart product={product} />

        <span>{howManyInCart}</span>
        <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
          +
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Button className="bg-walmart hover:bg-walmart/50" onClick={handleAdd}>
        AddToCart
      </Button>
    </div>
  );
};

export default AddToCart;
