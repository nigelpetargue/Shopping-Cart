import { Container, Drawer, Group, Indicator } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconShoppingBag } from '@tabler/icons-react';
import { NavLink } from 'react-router-dom';
import { CartProduct } from './CartProduct';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utils/format-currency';

export function Navbar() {
  const [opened, { open, close }] = useDisclosure(false);
  const { cartProducts, products } = useShoppingCart();

  const TotalCartAmmount = cartProducts.reduce((total, cartItem) => {
    const item = products.find((item) => item.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <div className="bg-white h-14 w-full mb-4 pt-3 shadow-md">
      <Container>
        <Group position="apart">
          <div className="w-1/3 lg:w-1/6 flex justify-between">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/store">Store</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
          <Indicator
            label={cartProducts.length}
            onClick={() => open()}
            size={18}
            position="bottom-end"
            inline
          >
            <IconShoppingBag size={28} className="cursor-pointer" />
          </Indicator>
        </Group>
      </Container>

      <Drawer opened={opened} onClose={close}>
        <Drawer.Body>
          {cartProducts.map((item, index) => (
            <CartProduct key={index} {...item} />
          ))}

          <Group position="right">
            <p className="font-bold text-xl">{formatCurrency(TotalCartAmmount)}</p>
          </Group>
        </Drawer.Body>
      </Drawer>
    </div>
  );
}
