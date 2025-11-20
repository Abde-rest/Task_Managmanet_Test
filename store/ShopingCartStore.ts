import { ProductCardProps } from "@/app/type/ProductCardProps";
import { create } from "zustand";

// Define the store interface
interface ShopingCartStore {
  ShopingArry: ProductCardProps[];
  AddItem: (product: ProductCardProps) => void;
  removeProdect: (ProdectId: number) => void;
}

export const StoreShopingCart = create<ShopingCartStore>((set) => ({
  // state
  ShopingArry: [],

  // actions
  AddItem: (product) =>
    set((state) => {
      // Find if the prodect its alredy Found in cart Shoping
      // you can use some Not find
      const exsist = state.ShopingArry.find(
        (item: ProductCardProps) => item.id === product.id
      );

      if (exsist) {
        return {
          ShopingArry: state.ShopingArry.map((item: ProductCardProps) => {
            return item.id === product.id
              ? {
                  ...item,
                  quantity: (item.quantity ?? 0) + 1,
                }
              : item;
          }),
        };
      }

      return {
        ShopingArry: [...state.ShopingArry, { ...product, quantity: 1 }],
      };
    }),
  removeProdect: (ProdectId: number) =>
    // الدالة  set هي التي تقوم بتغير الحالة
    // state التي عندها هي الstate موجودة
    set((state) => {
      return {
        ShopingArry: state.ShopingArry.filter(
          (item: ProductCardProps) => item.id !== ProdectId
        ),
        // users: {
        //   name: "ali",
        // },
      };
    }),
}));
