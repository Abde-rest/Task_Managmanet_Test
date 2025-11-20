"use client";

import { StoreShopingCart } from "@/store/ShopingCartStore";
import { ProductCardProps } from "../type/ProductCardProps";
import { toast } from "react-toastify";

const AddToshopingCard = ({ id, title, price, imageUrl }: ProductCardProps) => {
  const { AddItem } = StoreShopingCart();
  return (
    <button
      onClick={() => {
        AddItem({
          id: id,
          title: title,
          price: price,
          imageUrl: imageUrl,
        });
        toast.success("Remove Prodect succes", {
          position: "top-center",
          autoClose: 100,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }}
      className=" text-white w-full py-4 bg-black rounded-2xl cursor-pointer hover:bg-black/75">
      Add to card
    </button>
  );
};

export default AddToshopingCard;
