import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer,
  createBottomTabNavigator
} from "react-navigation";
import HomeScreen from "./../screen/home";
import SettingScreen from "./../screen/setting";
import Icon from "react-native-vector-icons/Ionicons";
import DrawerScreen from "../screen/drawer";

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Setting: SettingScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        //   let iconName;
        if (routeName === "Home") {
          iconName = "ios-home";
        } else if (routeName === "Setting") {
          iconName = `ios-construct`;
        }
        return <Icon name={iconName} size={32} color={tintColor} />;
      }
    }),
    tabBarComponentd: TabNavigator,
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "orange",
      inactiveTintColor: "gray",
      showLabel: false
    },
    animationEnabled: true,
    swipeEnabled: true
  }
);
const Mydrawer = createDrawerNavigator({
  Info: {
    screen: TabNavigator
  }
}, {
    initialRouteName: 'Info',
    contentComponent: DrawerScreen,
    drawerWidth: 250
  });
const AppStack=createSwitchNavigator({
  AppTab: Mydrawer,
})

export default createAppContainer(AppStack);
