
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './Style'
import colors from '../../../utility/Color'
import Strings from '../../../utility/String'

import LinearGradient from "react-native-linear-gradient";


const Button = ({ textToDisplay, buttonClick }) => {
    return (
        <LinearGradient style={styles.container} colors={textToDisplay == Strings.login.signInToPerfequta ? colors.greenButtonColor : colors.buttonColors}>
            <TouchableOpacity onPress={buttonClick} style={styles.touchableOpacityStyle}>
                <Text style={styles.textStyle}>{textToDisplay}</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};
export default React.memo(Button)