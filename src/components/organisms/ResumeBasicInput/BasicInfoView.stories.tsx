import type { Meta } from '@storybook/react';
import BasicInfoView from './BasicInfoView';

const meta: Meta = {
  title: 'Resumeme/Components/BasicInfoView',
  component: BasicInfoView,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'text' },
    name: { control: 'text' },
  },
};

export default meta;

export const Default = () => {
  const dummyData = {
    position: '어쩌구 개발자',
    skills: ['javascript', 'typescript', 'react.js', 'git', 'next.js'],
    introduce: '안녕하세요? 어쩌구 개발자입니다.',
  };
  return (
    <BasicInfoView
      {...dummyData}
      onEditClick={() => alert('save')}
    />
  );
};
