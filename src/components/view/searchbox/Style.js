import { StyleSheet } from 'react-native';
import colors from '../../../utility/Color'

export default StyleSheet.create({
    subContainerStyle: {
        flexDirection: 'row',
        borderColor: '#DDDDDD',
        backgroundColor: colors.white,
        borderRadius: 6,
        borderWidth: 1,
        paddingHorizontal: 15,
        alignItems: 'center',
        height: 48
    },
    searchIconStyle: {
        alignSelf: 'flex-end'
    },
    searchboxStyle: {
        flex: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        fontFamily: "Montserrat-Medium",
    }
});