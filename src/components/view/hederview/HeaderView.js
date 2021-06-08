
import React, { useState, useEffect } from 'react';
import { Text, View, Modal, FlatList, Pressable, Linking, Platform } from 'react-native';
import colors from '../../../utility/Color'
import Strings from '../../../utility/String'

import { useNetInfo } from "@react-native-community/netinfo";
import AndroidOpenSettings from 'react-native-android-open-settings'

import NetworkConnectivityBar from '../networkconnectivitybar/index';

import { useNavigation } from '@react-navigation/native';


const HeaderView = (props) => {


    return (
        <View>
            <NetworkConnectivityBar style={{ paddingTop: 40 }} />

        </View>


    );
};
export default React.memo(HeaderView)