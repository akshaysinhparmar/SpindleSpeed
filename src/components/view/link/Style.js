import { StyleSheet } from 'react-native';
import colors from '../../../utility/Color'

export default StyleSheet.create({
    touchableOpacityStyle: {
    alignItems:'flex-end',
    paddingHorizontal: 30,
    paddingVertical:15,
  },
  textStyle: {
      fontSize:14,
      color:colors.primary,
      fontFamily: "Montserrat-SemiBold",
  },
  container: {
      alignSelf: 'center',
      marginTop:30,
    },
  });