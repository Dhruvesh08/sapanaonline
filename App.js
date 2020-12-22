/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,

} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from 'react-native-splash-screen'

import Home from './src/Screens/Home';
import IntroSwiper from './src/Screens/IntroScreens/IntroSwiper';
import AuthScreens from './src/Screens/AuthScreens/AuthScreens';
import SapanaWebView from './src/Screens/SapnaWebView/SapanaWebView';
import NoInternet from './src/Screens/NoInternet';
import { Router, Scene } from 'react-native-router-flux';

// const Stack = createStackNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator
//   initialRouteName="Intro"
//   >
//     <Stack.Screen name="Intro" component={IntroSwiper} />
//     <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen name="Auth" component={AuthScreens} />
//     <Stack.Screen name="SapanaWebView" component={SapanaWebView} options={{ headerShown: false }} />
//   </Stack.Navigator>
// );

const Routes = () => (
  <Router>
    <Scene key="root">
      <Scene key="Intro" component={IntroSwiper} initial hideNavBar />
      <Scene key="Home" component={Home} title="Login" />
      <Scene key="Auth" component={AuthScreens} title="Register" />
      <Scene key="SapanaWebView" component={SapanaWebView} />
    </Scene>
  </Router >
)


export default class App extends Component {

  NetInfoSubScription = null;

  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,

    }
  }

  componentDidMount() {
    this.NetInfoSubScription = NetInfo.addEventListener(
      this._handleConnectivityChange,
    ),

      SplashScreen.hide();

  }
  componentWillUnmount() {
    this.NetInfoSubScription && this.NetInfoSubScription();
  }


  _handleConnectivityChange = (state) => {
    this.setState({ isConnected: state.isConnected })
  };

  render() {
    if (!this.state.isConnected) {
      return <NoInternet />;
    }
    return (
      // <NavigationContainer>
      //   <StackNavigator />
      // </NavigationContainer>
      <Routes />

    );
  }
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

