import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class AuthScreens extends Component {


    render() {
        return (
            <View>
                <Button
                    title="GO TO SAPANA APP"
                    onPress={
                        () => this.props.navigation.navigate("SapanaWebView")
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
