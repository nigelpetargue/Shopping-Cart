import { Group } from '@mantine/core';
import { Product } from '../components/Product';
import { useShoppingCart } from '../context/ShoppingCartContext';

export function Home() {
  const { products } = useShoppingCart();
  return (
    <div className="w-full h-full pb-5">
      <p className="text-2xl font-bold mb-5">Home</p>
      <Group>
        {products.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </Group>
    </div>
  );
}
