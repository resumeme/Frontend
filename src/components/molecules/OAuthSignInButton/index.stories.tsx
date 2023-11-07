import type { Meta } from '@storybook/react';
import OAuthSignInButton from './OAuthSignInButton';

const meta = {
  title: 'Resumeme/Components/OAuthSignInButton',
  component: OAuthSignInButton,
  tags: ['autodocs'],
} satisfies Meta<typeof OAuthSignInButton>;

export default meta;

export const Default = () => {
  return <OAuthSignInButton oAuthPlatform="kakao" />;
};
