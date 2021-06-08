import { StyleSheet } from 'react-native';

import colors from '../../../utility/Color'

export default StyleSheet.create({
    container:{
      marginBottom:20
    },
  subContainer: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        borderColor: colors.primary,
        borderBottomWidth: 1,
        width: '100%',
        marginTop:10,
        paddingBottom: 10 //
    },
    ErrorStyle: {
      fontFamily: 'Montserrat-medium',
      color: colors.rad,
      fontSize: 12,
      marginTop: 2,
    },
    imageStyle: {
        marginTop: 5
    },

    textInputStyle: {
        fontSize: 14,
        fontFamily: "Montserrat",
        paddingVertical: 5,
        alignSelf: 'center',
        width: '95%'
    },
    radioButtonStyle: {
        borderRadius: 10,
    },
    checkBoxStyle: {
        height: 20,
        width: 20,
        borderColor: '#999999',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkBoxSelectedStyle: {
        backgroundColor: colors.primary
    },

    checkBoxTextStyle: {
        fontSize: 14,
        marginStart: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredView: {
        justifyContent: 'flex-end',
        alignItems: "flex-end",
        marginTop: 22
    },
    modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
});