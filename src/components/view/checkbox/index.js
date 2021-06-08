
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Image from '../image/index'
import images from '../../../utility/Images'
import styles from './Style'

const CheckBox = ({ textToDisplay, checkBox, setCheckBoxValue, isRadioButton = false }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    setCheckBoxValue(!checkBox)
                }}
            >
                <View style={[styles.checkBoxStyle, checkBox ? styles.checkBoxSelectedStyle : null, isRadioButton ? styles.radioButtonStyle : null]} onc>
                    {checkBox ? <Image imageSource={images.dashboard.check}></Image> : false}
                </View>
            </TouchableOpacity>
            <Text style={styles.checkBoxTextStyle}>{textToDisplay}</Text>
        </View>
    );
};
export default React.memo(CheckBox)