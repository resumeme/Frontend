import type { Meta } from '@storybook/react';
import { ProjectForm } from '.';

const meta = {
  title: 'Resumeme/Components/ProjectForm',
  component: ProjectForm,
  tags: ['autodocs'],
} satisfies Meta<typeof ProjectForm>;

export default meta;

export const Default = () => {
  return <ProjectForm />;
};
