import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from "react-native-vector-icons";
import ViewShot from "react-native-view-shot";
import Video from "react-native-video"
import Orientation from "react-native-orientation";
import SystemSetting from 'react-native-system-setting';
import Swiper from "react-native-swiper"
import StaticServer from 'react-native-static-server';
import SplashScreen from 'react-native-splash-screen'
import CodePush from 'react-native-code-push'
import ScrollableTabView, { ScrollableTabBar } from "react-native-scrollable-tab-view";
import RootSiblings from 'react-native-root-siblings'
import QRCode from "react-native-qrcode";
import Picker from "react-native-picker";
import RNFS from "react-native-fs"
import LocalBarcodeRecognizer from 'react-native-local-barcode-recognizer';
import ImagePicker from "react-native-image-crop-picker"
import IdleTimerManager from 'react-native-idle-timer';
import FastImage from 'react-native-fast-image';
import DeviceInfo from "react-native-device-info"
import LinearGradient from "react-native-linear-gradient";

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
