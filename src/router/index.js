import React from "react";
import { View, Text } from "react-native";
import MdIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// screen
import LoginScreen from 'smartchef/src/scenes/login/login.container';
import RegisterScreen from 'smartchef/src/scenes/register/register.container';
import MainScreen from 'smartchef/src/components/MainScreen';
import AuthLoadingScreen from 'smartchef/src/scenes/authLoading/authLoading.screen.container';
// import ChatScreen from 'smartchef/src//components/ChatScreen';
import DetailScreen from 'smartchef/src/components/DetailScreen';
// utils
import { Colors } from 'smartchef/src/styles/Colors';

const defaultScreen = () => {
  return (
    <View>
      <Text>{"En construccion"}</Text>
    </View>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: MainScreen,
    Search: defaultScreen,
    Account: defaultScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MdIcons;
        let iconName = `account-circle${focused ? '' : '-outline'}`;
        if (routeName === 'Home') {
          iconName = `briefcase${focused ? '' : '-outline'}`;
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          // IconComponent = HomeIconWithBadge;
        } else if (routeName === 'Search') {
          iconName = `briefcase-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Loss') {
          iconName = `briefcase-plus${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: Colors.blue,
      inactiveTintColor: 'gray',
    },
  });

const AuthStack = createStackNavigator(
  {
    SignIn: LoginScreen,
    Register: RegisterScreen,
  },
  { headerMode: 'none' }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      AppMain: TabNavigator,
      Auth: AuthStack,
      Detail: DetailScreen,
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
