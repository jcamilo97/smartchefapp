import React from 'react'
import styled from 'styled-components'
import { Colors } from 'smartchef/src/styles/Colors';
import Fonts from 'smartchef/src/styles/Fonts'

const StyledLabel = styled.Text`
  font-family: ${props => `${Fonts[props.weight] || Fonts[500]}`};
  line-height: ${props => props.lineHeight || '19'}px;
  font-size: ${props => (props.size ? props.size : '16px')};
  color: ${props => (props.color ? props.color : Colors.darkgray)};
  text-align: ${({align}) => (align ? align : 'auto')}
`;

const Label = props => (
  <StyledLabel
    {...props}
  >
    {props.children}
  </StyledLabel>
)

export default Label
