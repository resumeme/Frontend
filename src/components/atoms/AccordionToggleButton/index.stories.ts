import type { Meta, StoryObj } from '@storybook/react';
import AccordionToggleButton from './AccordionToggleButton';

const meta = {
  title: 'Resumeme/Components/AccordionToggleButton',
  component: AccordionToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
  },
} satisfies Meta<typeof AccordionToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '신청한 이력서',
    children: '내용',
  },
};
