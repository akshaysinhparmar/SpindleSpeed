
import React, { useState, useEffect } from 'react';
import { Text, View, Modal, FlatList, Pressable, Linking, Platform, SafeAreaView } from 'react-native';
import colors from '../../../utility/Color'
import Strings from '../../../utility/String'

import { getUniqueID } from "../../../utility/UtilityFuncions";
import { useSelector, useDispatch } from 'react-redux'

import NetInfo, { useNetInfo } from "@react-native-community/netinfo";
import AndroidOpenSettings from 'react-native-android-open-settings'
import { getCurrentRouteName, navigate } from "../../../navigation/RootNavigation";
import NavigationHeaders from "../../../navigation/NavigationHeaders";

import AsyncStorage from '@react-native-async-storage/async-storage';

import { queryAllTodoLists, deleteSchemaRecord } from '../../../Database/Database';

import { DRAFT_ENTRY_REQUEST, MAKE_RESPONSE_NULL } from "../../../features/dashboard/appentry/actions/index";
import { LOGIN_REQUEST_SUCCESS, REFRESH_TOKEN_REQUEST } from "../../../features/login/actions/index";

export const navigationRef = React.createRef();




const offlineStatusBar = () => {

    const dispatch = useDispatch()


    const { response } = useSelector((state) => {
        return state.schemaDetailsReducer
    })

    const { accessToken, } = useSelector(state => {
        return state.login
    })

    const [message, setMessage] = useState('')
    const [isDisplay, setIsDisplay] = useState(false)
    const [offlineRecordsCount, setOfflineRecordsCount] = useState(0)

    const [totalItems, setTotalitems] = useState(0)
    const [uploadedRecordsCount, setUploadedRecordsCount] = useState(0)
    const [isTokenRefresh, setIsTokenRefresh] = useState(false)
    const [offlineRecords, setOfflineRecords] = useState([])

    const [isApiCalled, setIsApiCalled] = useState(0)

    const netInfo = useNetInfo();

    const updateCounter = () => {

    }

    useEffect(() => {
        if (accessToken != null && isTokenRefresh) {
            setIsTokenRefresh(false)
            uploadOfflineRecords(offlineRecords, accessToken)
        }
    }, [accessToken])

    useEffect(() => {

        if (response != null) {
            dispatch({
                type: MAKE_RESPONSE_NULL,
                payload: {
                    accessToken: accessToken,
                }
            })

            setOfflineRecordsCount(offlineRecordsCount - 1)
            setUploadedRecordsCount(uploadedRecordsCount + 1)
            deleteSchemaRecord(databaseName = 'schemaRecordsToUpload', uploadedRecordsCount - 1).then((result) => {
            }).catch((error) => {
            })
        }

    }, [response])


    useEffect(() => {
        queryAllTodoLists(databaseName = 'schemaRecordsToUpload',).then((result) => {

            setIsDisplay(!result.length > 0)
            setOfflineRecordsCount(result.length)
            setTotalitems(result.length)
            const unsubscribe = NetInfo.addEventListener(state => {
                if (state.isConnected) {
                    setMessage(`You have total ${offlineRecordsCount} offline records and it started syncing.`)

                }
                else {
                    setMessage(`You have total ${offlineRecordsCount} offline records and once your internet back it will start uploading.`)
                }
            })
            unsubscribe()

        }).catch((error) => {
        })


    }, [offlineRecordsCount, netInfo.isConnected])

    useEffect(() => {
        queryAllTodoLists(databaseName = 'schemaRecordsToUpload',).then((result) => {

            const unsubscribe = NetInfo.addEventListener(state => {
                if (state.isConnected) {

                    const filterData = result.toJSON()
                    setOfflineRecords(filterData)
                    getData().then((value) => {
                        const tokenExpireTimeInMinutes = Math.floor((JSON.parse(value).timeOfLogin - new Date().getTime()) / 1000 / 60)
                        // if (accessToken != undefined && tokenExpireTimeInMinutes <= 19) {
                        //     uploadOfflineRecords(filterData, accessToken)

                        // }
                        // else {

                        if (!isTokenRefresh) {
                            dispatch({
                                type: REFRESH_TOKEN_REQUEST,
                                payload: {
                                    accessToken: JSON.parse(value).accessToken,
                                    deviceID: getUniqueID(),
                                }
                            })
                        }
                        setIsTokenRefresh(true)

                        //}
                    })
                }
                // else {
                //     //setMessage(`You have total ${offlineRecordsCount} offline records and once your internet back it will start uploading.`)
                // }
            })
            unsubscribe()

        }).catch((error) => {
        })

        ///setIsDisplay(getCurrentRouteName() === NavigationHeaders.SplashScreen || getCurrentRouteName() === NavigationHeaders.LoginScreen)


    }, [netInfo.isConnected])


    const getData = async () => {

        const value = await AsyncStorage.getItem('storedata')
        return value
    }

    const uploadOfflineRecords = (offlineRecords, accessToken) => {


        //if (isApiCalled === 0) {
        offlineRecords.map(item => {
            setIsApiCalled(1)
            item.entries = JSON.parse(item.entries)
            item.statusInfo = JSON.parse(item.statusInfo)

            dispatch({
                type: DRAFT_ENTRY_REQUEST,
                payload: {
                    accessToken: accessToken,
                    entryObject: item,
                    isDraft: item.statusInfo.DRAFT
                }
            })
        })
        //}
    }

    return (
        isDisplay ? <View></View> : <SafeAreaView>
            <View style={{ flexDirection: 'row', padding: 10, backgroundColor: colors.primary }}>
                <Text style={{ flex: 0.9, color: colors.white }}>{message}
                </Text>
                {
                    <Pressable onPress={() => navigate(NavigationHeaders.offlineSyncScreen, null)}>
                        <Text style={{ color: colors.white, fontFamily: "Montserrat-SemiBold", }}>View</Text>
                    </Pressable>
                }
            </View>
        </SafeAreaView>


    );
};
export default offlineStatusBar