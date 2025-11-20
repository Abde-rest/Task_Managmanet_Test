"use client";

import { StoreShopingCart } from "@/store/ShopingCartStore";
import { ProductCardProps } from "../type/ProductCardProps";
import Image from "next/image";
import { toast } from "react-toastify";
// import { ToastContainer } from "react-toastify";
const ShopingCarts = () => {
  // Get The  list of Data form the store
  const { ShopingArry, removeProdect } = StoreShopingCart();

  const TotalPrice = ShopingArry.reduce(
    (totla: number, item: ProductCardProps) =>
      totla + item.price * (item.quantity ?? 0),
    0
  );
  return (
    <div>
      <div>
        <dialog
          id="drawer"
          aria-labelledby="drawer-title"
          className="fixed inset-0 transition size-auto max-h-none max-w-none overflow-hidden bg-transparent not-open:hidden backdrop:bg-transparent">
          <div className="absolute inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-closed:opacity-0"></div>

          <div className="absolute inset-0 pl-10 focus:outline-none sm:pl-16">
            <div className="ml-auto block size-full max-w-md transform transition duration-500 ease-in-out data-closed:translate-x-full sm:duration-700">
              <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2
                      id="drawer-title"
                      className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => {
                          const drawer = document.getElementById(
                            "drawer"
                          ) as HTMLDialogElement;
                          drawer?.close();
                        }}
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500">
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">Close panel</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="30"
                          height="30"
                          viewBox="0 0 24 24">
                          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200">
                        {ShopingArry.map(
                          (item: ProductCardProps, index: number) => {
                            return (
                              <li key={index} className="flex py-6">
                                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <Image
                                    src={item.imageUrl}
                                    height={100}
                                    width={100}
                                    alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                                    className="size-full object-cover"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href="#">{item.title}</a>
                                      </h3>
                                      <p className="ml-4">${item.price}</p>
                                    </div>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">
                                      {item.quantity}
                                    </p>

                                    <div className="flex">
                                      <button
                                        onClick={() => {
                                          removeProdect(item.id);
                                          toast.success(
                                            "Remove Prodect succes",
                                            {
                                              position: "bottom-left",
                                              autoClose: 5000,
                                              hideProgressBar: false,
                                              closeOnClick: false,
                                              pauseOnHover: true,
                                              draggable: true,
                                              progress: undefined,
                                              theme: "light",
                                            }
                                          );
                                        }}
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Total</p>
                    <p>${TotalPrice}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-xs hover:bg-indigo-700">
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default ShopingCarts;
