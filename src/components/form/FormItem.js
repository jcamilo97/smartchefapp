import React from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
} from 'react-native';
import { Colors } from 'smartchef/src/styles/Colors'
import FONTS from 'smartchef/src/styles/Fonts';

const styles = StyleSheet.create({
  inputView: {
    width: '100%',
    marginBottom: 21
  },
  input: {
    fontSize: 16,
    textAlignVertical: 'bottom',
    fontFamily: FONTS[600]
  },
  errorView: {
    position: 'absolute',
    bottom: -20,
    left: 5
  },
  errorinfoText: {
    color: Colors.red,
    fontFamily: FONTS[500]
  },
});
class FormItem extends React.PureComponent {
  getError = (error) => {
    if (error) {
      return error.map(info => <Text style={styles.errorinfoText} key={info}>{info || 'N/A'}</Text>);
    }
    return null;
  };

  render() {
    const { value, error, stylesInput, theme, onChange, placeholderColor } = this.props;
    const themeStyles = {
      bottomColor: theme === 'light' ? Colors.mediumgray : Colors.ligthOrange,
      color: theme === 'light' ? Colors.mediumgray : Colors.ligthOrange,
    };

    const stylesContent = {
      borderBottomWidth: 1,
      borderBottomColor: error ? Colors.red : themeStyles.bottomColor
    };
    if (!this.props.multiline) {
      stylesContent.height = 46;
    }
    return (
      <View style={styles.inputView}>
        <View style={stylesContent}>
          <TextInput
            style={[styles.input, { color: themeStyles.color }, stylesInput]}
            value={value || ''}
            onChangeText={onChange}
            placeholderTextColor={placeholderColor || Colors.white}
            duration={150}
            underlineColorAndroid={Colors.transparent}
            {...this.props}
          />
        </View>
        <View style={styles.errorView}>{this.getError(error)}</View>
      </View>
    );
  }
}
export { FormItem };
