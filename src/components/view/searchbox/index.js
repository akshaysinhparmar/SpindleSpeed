import React from 'react';
import { TextInput, View } from 'react-native';

import styles from './Style'

import images from '../../../utility/Images'
import Image from '../image/index'
import String from '../../../utility/String'



const SearchBox = ({ onChange }) => {
    return (
        <View style={styles.subContainerStyle}>
            <Image style={styles.searchIconStyle} imageSource={images.dashboard.search} />

            <TextInput
                placeholder={String.dashboard.search}
                autoCorrect={false}
                style={[styles.searchboxStyle]}
                onChangeText={text => onChange(text)}
            />
        </View>

    )
}
export default SearchBox
