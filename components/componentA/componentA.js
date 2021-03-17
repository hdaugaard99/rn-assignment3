import React from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

import { styles, buttons } from './styles';

const HelloWorld = () => {
    return (
        <View style={styles.container}>
            <TouchableHighlight style={buttons.primary} >
                <Text>Hello World</Text>
            </TouchableHighlight>
        </View>
    )
}

export default HelloWorld;