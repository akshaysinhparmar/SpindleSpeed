import React from 'react';
import { TextInput, View, Text, Image, TouchableOpacity } from 'react-native';
import images from '../../../utility/Images'
import styles from './Style'


const TextField = ({testID, value, isEdit = true, lable, placeholder, secureTextEntry, ErrorMessage, ErrorMessageShow, onChange, isSecureField, onChangeEvent, isShowText }) => {
  return (

    <View style={styles.containerStyle} testID={testID}>
      <Text style={styles.labelStyle}>{lable}</Text>
      <View style={styles.subContainerStyle}>
        <TextInput
          pointerEvents={isEdit ? 'auto' : 'none'} editable={isEdit}
          value={value}
          keyboardType="default"
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          style={[styles.inputStyle]}
          onChangeText={text => onChange({ text, lable })}
          secureTextEntry={isShowText}
        />
        {isSecureField ? <TouchableOpacity style={styles.touchViewStyle} onPress={text => onChangeEvent({ isShowText })}>
          {<Image source={isShowText ? images.login.eyeShow : images.login.eyeHide}></Image>}
        </TouchableOpacity> : null}
      </View>
      <Text style={styles.underlineStyle} />
      {ErrorMessageShow == 1 ? <Text style={styles.ErrorStyle}>{ErrorMessage}</Text> : null}
    </View>
  );
};
export default React.memo(TextField)
