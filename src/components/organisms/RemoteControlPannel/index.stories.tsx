import { Box } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import RemoteControlPannel from './RemoteControlPannel';

const meta = {
  title: 'Resumeme/Components/Organisms/RemoteControlPannel',
  component: RemoteControlPannel,
  tags: ['autodocs'],
} satisfies Meta<typeof RemoteControlPannel>;

export default meta;

export const Default = () => {
  return (
    <Box
      minH={'200vh'}
      bgGradient="linear(to-b, teal.500, blue.500)"
    >
      <RemoteControlPannel />
    </Box>
  );
};
