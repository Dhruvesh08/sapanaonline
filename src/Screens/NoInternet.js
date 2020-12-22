import React from 'react';
import {
    View,
    Dimensions,
    Modal,
    ActivityIndicator,
    Platform,
    Image,
    Text,
    Button,
    TouchableOpacity
} from 'react-native';
import logo from '../../assets/new_logo.png'
import connection from '../../images/no_connection_2.png'
import Toast from 'react-native-simple-toast';

const device = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
};
let visible = true;
const NoInternet = () => {
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
                    backgroundColor: '#EEE',
                    flex: 1,
                    position: "absolute", top: 0, bottom: 0, left: 0, right: 0,
                    width: device.width,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >

                <View style={{


                    position: "absolute", top: 45, bottom: 0, left: 0, right: 0,
                    width: device.width,
                    alignItems: 'center',

                }}>
                    <Image style={{
                        marginBottom: 30,
                        marginLeft: 20,
                        width: "40%", height: "9%",
                        resizeMode: 'stretch'
                    }} source={logo} />
                </View>

                <Image style={{
                    //marginBottom: 30,

                    aspectRatio: 1,
                    height: 60,
                    resizeMode: 'stretch',
                }} source={connection} />
                <Text style={{ fontSize: 20, fontWeight: "bold" }} >You are offline</Text>

                <View style={{ width: "70%", marginTop: 10 }}>
                    <Text style={{ textAlign: "center", lineHeight: 20 }}>Please check your internet connection, we are unable to load the app</Text>
                </View>

                <View
                    style={{
                        backgroundColor: 'rgba(201,201,201,0.0)',
                        height: 100,
                        width: 180,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 14,
                        alignSelf: 'center',
                        position: 'absolute',
                        bottom: 20

                    }}
                >
                    <TouchableOpacity
                        style={{
                            width: device.width - 30,
                            marginTop: 20,
                            paddingTop: 10,
                            paddingBottom: 10,
                            marginLeft: 30,
                            marginRight: 30,
                            backgroundColor: '#2E3192',
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: '#eee',
                            position: 'absolute',
                            bottom: 0
                        }}
                        activeOpacity={.5}
                        onPress={() => {
                            Toast.show('No internet connection', Toast.LONG);
                        }}
                    >

                        <Text style={{
                            color: '#fff',
                            textAlign: 'center',
                            fontSize: 18,
                            fontWeight: "900"
                        }}> Try Again </Text>

                    </TouchableOpacity>

                </View>
            </View>
        </Modal>
    )
};

export default NoInternet;