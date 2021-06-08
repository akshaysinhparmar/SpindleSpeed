import React, { useState } from 'react';
import { Text, View, Modal, FlatList, Pressable } from 'react-native';
import Image from '../image/index'
import images from '../../../utility/Images'
import styles from './Style'
import colors from '../../../utility/Color'

const Modald = ({ modalVisible, setModalVisible, titleText, selectedItem, setSelectedItem, listItems, multipleSelection = false, onDropDownClick }) => {
    return (
        <View style={styles.centeredView}>
            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>


                        <View>
                            <FlatList
                                ListHeaderComponent={
                                    <View style={styles.modalHeader}>
                                        <Text style={styles.modalHeaderTextStyle}>{titleText}</Text>
                                        <Pressable style={styles.modalHeaderTextStyle2} onPress={() => {
                                            setModalVisible(false)
                                        }}><Text >{multipleSelection ? 'Done' : 'Cancel'}</Text></Pressable>
                                    </View>
                                }
                                keyExtractor={(item) => item._id.toString()}
                                data={listItems}
                                renderItem={({ item, index, separators }) => (
                                    <Pressable
                                        underlayColor={colors.appBackground}
                                        onPress={() => {
                                            if (!multipleSelection) {
                                                setModalVisible(false)
                                                selectedItem.filter(e => e._id === item._id).length == 0 || selectedItem.length == 0 ?
                                                setSelectedItem([item]) : setSelectedItem(selectedItem.filter(e => e._id !== item._id))
                                            }else{
                                                selectedItem.filter(e => e._id === item._id).length == 0 || selectedItem.length == 0 ?
                                                setSelectedItem([...selectedItem, item]) : setSelectedItem(selectedItem.filter(e => e._id !== item._id))
                                            }
                                            // selectedItem.filter(e => e._id === item._id).length == 0 || selectedItem.length == 0 ?
                                            //     setSelectedItem([...selectedItem, item]) : setSelectedItem(selectedItem.filter(e => e._id !== item._id))

                                        }}
                                        key={item._id}>
                                        <View style={styles.flatListItemViewStyle}>
                                            <Text style={styles.flatListItemTextViewStyle}>{item.title}</Text>
                                            {
                                                selectedItem.filter(e => e._id === item._id).length > 0 ?
                                                    <View style={styles.flatListItemSelectionStyle}>
                                                        <Image imageSource={images.dashboard.check} />
                                                    </View> : null
                                            }

                                        </View>
                                    </Pressable>
                                )}
                            />
                        </View>
                    </View>
                </View>
            </Modal>

        </View>


    );
};
export default React.memo(Modald)