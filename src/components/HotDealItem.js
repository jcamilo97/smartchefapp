import React from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { Divider } from 'react-native-elements';

const HotDealItem = ({ title, imgSrc }) => {
  return (
    <ImageBackground style={styles.backgroundImage} source={{ uri: imgSrc }}>
      <View style={styles.coverContainer}>
        <Text style={styles.coverText}>{title}</Text>
        <Divider styleName="line" style={styles.coverDivider} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: 98,
    width: 92,
    borderRadius: 2,
  },
  coverContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(74, 74, 74, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coverText: {
    width: 55,
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#ededed',
  },
  coverDivider: {
    width: 63,
    borderColor: '#ededed',
    position: 'absolute',
    left: 15.5,
    top: 83.5,
  },
});

export default HotDealItem;
