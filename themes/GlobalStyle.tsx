import { normalize } from 'polished';
import { createGlobalStyle } from 'styled-components';

import { nProgressStyle } from '~/helpers/hooks/useNProgress/nProgressStyle';

export const GlobalStyle = createGlobalStyle`
  ${normalize()};
  ${nProgressStyle};

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Lato', 'Noto Sans KR', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
