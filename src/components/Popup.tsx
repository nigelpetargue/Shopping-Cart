import { ActionIcon, Group, Modal, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconHeartFilled, IconShoppingBag } from '@tabler/icons-react';
import { Selected } from './Selected';
import { formatCurrency } from '../utils/format-currency';
import { notifications } from '@mantine/notifications';

type PopupProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export function Popup({ id, name, price, image }: PopupProps) {
  const props = { id, name, price, image };
  const [opened, { open, close }] = useDisclosure(false);

  const handleAddToWishlist = () => {
    notifications.show({
      title: 'Added to wishlist',
      message: 'Hey there, your code is awesome! ❤️',
      color: 'pink',
      autoClose: 4000,
    });
  };

  return (
    <Group noWrap>
      <ActionIcon variant="transparent" color="red" onClick={handleAddToWishlist}>
        <IconHeartFilled />
      </ActionIcon>
      <ActionIcon variant="transparent" color="green" onClick={() => open()}>
        <IconShoppingBag />
      </ActionIcon>

      <Modal
        opened={opened}
        onClose={close}
        title={
          <Group>
            <Title order={3}>{name}</Title>
            <Title order={3} color="green">
              {formatCurrency(price)}
            </Title>
          </Group>
        }
      >
        <Selected {...props} />
      </Modal>
    </Group>
  );
}
