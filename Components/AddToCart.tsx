import { Product } from "@/typings/productTypings";
import React from "react";
import { Button } from "./ui/button";

const AddToCart = ({ product }: { product: Product }) => {
  return (
    <div>
      <Button>AddToCart</Button>
    </div>
  );
};

export default AddToCart;
