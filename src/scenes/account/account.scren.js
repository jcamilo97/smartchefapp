import React, { PureComponent, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
// import { Loc } from 'redux-react-native-i18n'
import styled from 'styled-components';
// components
import { Chevron } from 'smartchef/src/components/Chevron.comp';
import { Avatar } from 'smartchef/src/components/Avatar.comp';
import Label from 'smartchef/src/components/Label';

import { Colors } from 'smartchef/src/styles/Colors'

const LogoutIcon = require('smartchef/src/assets/logout.png');

const Arrow = styled(Chevron)`
  height: 13px;
  width: 13px;
  opacity: 0.5;
  resizeMode: cover;
  transform: ${props => props.rotate ? 'rotate(90deg)' : 'rotate(-90deg)'}
`;

const ArrowContainer = styled.View`
  position: absolute;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 12px;
`;

const ItemTouch = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding-vertical: 12px;
  align-items: center;
`;

const SubItemTouch = styled(ItemTouch)`
  background-color: ${Colors.lightgray};
  padding-vertical: 6px;
`
const WrapperAvatar = styled(Avatar)`
  border-width: 4px;
  border-color: white;
  margin-bottom: 10px;
`;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#FFF',
    borderBottomColor: Colors.lightgray,
    borderBottomWidth: 1
  },
  headerContent: {
    paddingVertical: 35,
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    backgroundColor: '#fff',
    height: 500,
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    paddingLeft: 8
  },
  iconContent: {
    paddingRight: 5,
    paddingLeft: 20
  },
  icon: {
    width: 24,
    height: 24
  },
  info: {
    fontSize: 18,
    color: Colors.darkgray,
  }
});

const AccountScreen = ({
  sessionData,
  navigation,
  logout
}) => {
  const [openStettings, setOpenStettings] = useState(false);
  const { avatar, full_name, mail } = sessionData;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <WrapperAvatar
            size={163}
            source={{
              uri: `http:${avatar}`,
              cache: 'force-cache',
            }}
          />
          <Label size="26px" lineHeight={26} color={Colors.darkgray} weight={600}>
            {`${full_name} `}
          </Label>
          <Label size="16px" lineHeight={16} color={Colors.mediumgray} style={{ paddingVertical: 6 }}>
            {`${mail} `}
          </Label>
        </View>
      </View>

      <View style={styles.body}>
        <ItemTouch
          onPress={() => {
            setOpenStettings(!openStettings);

          }}
        >
          <View style={styles.item}>
            <View style={styles.iconContent}>
              {/* <Image style={styles.icon} resizeMode="contain" source={LogoutIcon} /> */}
            </View>
            <View style={styles.infoContent}>
              <Label size="18px" lineHeight={18} color={Colors.darkgray}>
                {/* <Loc locKey="titles.settings" /> */}
                Cofiguración
              </Label>
            </View>
            <ArrowContainer>
              <Arrow rotate={openStettings} />
            </ArrowContainer>
          </View>
        </ItemTouch>
        {openStettings && (
          <SubItemTouch
            onPress={() => {
              navigation.navigate('Settings')
            }}
          >
            <View>
              {/* <Image style={styles.icon} resizeMode="contain" source={LogoutIcon} /> */}
            </View>
            <View style={styles.infoContent}>
              <Label size="18px" lineHeight={18} color={Colors.darkgray}>
                {/* <Loc locKey="titles.languages" /> */}
                Idiomas
                </Label>
            </View>
          </SubItemTouch>
        )}
        <ItemTouch
          onPress={() => {
            logout()
          }}
        >
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} resizeMode="contain" source={LogoutIcon} />
            </View>
            <View style={styles.infoContent}>
              <Label size="18px" lineHeight={18} color={Colors.darkgray}>
                {/* <Loc locKey="actions.logout" /> */}
                cerrar sesion
              </Label>
            </View>
          </View>
        </ItemTouch>
      </View>
    </View>
  );
};

export default AccountScreen;
