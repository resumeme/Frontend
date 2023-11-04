import type { Preview } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';
import theme from '../src/theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    chakra: {
      theme,
    },
  },
  decorators: [withRouter],
};

export default preview;
