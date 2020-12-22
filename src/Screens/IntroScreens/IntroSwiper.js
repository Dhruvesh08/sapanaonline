import React, { Component } from 'react';
import {
  Text,
  Dimensions,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  SafeAreaView,
  Modal
} from 'react-native';

import SwiperFlatList from 'react-native-swiper-flatlist';
import IntroSwiperChild1 from './IntroSwiperChild1';
import IntroSwiperChild2 from './IntroSwiperChild2';
import IntroSwiperChild3 from './IntroSwiperChild3';
import { Actions } from 'react-native-router-flux';


export default class IntroSwiper extends Component {

  swiperRef;

  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
    };

    this.onHandlePress = this.onHandlePress.bind(this)

  }

  onHandlePress() {
    // this.props.navigation.navigate("SapanaWebView")
    Actions.SapanaWebView();

  }

  onChangeIndex(index) {
    this.setState({
      currentIndex: index.index,
    });
  }
  onSignInPress() {


  }
  render() {
    console.log('====> current Index', this.state.currentIndex);


    return (
      <>
        <Modal
          animationType="fade"
          transparent
          visible={true}

        >
          <View style={styles.container}>
            <SwiperFlatList
              ref={e => (this.swiperRef = e)}
              autoplay={false}
              index={this.state.currentIndex}
              onChangeIndex={i => this.onChangeIndex(i)}
              autoplayLoop={false}
              showPagination
              paginationStyleItem={{
                height: 6,
                width: 6,
              }}
              paginationStyle={{

                paddingBottom: 20,

              }}>
              <IntroSwiperChild1 />
              <IntroSwiperChild2 />
              <IntroSwiperChild3
                onSkipPress={() => {
                  this.swiperRef.scrollToIndex({
                    index: 1,
                  });
                }}
              />
            </SwiperFlatList>
            {this.state.currentIndex === 2 ? (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() =>Actions.SapanaWebView()}

                style={styles.footerFull}>
                <Text style={styles.textStarted}>GET STARTED</Text>
              </TouchableOpacity>
            ) : (
                null

              )}

          </View>
        </Modal >
      </>
    );
  }
}

export const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E3192',
  },
  textStarted: {
    alignSelf: 'center',
    color: '#2E3192',
    fontSize: 14,
  },
  child: {
    height: height,
    width,
    justifyContent: 'center',
  },
  footerFull: {
    height: 56,
    width: width,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  footer: {
    height: 56,
    width: width / 2,
    padding: 20,
    // backgroundColor: 'white',
    alignSelf: 'flex-end',
  },
  textNext: {
    alignSelf: 'flex-end',
    color: 'white',
    opacity: 0.5,
  },
  header2: {
    height: 56,
    width: width / 2,
    padding: 20,
    alignSelf: 'flex-end',
    elevation: 0,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  textSkip: {
    alignSelf: 'flex-end',
    color: 'white',
    opacity: 0.5,
  },
  text: {
    fontSize: width * 0.5,
    textAlign: 'center',
  },
});
