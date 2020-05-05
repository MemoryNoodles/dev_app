import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from "react-navigation";

  class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{ paddingTop: 20, flex:1, backgroundColor:"red" }}>
                <Text> testss </Text>
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            header: null
        })
    },
}, {
        initialRouteName: "Home",
    });

HomeStack.navigationOptions = ({ navigation }) => {
    return {
        tabBarVisible: navigation.state.index == 0
    };
};

export default HomeStack;
