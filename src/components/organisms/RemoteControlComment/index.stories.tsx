import { Box } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import RemoteControlComment from './RemoteControlComment';

const meta = {
  title: 'Resumeme/Components/RemoteControlComment',
  component: RemoteControlComment,
  tags: ['autodocs'],
} satisfies Meta<typeof RemoteControlComment>;

export default meta;

export const Default = () => {
  return (
    <Box
      minH={'200vh'}
      bgGradient="linear(to-b, teal.500, blue.500)"
    >
      <RemoteControlComment />
    </Box>
  );
};
