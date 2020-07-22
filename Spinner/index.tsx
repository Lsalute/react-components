import React from 'react';
import BounceLoader from 'react-spinners/BounceLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import MoonLoader from 'react-spinners/MoonLoader';
import styled, { css } from 'styled-components';

import { baseColors } from '~/themes/colors';

import { SpinnerVariant, LoaderType } from './type';

type SpinnerProps = {
  color?: SpinnerVariant;
  size?: number;
  type?: LoaderType;
};
/**
 *
 * default size: 30(number)
 *
 * default color: primary(BaseColor)
 *
 * default type: SpinLoader(SpinLoader/ClipLoader)
 */
const Spinner: React.FC<SpinnerProps> = ({
  color = 'primary',
  size = 30,
  type = 'SpinLoader',
}) => {
  return (
    <>
      {type === 'SpinLoader' ? (
        <MoonLoader size={size} color={baseColors[color]} />
      ) : (
        <ClipLoader size={size} color={baseColors[color]} />
      )}
    </>
  );
};

export default Spinner;
