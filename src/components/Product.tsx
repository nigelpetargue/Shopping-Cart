import { Group, Image, Badge, Card, HoverCard } from '@mantine/core';
import { Popup } from './Popup';

type ProductProps = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export function Product({ id, name, price, image }: ProductProps) {
  const props = { id, name, price, image };

  return (
    <Group position="center">
      <HoverCard width={100} position="top" offset={-220} zIndex={0}>
        <HoverCard.Target>
          <Card shadow="sm" padding="md">
            <Card.Section>
              <Image src={image} height={216} alt={name} />
            </Card.Section>
            <Group position="apart" mt="md">
              <p className="text-sm font-bold ">{name}</p>
              <Badge color="green">
                <p>₱{price}.00</p>
              </Badge>
            </Group>
          </Card>
        </HoverCard.Target>
        <HoverCard.Dropdown className="bg-transparent border-none">
          <Popup {...props} />
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}
