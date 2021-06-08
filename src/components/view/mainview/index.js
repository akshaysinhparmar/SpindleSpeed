import React from 'react'
import { SafeAreaView, View, StatusBar } from 'react-native';
import styles from '../mainview/Style'
const ChildView = ({ isStatusBarHidden = true, SubView ,testID}) => {
  return (
    <View style={styles.container} testID={testID}>
      <StatusBar hidden={isStatusBarHidden} />
      <SubView >
      </SubView>

    </View>
  );
};

export default MainView = ({ isSafeAreaViewDisplay = true, isStatusBarHidden = false, subView,testID}) => {
  return (
    isSafeAreaViewDisplay ?
      <SafeAreaView style={styles.container}>

        <ChildView SubView={subView} isStatusBarHidden={isStatusBarHidden} testID={testID} />
      </SafeAreaView> : <ChildView SubView={subView} isStatusBarHidden={isStatusBarHidden} testID={testID} />

  );
};
