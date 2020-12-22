import React, {Component} from 'react';
import {Text, Dimensions, Image, StyleSheet, View} from 'react-native';

export default class IntroSwiperChild3 extends Component {
  render() {
    return (
      <View>
        {/* <View style={styles.header}>
          <Text style={styles.textSkip}>
            Skip
          </Text>
        </View> */}
        <View style={styles.container}>
          <View
            style={{
              width: width,
              height: height / 2.1,
              // backgroundColor: 'red',
              // // borderRadius:(height / 4.4) / 2,
              // borderBottomLeftRadius: width + height / 2 / 2,
              // borderBottomRightRadius: width + height / 2 / 2,
              // backgroundColor:'rgba(60,63,217, 0.2)',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../../images/shape_changed.png')}
              style={{
                height: '100%',
                width: '100%',
                resizeMode: 'stretch',
                position: 'absolute',
                top: 0,
              }}
            />

            <Image
              source={require('../../../images/education-02.png')}
              style={{height: '75%', width: '60%', resizeMode: 'stretch'}}
            />
          </View>
          <View style={{paddingHorizontal: 40}}>
            <Text
              style={{
                lineHeight: 34,
                fontSize: 24,
                color: 'white',
                fontWeight: '500',
              }}>
              {`Enlightening\nminds since 52+ years`}
            </Text>
            <Text
              style={{
                lineHeight: 21,
                fontSize: 14,
                color: 'white',
                opacity: 0.5,
                marginVertical: 10,
              }}>
              {`Powered by Sapna Book House, we pride ourselves to share the legacy of being a part of every students life in Bangalore for the past 52+ years.`}
            </Text>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'flex-start',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../../../images/check.png')}
                style={{height: 11, width: 14,resizeMode:'stretch',opacity:0.5,marginRight: 10,alignSelf:'flex-start',marginTop: 8,}}
              />
              <Text
                style={{
                  lineHeight: 21,
                  fontSize: 14,
                  color: 'white',
                  opacity: 0.5,
                  marginVertical: 0,
                }}>
                {`19+ Stories in Bangalore Coimbatore, Mangalore Mysore, Huble, Erode`}
              </Text>
            </View>
         
            {/* <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'row',
                paddingVertical:10
              }}>
              <Image
                source={require('./images/check.png')}
                style={{height: 11, width: 14,resizeMode:'stretch',opacity:0.5,marginRight: 10,marginTop: 5,}}
              />
              <Text
                style={{
                  lineHeight: 21,
                  fontSize: 14,
                  color: 'white',
                  opacity: 0.5,
                }}>
                {`19+ Stories in Bangalore Coimbatore, Mangalore Mysore, Huble, Erode`}
              </Text>
            </View>
           */}
          </View>
        </View>
        {/* <View style={styles.footer}>
          <Text style={styles.textNext}>Next</Text>
        </View> */}
      </View>
    );
  }
}
export const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  footer: {
    height: 56,
    width: width,
    padding: 20,
  },
  textSkip: {
    alignSelf: 'flex-end',
    color: 'white',
    opacity: 0.5,
  },
  textNext: {
    alignSelf: 'flex-end',
    color: 'white',
    opacity: 0.5,
  },
  header: {
    height: 56,
    width: width,
    // backgroundColor: '#3C3FD9',
    padding: 20,
    position: 'absolute',
  },
  container: {
    width: width,
    height: height - (138 - 56),
  },
});
