import type { Meta } from '@storybook/react';
import ReferenceLinkForm from './ReferenceLinkForm';
import { ReadReferenceLink } from '~/types/referenceLink';

const meta: Meta = {
  title: 'Resumeme/Components/ReferenceLinkForm',
  component: ReferenceLinkForm,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'text' },
    name: { control: 'text' },
  },
};

export default meta;

export const Default = () => {
  const referenceLinks: ReadReferenceLink[] = [
    {
      componentId: 1,
      createdDate: '2023-10-31T17:27:13.040Z',
      linkType: 'GITHUB',
      reflectFeedback: true,
      url: 'https://ajtlRoddl',
      originComponentId: undefined,
    },
  ];
  const resumeId: string = '1';

  return (
    <ReferenceLinkForm
      defaultValue={referenceLinks}
      resumeId={resumeId}
    />
  );
};
