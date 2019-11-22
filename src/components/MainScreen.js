import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
} from 'react-native';
// import Header from './Header';
// import StorySection from './StorySection';
import HotDealSection from 'smartchef/src/containers/Categories.comp.container';
import EventList from 'smartchef/src/containers/Events.comp.container';
// import Footer from './Footer';
export default class MainScreen extends Component {
  static navigationOptions = {
    header: null,
    headerShown: false,
    headerStyle:{
      height: 0,
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{flex: 1}}>
        <ScrollView style={{backgroundColor: '#f2f2f2'}}>
          {/* <Header />
          <StorySection /> */}
          <HotDealSection />
          <EventList navigation={this.props.navigation} />
        </ScrollView>
        {/* <View style={styles.filterBtn}>
          <Text style={{fontSize: 18, color: 'white'}}>Filters</Text>
        </View> */}
        {/* <Footer /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  filterBtn: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    height: 41,
    width: 120,
    borderRadius: 20,
    backgroundColor: '#e25f54',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
