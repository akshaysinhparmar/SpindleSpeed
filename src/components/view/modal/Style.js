import { StyleSheet } from 'react-native';

import colors from '../../../utility/Color'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: "center",
        marginTop: 22,
        width: '100%'
        // alignSelf: 'flex-start',
        // borderColor: colors.primary,
        // borderBottomWidth: 1,
    },
    centeredView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 22
    },
    modalView: {
        height: 250,
        flex: 1,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

    },
    modalHeader: {
        flexDirection: 'row',
        paddingVertical: 10,
        marginRight: 15,
        flex: 1,
    },
    modalHeaderTextStyle: {
        color: colors.primary,
        fontSize: 14,
        flex: 0.55,
        textAlign: 'right',
        fontFamily: 'Montserrat-SemiBold'
    },
    modalHeaderTextStyle2: {
        color: colors.primary,
        fontSize: 14,
        flex: 0.45,
        textAlign: 'right',
        alignItems: 'flex-end',
        fontFamily: 'Montserrat-SemiBold'
    },
    flatListItemViewStyle: {
        paddingVertical: 10,
        borderBottomWidth: 0.3,
        flex: 1,
        flexDirection: 'row'
    },
    flatListItemTextViewStyle: {
        marginLeft: 20,
        flex: 0.95,
        textAlign: 'left',
        fontSize: 16
    },
    flatListItemSelectionStyle: {
        backgroundColor: colors.primary,
        width: 20, height: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});