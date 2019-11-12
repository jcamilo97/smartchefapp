import React from 'react'
import styled from 'styled-components'

const BackBlack = require('smartchef/src/assets/arrow_black.png');

export const BackIcon = styled.Image`
  height: ${props => props.size || 20}px;
  width:  ${props => props.size || 20}px;
  margin-right: ${props => (props.marginRight ? props.marginRight : '8px')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '5px')};
  opacity: ${props => props.opacity || 1}
`;

export const Chevron = (props) => {
  return (
    <BackIcon source={BackBlack} {...props} />
  )
};
