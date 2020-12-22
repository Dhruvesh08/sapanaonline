import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, SafeAreaView, } from 'react-native'
import { WebView } from 'react-native-webview';



const ActivityIndicatorElement = () => {
    return (
        <ActivityIndicator
            color="#2e3292"
            size="large"
            style={styles.activityIndicatorStyle}
        />
    );
};

export default class SapanaWebView extends Component {



    constructor(props) {
        super(props);
        this.state = {
            loader: false,

        };
    }



    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <WebView
                        source={{ uri: 'https://sapnaonline.com/' }}
                        javaScriptEnabled={true}
                        //For the Cache
                        domStorageEnabled={true}
                        //View to show while loading the webpage
                        renderLoading={ActivityIndicatorElement}
                        //Want to show the view or not
                        startInLoadingState={true}
                        onLoadStart={() => this.setState.loader === true}
                        onLoad={() => this.setState.loader === false}
                    />
                    {this.loader ? <ActivityIndicatorElement /> : null}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    activityIndicatorStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
