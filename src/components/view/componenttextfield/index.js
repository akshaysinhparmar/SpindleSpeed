import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList, TouchableHighlight, ScrollView } from 'react-native';
import styles from './Style'

const ComponentTextField = ({ required = false, textToDisplay, value, text, id, type, validationCondition = null, conditionValue = null, validationMessage, formatType, onChangeEvent, isRequired = false }) => {

  console.log('meee callinggg')
  const [message, setMessage] = useState('')
  const [errorVisible, setErrorVisible] = useState(false)
  const [textToDisplayValue, SetTextToDisplayValue] = useState('')

  const titleText = 'Enter ' + textToDisplay

  useEffect(() => {
    if (value != null) {
      SetTextToDisplayValue(value.toString())
    }
  }, [])

  useEffect(() => {
    if (isRequired) {
      setMessage('*')
      setErrorVisible(true)
    }
  }, [isRequired])

  function compare(post, operator, value) {
    switch (operator) {
      case '>': return post > value;
      case '<': return post < value;
      case '>=': return post >= value;
      case '<=': return post <= value;
      case '==': return post == value;
      case '!=': return post != value;
      case '===': return post === value;
      case '!==': return post !== value;
    }
  }

  const onChange = (text, id, type,) => {
    // if (formatType == 'numeric') {
    //   text = parseInt(text)
    // }
    if (required && text.length === 0) {
      setMessage('*')
      setErrorVisible(true)
      onChangeEvent({ objectToAdd: { [type]: text }, id: id })
    }
    else if (validationCondition != null || conditionValue != null) {
      if (compare(text, validationCondition, conditionValue)) {
        setMessage('')
        setErrorVisible(false)
        onChangeEvent({ objectToAdd: { [type]: text }, id: id })
      }
      else {
        setMessage(validationMessage)
        setErrorVisible(true)
        onChangeEvent({ objectToAdd: { [type]: '' }, id: id })
      }
    }
    else {
      setMessage('')
      setErrorVisible(false)
      onChangeEvent({ objectToAdd: { [type]: text }, id: id })
    }
  }

  return (
    <View style={styles.container} >
      <View style={styles.subContainer}>
        <TextInput   onChangeText={
          (text) => {
            console.log('weeww')
            SetTextToDisplayValue(text)
            //onChange(text, id, type, validationCondition, validationMessage, conditionValue, formatType)
          }
        }  lable='k' placeholder={titleText} />
      </View>
      {errorVisible ? <Text style={styles.ErrorStyle}>{message}</Text> : null}

    </View>

  );
};
export default React.memo(ComponentTextField)