import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList, TouchableHighlight, ScrollView } from 'react-native';
import styles from './Style'

const TextArea = ({ required = false, textToDisplay, value, text, id, type, validationCondition = null, conditionValue = null, validationMessage, formatType, onChangeEvent, isRequired = false }) => {

  const [errorVisible, setErrorVisible] = useState(false)
  const [message, setMessage] = useState('')
  const [textToDisplayValue, SetTextToDisplayValue] = useState('')

  const titleText = 'Enter ' + textToDisplay

  useEffect(() => {
    if (isRequired) {
      setMessage('*')
      setErrorVisible(true)
    }
  }, [isRequired])

  useEffect(() => {
    if (value != null) {
      SetTextToDisplayValue(value.toString())
    }
  }, [])

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

  onChange = (text) => {
    // if (formatType == 'numeric') {
    // text = parseInt(text)
    // }
    if (required && text.length === 0) {
      setMessage('*')
      setErrorVisible(true)
    }
    else if (conditionValue != null || validationCondition != null) {
      if (compare(text, validationCondition, conditionValue)) {
        setMessage('')
        setErrorVisible(false)
        if (type == '') {
          onChangeEvent({ objectToAdd: text, id: id })
        } else {
          onChangeEvent({ objectToAdd: { [type]: text }, id: id })
        }
      }
      else {
        setMessage(validationMessage)
        setErrorVisible(true)
      }
    }
    else {
      setMessage('')
      setErrorVisible(false)

      if (type == 'usercomment') {
        onChangeEvent({ objectToAdd: text, id: id })
      } else {
        onChangeEvent({ objectToAdd: { [type]: text }, id: id })
      }
    }
    // setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container} >
      <View style={styles.subContainer}>

        <TextInput value={textToDisplayValue} multiline numberOfLines={5} keyboardType={formatType}
          onChangeText={text => {
            SetTextToDisplayValue(text)
            onChange(text)
          }} style={styles.textInputStyle} lable='k' placeholder={titleText} />
      </View>
      {errorVisible ? <Text style={styles.ErrorStyle}>{message}</Text> : null}

    </View>

  );
};
export default React.memo(TextArea)