/**
 * @copyright Copyright 2018 Corretto, Inc. All rights reserved.
 */

'use strict';

import { css } from 'styled-components';

export function placeholder(color: string) {
  return css`
    ::-webkit-input-placeholder {
      color: ${color};
    }
    :-moz-placeholder {
      color: ${color};
      opacity: 1;
    }
    ::-moz-placeholder {
      color: ${color};
      opacity: 1;
    }
    :-ms-input-placeholder {
      color: ${color};
    }
    ::-ms-input-placeholder {
      color: ${color};
    }
    ::placeholder {
      color: ${color};
    }
  `;
}
