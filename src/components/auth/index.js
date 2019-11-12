import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components'
import Label from 'smartchef/src/components/Label';
import {ImageBackground} from 'react-native';

export const MainView = styled.View`
  display: flex;
  flex: 1;
`;
export const BackgroundGradient = styled(LinearGradient)`
  display: flex;
  flex: 1;
  z-index: -1;
  padding-horizontal: 40px;
  padding-bottom: ${props => (props.keyboardShow ? 20 : 40)}px;
`;

export const BackgroundImageView = styled(ImageBackground)`
  display: flex;
  flex: 1;
  z-index: -1;
  padding-horizontal: 40px;
  padding-bottom: ${props => (props.keyboardShow ? 20 : 40)}px;
`;

export const TitleView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  padding-top: ${props => (props.titlePadding ? 21 : 83)}px;
`;
export const LinksView = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${props => (props.keyboardShow ? 20 : 42)}px;
`;
export const LinkButton = styled.TouchableHighlight`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WraperLabel = styled(Label)`
  text-decoration-line: underline;
`;
