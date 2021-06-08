import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Style'
import { debounce } from 'lodash'

export default link = ({ textToDisplay, buttonClick,testID }) => {
    return (
        <TouchableOpacity testID={testID} onPress={debounce(buttonClick, 300, { leading: true, trailing: false })} style={styles.touchableOpacityStyle}>
            <Text style={styles.textStyle}>{textToDisplay}</Text>
        </TouchableOpacity>
    );
};