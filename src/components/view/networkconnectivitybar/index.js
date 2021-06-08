
import React, { useState, useEffect } from 'react';
import { Text, View, Modal, FlatList, Pressable, Linking, Platform,SafeAreaView } from 'react-native';
import colors from '../../../utility/Color'
import Strings from '../../../utility/String'

import { useNetInfo } from "@react-native-community/netinfo";
import AndroidOpenSettings from 'react-native-android-open-settings'
import { getCurrentRouteName } from "../../../navigation/RootNavigation";
import NavigationHeaders from "../../../navigation/NavigationHeaders";


export const navigationRef = React.createRef();


const NetworkConnectivityBar = () => {

    const [status, setStatus] = useState('')
    const [isDisplay, setIsDisplay] = useState(false)

    const netInfo = useNetInfo();
    

    useEffect(() => {
        netInfo.isConnected ? setStatus('online') : setStatus('Offline')
        netInfo.isConnected ? setTimeout(() => {
            setIsDisplay(true)
        }, 3000) : setIsDisplay(false)

        setIsDisplay(getCurrentRouteName()===NavigationHeaders.SplashScreen || getCurrentRouteName()===NavigationHeaders.LoginScreen)


    }, [netInfo.isConnected])

    return (
        isDisplay ? <View></View> :<SafeAreaView>
             <View style={{ flexDirection: 'row', padding: 10, backgroundColor: colors.primary }}>
            <Text style={{ flex: 0.9, color: colors.white }}>You are {status}
            </Text>

            {
                !isDisplay ? <Pressable onPress={() => Platform.OS == Strings.android ? AndroidOpenSettings.generalSettings() : Linking.openSettings()}>
                    <Text style={{ color: colors.white, fontFamily: "Montserrat-SemiBold", }}>Go to Setting</Text>
                </Pressable> : null
            }


        </View>
        </SafeAreaView>


    );
};
export default React.memo(NetworkConnectivityBar)