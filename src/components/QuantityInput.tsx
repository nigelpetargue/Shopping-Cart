import { ActionIcon, Group, NumberInput, NumberInputHandlers, rem } from '@mantine/core';
import { useState, useRef } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { notifications } from '@mantine/notifications';

type QuantityInputProps = {
  id: number;
};

export function QuantityInput({ id }: QuantityInputProps) {
  const [value, setValue] = useState<number | ''>(0);
  const handlers = useRef<NumberInputHandlers>();

  let quantity: number = typeof value === 'number' ? value : 0;

  const { addProductsIntoCart } = useShoppingCart();

  const handleAddProductsIntoCart = (id: number, quantity: number) => {
    addProductsIntoCart(id, quantity);
    notifications.show({
      title: 'Added to cart',
      message: 'Hey there, your code is awesome! 🤥',
      autoClose: 4000,
    });
    setValue(0);
  };

  return (
    <Group spacing={5} position="center">
      <ActionIcon size={42} variant="default" onClick={() => handlers.current?.decrement()}>
        –
      </ActionIcon>

      <NumberInput
        hideControls
        value={value}
        onChange={(val) => setValue(val)}
        handlersRef={handlers}
        type="number"
        min={0}
        styles={{ input: { width: rem(310), textAlign: 'center' } }}
      />

      <ActionIcon size={42} variant="default" onClick={() => handlers.current?.increment()}>
        +
      </ActionIcon>
      <button
        type="submit"
        disabled={value === 0 && true}
        className="bg-blue-500 w-full text-white rounded-sm p-2"
        onClick={() => handleAddProductsIntoCart(id, quantity)}
      >
        Add Product To Your Bag
      </button>
    </Group>
  );
}
