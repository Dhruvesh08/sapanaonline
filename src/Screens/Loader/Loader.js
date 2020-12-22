import React from 'react';
import {
  View,
  Dimensions,
  Modal,
  ActivityIndicator,
  Platform,
} from 'react-native';
import Spinner from 'react-native-spinkit';
import Toast from 'react-native-simple-toast';

const device = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};
let visible = true;

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }

  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.visibleLoader) {

      this.setState({
        visible: nextProps.visibleLoader
      }, () => {
        setTimeout(() => {
          nextProps.changeLoader();
          this.setState({
            visible: false
          })
        }, 1000);
      })

    }


  }

  componentDidMount() {
    console.log('did mount');
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent
        visible={this.state.visible}
        onRequestClose={() => (visible = false)}
      >
        <View
          style={{
            // backgroundColor: 'rgba(0,0,0,0.5)',
            height: device.height,
            width: device.width,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(201,201,201,0.4)',
              height: 100,
              width: 100,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 14,
              alignSelf: 'center'
            }}
          >
            {Platform.OS === 'ios' &&
              <Spinner type="Arc" size={24} color="#2E3192" />}
            {Platform.OS === 'android' &&
              <ActivityIndicator size={48} color="#2E3192" />}
          </View>
        </View>
      </Modal>
    )
  }
}

// const Loader = () => (

// );

export default Loader;
