import { Fragment } from 'react';
import { Group } from '@mantine/core';
import { Product } from '../components/Product';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Store() {
  const { products } = useShoppingCart();

  return (
    <Fragment>
      <p className="text-2xl font-bold mb-5">Store</p>
      <Group>
        {products.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </Group>
    </Fragment>
  );
}
