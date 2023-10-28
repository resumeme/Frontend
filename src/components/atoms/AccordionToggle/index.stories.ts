import type { Meta, StoryObj } from '@storybook/react';
import AccordionToggle from './AccordionToggle';

const meta = {
  title: 'Resumeme/Components/AccordionToggle',
  component: AccordionToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AccordionToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '신청한 이력서',
    children: '내용',
  },
};
