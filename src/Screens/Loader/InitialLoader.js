import React from 'react';
import {
    View,
    Dimensions,
    Modal,
    ActivityIndicator,
    Platform,
    Image
} from 'react-native';
import Spinner from 'react-native-spinkit';
import logo from '../../../assets/sapna_new_logo.png'

const device = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};
let visible = true;
const InitialLoader = () => {
    console.log(device.height, "height device");
    return (
        <Modal
            animationType="fade"
            transparent
            visible={visible}
            onRequestClose={() => (visible = false)}
        >
            <View
                style={{
                    backgroundColor: '#2E3192',
                    flex: 1,
                    position: "absolute", top: 0, bottom: 0, left: 0, right: 0,
                    width: device.width,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >


                <Image style={{
                    marginBottom: 30,
                    marginLeft: 20,
                    width: "50%", height: "20%",
                }} source={logo} resizeMode={"contain"} />



                <View
                    style={{
                        backgroundColor: 'rgba(201,201,201,0.0)',
                        height: 100,
                        width: 100,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 14,
                        alignSelf: 'center',
                        position: 'absolute',
                        bottom: 20

                    }}
                >
                    {Platform.OS === 'ios' &&
                        <Spinner type="Arc" size={24} color="rgba(255,255,255,1)" />}
                    {Platform.OS === 'android' &&
                        <ActivityIndicator size={48} color="rgba(255,255,255,1)" />}
                </View>
            </View>
        </Modal>
    )
};

export default InitialLoader;