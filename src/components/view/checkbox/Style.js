import { StyleSheet } from 'react-native';

import colors from '../../../utility/Color'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 10,
        alignSelf: 'flex-start'
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
});