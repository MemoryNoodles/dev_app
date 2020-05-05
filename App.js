import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableWithoutFeedback, StatusBar } from "react-native"
import { createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation"

import HomeScreen from "./app/index"

/* a menu */
class MenuIcon extends React.Component {
  render() {
      const { name, src } = this.props;
      return (
          <View key={name} style={{ margin: 5 }}>
              <Image
                  source={src}
              />
          </View>
      );
  }
}



/* 底部导航 */
const TabNavigatorStack = createBottomTabNavigator(
  {

      HomeScreen: {
          screen: HomeScreen,
          navigationOptions: {
              tabBarLabel: "首页",
              tabBarIcon: ({ tintColor, focused }) => (
                  <MenuIcon
                    //  src={
                          // focused
                          //     ? require("../assets/images/navigateMenuIco/home_live.png")
                          //     : require("../assets/images/navigateMenuIco/home.png")
                      //}
                  />
              )
          }
      }

  },
  {
      initialRouteName: "HomeScreen",
      tabBarOptions: {
          activeTintColor: "gray",
          inactiveTintColor: "gray",
          style: {
              borderTopColor: "#ececec",
              borderWidth: 1
          }
      }
  }
);

/* 生成 */
const NavigationMain = createAppContainer(TabNavigatorStack);


export default class App extends React.Component {
  render() {
      return (
          <View  style={{flex:1}}>
              <StatusBar
                  translucent={true}
                  backgroundColor="transparent"
                  barStyle="dark-content"
              />
              <NavigationMain
                  // ref={navigatorRef => {
                  //     NavigationService.setTopLevelNavigator(navigatorRef); //设置顶层路由导航
                  // }}
              />
          </View>
      );
  }
}