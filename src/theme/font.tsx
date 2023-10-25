import { Global } from '@emotion/react';

const Fonts = () => {
  return (
    <Global
      styles={`
        @font-face {
          font-family: 'Pretendard Variable';
          font-weight: 45 920;
          font-style: normal;
          font-display: swap;
          src: url('/fonts/PretendardVariable.woff2') format('woff2-variations');
        }
      `}
    />
  );
};

export default Fonts;
