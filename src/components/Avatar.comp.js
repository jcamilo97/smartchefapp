import React from 'react';
import styled from 'styled-components'

/* Colors */
import { Colors } from 'smartchef/src/styles/Colors'

const ImagePlaceholder = require('smartchef/src/assets/placeholder_img.png');

const WrapperAvatar = styled.Image`
  width: ${props => props.size || 30}px;
  height: ${props => props.size || 30}px;
  border-radius: ${props => props.size / 2 || 15}px;
  background-color: ${Colors.gray}
`;

export const Avatar = (props) => {
  const { size } = props;
  return (
    <WrapperAvatar
      size={size}
      {...props}
      defaultSource={ImagePlaceholder}
    />
  )
}
export const ProfilePhoto = styled.Image`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 300px;
  position: absolute;
  z-index:0;
`;
