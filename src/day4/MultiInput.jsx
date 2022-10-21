/**
 * 제작 : 한승현
 * 날짜 : 2022/10/22
 * 내용 : Multi Input
 */

import React from 'react';
// import PropTypes from 'prop-types';
import {
  MultiInputWrapStyled,
  MultiInputTitleStyled,
  MultiInputDescriptionStyled,
  MultiInputListStyled,
  MultiInputItemStyled,
  MultiInputButtonStyled,
} from './style/multiInput';

function MultiInput() {
  return (
    <MultiInputWrapStyled>
      <MultiInputTitleStyled>SUBSCRIBE</MultiInputTitleStyled>
      <MultiInputDescriptionStyled>
        sign name & mail
      </MultiInputDescriptionStyled>
      <MultiInputListStyled>
        <MultiInputItemStyled placeholder='FirstName' />
        <MultiInputItemStyled placeholder='LastName' />
        <MultiInputItemStyled placeholder='Email' />
      </MultiInputListStyled>
      <MultiInputButtonStyled>SubScribe</MultiInputButtonStyled>
    </MultiInputWrapStyled>
  );
}

MultiInput.propTypes = {};
MultiInput.defaultProps = {};

export default MultiInput;
