import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Button
                    title="Intro"
                    onPress={() => this.props.navigation.navigate("Auth")
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})
