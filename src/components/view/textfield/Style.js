import { StyleSheet, Platform } from 'react-native';

import colors from '../../../utility/Color'
export default styles = StyleSheet.create({

  inputStyle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    marginVertical: 8,
    width: '93.5%',
    padding: 0,
  },
  labelStyle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
  },
  ErrorStyle: {
    fontFamily: 'Montserrat-Medium',
    color: colors.rad,
    fontSize: 12,
  },
  containerStyle: {
    marginHorizontal: 20,
    marginVertical: 4,
    flexDirection: 'column',
    marginTop: 20,
  },
  subContainerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  underlineStyle: {
    backgroundColor: '#077696',
    height: 1,
  },
  touchViewStyle: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  }
})