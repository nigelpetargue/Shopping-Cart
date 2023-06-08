import { Group, Image, Stack } from '@mantine/core';
import { IconTrash } from '@tabler/icons-react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utils/format-currency';

type CartProductProps = {
  id: number;
  quantity: number;
};

export function CartProduct({ id, quantity }: CartProductProps) {
  const { products, removeProductsIntoCart } = useShoppingCart();

  const item = products.find((item) => item.id === id);
  if (!item) return null;

  return (
    <Group className="w-full my-3">
      <Image src={item.image} alt="no name" height={100} width={100} />
      <Group position="apart" className="w-2/3 ">
        <Stack>
          <p className="font-bold">
            {item.name} x{quantity}
          </p>
          <p>{formatCurrency(item.price * quantity)}</p>
        </Stack>
        <IconTrash
          color="red"
          className="cursor-pointer"
          onClick={() => removeProductsIntoCart(id)}
        />
      </Group>
    </Group>
  );
}
