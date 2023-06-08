import { Image, Stack } from '@mantine/core';
import { QuantityInput } from './QuantityInput';

type SelectedProps = {
  id: number;
  name: string;
  image: string;
};

export function Selected({ id, name, image }: SelectedProps) {
  return (
    <Stack>
      <Image src={image} alt={name} />
      <QuantityInput id={id} />
    </Stack>
  );
}
