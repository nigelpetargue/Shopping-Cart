import { ReactNode, createContext, useContext, useState } from 'react';
import store_data from '../data/items.json';
import { useLocalStorage } from '../hooks/useLocalStorage';

const ShoppingCartContext = createContext({} as ShoppingCartContext);

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  products: StoreProduct[];
  cartProducts: CartProducts[];

  addProductsIntoCart: (id: number, quantity: number) => void;
  removeProductsIntoCart: (id: number) => void;
};
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartProducts, setCartProducts] = useLocalStorage<CartProducts[]>('shopping-cart', []);
  const products: StoreProduct[] = store_data;

  const addProductsIntoCart = (id: number, quantity: number) => {
    setCartProducts((currentItem) => {
      const exsistingProductIndex = currentItem.findIndex((item) => item.id === id);

      if (exsistingProductIndex !== -1) {
        const updatedItem = [...currentItem];
        updatedItem[exsistingProductIndex].quantity += quantity;
        return updatedItem;
      } else {
        return [...currentItem, { id, quantity: quantity }];
      }
    });
  };

  const removeProductsIntoCart = (id: number) => {
    setCartProducts((currentItem) => {
      return currentItem.filter((item) => item.id !== id);
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        products,
        cartProducts,
        addProductsIntoCart,
        removeProductsIntoCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
