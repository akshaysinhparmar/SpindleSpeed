import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList, TouchableHighlight, ScrollView } from 'react-native';
import styles from './Style'
import Modal from '../modal/index'

const DropDown = ({ allicableSitesFlag, setAllicableSitesFlag, level, required = false, value, multipleSelection = false, textToDisplay, data, onDropDownClick, text, id, type, isRequireForDraft = false }) => {

    const [selectedItem, setSelectedItem] = useState([])
    const [modalVisible, setModalVisible] = useState(false)
    const [listItem, setListItem] = useState([])
    const [sitesFlag, setSitesFlag] = useState(false)


    const [tempLevelList, setTempLevelList] = useState([])


    const [message, setMessage] = useState('')
    const [errorVisible, setErrorVisible] = useState(false)


    const titleText = 'Please select ' + textToDisplay


    useEffect(() => {
        setListItem(data)
    }, [data])


    useEffect(() => {
        if (type === 'allicableSites') {
        }
    },[] )

    useEffect(() => {
        if (type === 'allicableSites') {
            if (allicableSitesFlag) {
                if ((level.length == 0 && id != 0) || (level.find(l => l.levelId == id - 1) == undefined && id != 0) || (id != 0 && level.find(l => l.levelId == id - 1) !== tempLevelList.find(l => l.levelId == id - 1))) {
                    setListItem([])
                    selectedItem.length > 0 ? setSelectedItem([]) : null
                }
            }
            else {
                if (data.length === 1 && value === null) {
                    setListItem(data)
                    setSelectedItem([data[0]])
                }
            }
        }
    }, [level])

    useEffect(() => {
        if (value != null) {
            if (multipleSelection) {
                value.map(v => {
                    data.map(item => {
                        if (type === 'users' || type === 'roles') {
                            if (item.title === v.title) {
                                setSelectedItem([...selectedItem, item])
                            }
                        }
                        else {
                            if (item.title === v.toString()) {
                                setSelectedItem([...selectedItem, item])
                            }
                        }
                    })
                })
            }
            else {

                data.map(item => {
                    if (type === 'allicableSites') {
                        setSelectedItem([...selectedItem, item])
                    }
                    else {
                        if (item.title === value.toString()) {
                            setSelectedItem([...selectedItem, item])
                        }
                    }
                })
            }
        }
        //}
    }, [])

    useEffect(() => {
        if (selectedItem.length > 0) {
            let objectToAdd;
            setMessage('')
            setErrorVisible(false)

            if (multipleSelection === false) {

                if (type === 'allicableSites') {
                    objectToAdd = {
                        levelId: id,
                        siteId: selectedItem[0]._id,
                        title: selectedItem[0].title,
                    }
                    setTempLevelList(level)
                } else {
                    objectToAdd = { [type]: selectedItem[0].title }
                }

            } else {
                if (type === 'roles' || type === 'users') {
                    objectToAdd = selectedItem
                } else {
                    let selectedItemList = []
                    selectedItem.map((item) => { selectedItemList.push(item.title) })
                    objectToAdd = { [type]: selectedItemList }
                }
            }
            onDropDownClick({ objectToAdd: objectToAdd, id: id, type: type })
        } else {
            let objectToAdd;

            if (required) {
                const starSymbol = isRequireForDraft ? '**' : '*'
                setMessage(starSymbol)
                setErrorVisible(true)
            }

            if (multipleSelection === false) {
                if (type === 'allicableSites') {
                    objectToAdd = {}
                } else {
                    objectToAdd = { [type]: {} }
                }
            }
            else {
                if (type === 'roles' || type === 'users') {
                    objectToAdd = []
                } else {
                    objectToAdd = { [type]: [] }
                }
            }
            onDropDownClick({ objectToAdd: objectToAdd, id: id, type: type })
        }

    }, [selectedItem])

    onChnage = () => {

        if (type === 'allicableSites') {
            setAllicableSitesFlag(true)
            let tempdata = []
            level.map(item => {
                if (id > item.levelId) {
                    if (id == item.levelId + 1) {
                        data.map(site => {
                            site.parents.map(p => {
                                if (p._id == item.siteId) {
                                    tempdata.push(site)
                                }
                            })
                        })
                        setListItem(tempdata)
                    }
                }
            })
        }
        setModalVisible(!modalVisible)
    }

    return (
        <View>
            <TouchableOpacity onPress={onChnage}>
                <View style={styles.container}>

                    <TextInput pointerEvents="none" editable={false} style={styles.textInputStyle} lable='k' disable placeholder={titleText}>
                        {
                            type === 'allicableSites' && sitesFlag ? '' : selectedItem.map((item, index) => index != selectedItem.length - 1 ? item.title + ', ' : item.title)
                        }
                    </TextInput>


                </View>
            </TouchableOpacity>
            {errorVisible ? <Text style={styles.ErrorStyle}>{message}</Text> : null}


            <Modal modalVisible={modalVisible} titleText={textToDisplay} listItems={listItem} setModalVisible={setModalVisible} selectedItem={selectedItem} setSelectedItem={setSelectedItem} multipleSelection={multipleSelection} onDropDownClick={onDropDownClick}></Modal>
        </View>

    );
};
export default React.memo(DropDown)