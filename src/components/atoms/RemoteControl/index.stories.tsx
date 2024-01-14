import { Box } from '@chakra-ui/react';
import type { Meta } from '@storybook/react';
import RemoteControl from './RemoteControl';

const meta = {
  title: 'Resumeme/Components/Atoms/RemoteControl',
  component: RemoteControl,
  tags: ['autodocs'],
} satisfies Meta<typeof RemoteControl>;

export default meta;

export const Default = () => {
  return (
    <Box
      minH={'110vh'}
      bgGradient="linear(to-b, teal.500, blue.500)"
    >
      <RemoteControl>스크롤해보세요. 리모컨의 위치는 고정입니다.</RemoteControl>
    </Box>
  );
};
