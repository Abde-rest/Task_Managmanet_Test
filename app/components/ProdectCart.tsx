import Image from "next/image";
import { ProductCardProps } from "../type/ProductCardProps";
import AddToshopingCard from "./AddToShopingCart";

const ProdectCart = ({ id, title, price, imageUrl }: ProductCardProps) => {
  return (
    <div className=" relative border border-gray-200 rounded-lg bg-white/50 hover:shadow">
      <div className=" h-60 w-full relative">
        <Image
          fill
          className="rounded-t-lg absolute"
          src={`${imageUrl}`}
          alt="ImageProdect"
        />
      </div>
      <h1 className="p-1 pl-4 pr-4 bg-black text-white font-bold  top-4 left-0 z-50 absolute">
        ${price}
      </h1>
      <h5 className="mb-2 text-xl text-center my-4 font-bold tracking-tight ">
        {title}
      </h5>
      <AddToshopingCard
        id={id}
        title={title}
        price={price}
        imageUrl={imageUrl}
      />
    </div>
  );
};

export default ProdectCart;
