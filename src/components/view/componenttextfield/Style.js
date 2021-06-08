import { StyleSheet } from 'react-native';


export default StyleSheet.create({
    container: {
        marginBottom: 20
    },
    subContainer: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        borderColor: '#ff0000',
        borderBottomWidth: 1,
        width: '100%',
        marginTop: 10,
        marginHorizontal:20
    },
    ErrorStyle: {
        fontFamily: 'Montserrat-medium',
        color: '#ff0000',
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
        backgroundColor: '#ff0000'
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