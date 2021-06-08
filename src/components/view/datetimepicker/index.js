import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList, TouchableHighlight, ScrollView } from 'react-native';
import Image from '../image/index'
import images from '../../../utility/Images'
import styles from './Style'
import DateTimePickerModal from "react-native-modal-datetime-picker";



const DateTimePickerComponent = ({ value, formatType, textToDisplay, data, onDropDownClick, text, id, type, isRequired = false }) => {

    const [modalVisible, setModalVisible] = useState(false)
    const [selectedDate, setSelectedDate] = useState('')
    const [displayDate, setDisplayDate] = useState('')
    const [message, setMessage] = useState('')
    const [errorVisible, setErrorVisible] = useState(false)

    useEffect(() => {
        if (isRequired) {
            setMessage('*')
            setErrorVisible(true)
        }
    }, [isRequired])

    useEffect(() => {
        if (value != null) {
            setModalVisible(false);
            var date = new Date(value)
            if(isNaN(date)){
                date=new Date(new Date().getYear(),new Date().getMonth(),new Date().getDate(),value.split(':')[0],value.split(':')[1],value.split(':')[2])
            }

            setSelectedDate(date.toISOString())
            formatType == 'date' ? setDisplayDate(`${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${date.getYear() + 1900}`) :
                setDisplayDate(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

        }
    }, [])
    const hideDatePicker = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        if (selectedDate.length > 0) {
            setMessage('')
            setErrorVisible(false)
        }
        onDropDownClick({ objectToAdd: { [type]: selectedDate }, id: id, type: type })
    }, [selectedDate])

    const handleConfirm = (date) => {
        setModalVisible(false);
        var date = new Date(date)
        setSelectedDate(date.toISOString())
        formatType == 'date' ? setDisplayDate(`${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}/${date.getYear() + 1900}`) :
            setDisplayDate(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    };

    const titleText = 'Please select ' + textToDisplay

    return (
        <View >
            <TouchableOpacity onPress={() => {
                setModalVisible(true)
            }} >
                <View style={styles.container}>

                    <TextInput pointerEvents="none" editable={false} style={styles.textInputStyle} lable='k' disable placeholder={titleText}>
                        {
                            displayDate
                        }
                    </TextInput>

                    <Image imageSource={images.dashboard.downArrow} imageStyle={styles.imageStyle} />

                </View>
            </TouchableOpacity>
            {errorVisible ? <Text style={styles.ErrorStyle}>{message}</Text> : null}


            <DateTimePickerModal
                isVisible={modalVisible}
                mode={formatType}
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                date={selectedDate ? new Date(selectedDate) : new Date()}
            />

        </View>

    );
};
export default React.memo(DateTimePickerComponent)