/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect } from 'react';
 import DropDownPicker from 'react-native-dropdown-picker';
 
 // import type {Node} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   useColorScheme,
   View,
   Button,
 } from 'react-native';
  
 import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 const App = () => {
 
   var radio_props = [
     { label: 'HSS Tools', value: 0 },
     { label: 'Carbide Tools', value: 1 }
   ];
 
  const isDarkMode = useColorScheme() === 'white';
 
 
  const [diameter, onChangeDiameter] = React.useState();
 
  const [cuttingSpeed, onCuttingSpeed] = React.useState();
 
  const [dd, setAkkiDD] = React.useState({});
 
  const [dd2, setAkkiDD2] = React.useState({});
 
  const [length1, setAkkiLength1] = React.useState(0);
 
  const [length2, setAkkiLength2] = React.useState(0);

  const [length3, setAkkiLength3] = React.useState(0);
 
  const [lengthAns, setAkkiLengthAns] = React.useState(0);

  const [d1, setAkkiD1] = React.useState(0);

  const [d2, setAkkiD2] = React.useState(0);

  const [depthCut, setAkkiDepthCut] = React.useState(0);

  const [feedRate, setAkkiFeedRate] = React.useState(0);

  const [machineAllowance, setAkkiMachineAllowance] = React.useState(0);

  const [noOfPass, setAkkiNoOfPass] = React.useState(0);
   
  const [totalMachineTime, setAkkiTotalMachineTime] = React.useState(0);
  
  const [rv, setAkkiRv] = React.useState({ value: 0 });
 
  const [visible1, setAkkiVisible1] = React.useState(false)
 
  const [visible2, setAkkiVisible2] = React.useState(false)
 
  const [hideComponent, setAkkiHideCommponent] = React.useState(false) 
 
  const [spindalSpeed, setAkkispindalSpeed] = React.useState(0);

  const [cs, setAkkiCs] = React.useState(0);
 
  useEffect(() => {
  
    setAkkiLengthAns(parseFloat(length3)+parseFloat(length2)+parseFloat(length1))

  }, [length1,length2,length3])

  
  useEffect(() => {

    setAkkiMachineAllowance((parseFloat(d1)-parseFloat(d2))/2)

  }, [d1,d2])


  useEffect(() => {
 
    setAkkiNoOfPass(Math.ceil(parseFloat(machineAllowance)/parseFloat(depthCut)))

  }, [machineAllowance,depthCut])


  useEffect(() => {
 
    setAkkiTotalMachineTime(parseFloat(lengthAns)*parseFloat(noOfPass)/(parseFloat(feedRate)*parseFloat(spindalSpeed)))

  }, [noOfPass, feedRate, spindalSpeed, lengthAns])


  // useEffect(() => {

  //   setAkkiTotalMachineTime((parseFloat(lengthAns)*parseFloat(noOfPass))/(parseFloat(feedRate)*parseFloat(spindalSpeed))

  // }, [noOfPass,feedRate,spindalSpeed,lengthAns])


 
   useEffect(() => {
 
 
     if (dd2.value == 'StraightTurning Rough' || dd2.value == 'StraightTurning Finish' || dd2.value == 'TaperTurning Rough' || dd2.value == 'TaperTurning Finish') {
       setAkkiHideCommponent(true)
     }
     else {
       setAkkiHideCommponent(false)
     }
 

      // if(dd.value=='Mild Steel' && dd2.value=='Drilling' && rv.value==0 ){
      //   setAkkiCs(0)
      // }
      // else if(dd.value=='Cast Steel' && dd2.value=='Drilling' && rv.value==0){
      //   setAkkiCs(0)
      // }

      // { label: 'StraightTurning', value: 'StraightTurning', },
      //     { label: 'TaperTurning', value: 'TaperTurning', },
      //     { label: 'Threading', value: 'Threading', },
      //     { label: 'Knurling', value: 'Knurling', },
      //     { label: 'PartingOff', value: 'PartingOff', },
      //     { label: 'Drilling', value: 'Drilling', },

      if(dd.value=='Mild Steel'){
              if(dd2.value=='StraightTurning Rough' && rv.value==0){
                setAkkiCs(40)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==0){
                setAkkiCs(60)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==0){
                setAkkiCs(40)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==0){
                setAkkiCs(60)
              }
              else if(dd2.value=='Threading' && rv.value==0){
                setAkkiCs(10)
              } 
              else if(dd2.value=='Knurling' && rv.value==0){
                setAkkiCs(20)
              } 
              else if(dd2.value=='PartingOff' && rv.value==0){
                setAkkiCs(36)
              } 
              else if(dd2.value=='Drilling'){
                setAkkiCs(30)
              }
              else if(dd2.value=='StraightTurning Rough' && rv.value==1){
                setAkkiCs(90)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==1){
                setAkkiCs(180)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==1){
                setAkkiCs(90)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==1){
                setAkkiCs(180)
              }
              else if(dd2.value=='Threading' && rv.value==1){
                setAkkiCs(30)
              } 
              else if(dd2.value=='Knurling' && rv.value==1){
                setAkkiCs(45)
              } 
              else if(dd2.value=='PartingOff' && rv.value==1){
                setAkkiCs(49.5)
              }
        
      }
      else if(dd.value=='Cast Steel'){
              if(dd2.value=='StraightTurning Rough' && rv.value==0){
                setAkkiCs(15)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==0){
                setAkkiCs(24)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==0){
                setAkkiCs(15)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==0){
                setAkkiCs(24)
              }
              else if(dd2.value=='Threading' && rv.value==0){
                setAkkiCs(3.5)
              } 
              else if(dd2.value=='Knurling' && rv.value==0){
                setAkkiCs(7.5)
              } 
              else if(dd2.value=='PartingOff' && rv.value==0){
                setAkkiCs(14.4)
              } 
              else if(dd2.value=='Drilling'){
                setAkkiCs(12)
              }
              else if(dd2.value=='StraightTurning Rough' && rv.value==1){
                setAkkiCs(45)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==1){
                setAkkiCs(100)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==1){
                setAkkiCs(45)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==1){
                setAkkiCs(100)
              }
              else if(dd2.value=='Threading' && rv.value==1){
                setAkkiCs(30)
              } 
              else if(dd2.value=='Knurling' && rv.value==1){
                setAkkiCs(22.5)
              } 
              else if(dd2.value=='PartingOff' && rv.value==1){
                setAkkiCs(24.75)
              }
      }
      else if(dd.value=='Grey Cast Iron'){
              if(dd2.value=='StraightTurning Rough' && rv.value==0){
                setAkkiCs(18)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==0){
                setAkkiCs(27)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==0){
                setAkkiCs(18)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==0){
                setAkkiCs(27)
              }
              else if(dd2.value=='Threading' && rv.value==0){
                setAkkiCs(3.5)
              } 
              else if(dd2.value=='Knurling' && rv.value==0){
                setAkkiCs(9)
              } 
              else if(dd2.value=='PartingOff' && rv.value==0){
                setAkkiCs(16.2)
              } 
              else if(dd2.value=='Drilling'){
                setAkkiCs(13)
              }
              else if(dd2.value=='StraightTurning Rough' && rv.value==1){
                setAkkiCs(60)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==1){
                setAkkiCs(100)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==1){
                setAkkiCs(60)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==1){
                setAkkiCs(100)
              }
              else if(dd2.value=='Threading' && rv.value==1){
                setAkkiCs(21)
              } 
              else if(dd2.value=='Knurling' && rv.value==1){
                setAkkiCs(30)
              } 
              else if(dd2.value=='PartingOff' && rv.value==1){
                setAkkiCs(33.0)
              }  
      }
      else if(dd.value=='Aluminium'){
              if(dd2.value=='StraightTurning Rough' && rv.value==0){
                setAkkiCs(90)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==0){
                setAkkiCs(150)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==0){
                setAkkiCs(90)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==0){
                setAkkiCs(150)
              }
              else if(dd2.value=='Threading' && rv.value==0){
                setAkkiCs(15)
              } 
              else if(dd2.value=='Knurling' && rv.value==0){
                setAkkiCs(45)
              } 
              else if(dd2.value=='PartingOff' && rv.value==0){
                setAkkiCs(90)
              } 
              else if(dd2.value=='Drilling'){
                setAkkiCs(72.0)
              }
              else if(dd2.value=='StraightTurning Rough' && rv.value==1){
                setAkkiCs(240)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==1){
                setAkkiCs(360)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==1){
                setAkkiCs(240)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==1){
                setAkkiCs(360)
              }
              else if(dd2.value=='Threading' && rv.value==1){
                setAkkiCs(45)
              } 
              else if(dd2.value=='Knurling' && rv.value==1){
                setAkkiCs(120)
              } 
              else if(dd2.value=='PartingOff' && rv.value==1){
                setAkkiCs(132.0)
              }
      }
      else if(dd.value=='Brass'){
              if(dd2.value=='StraightTurning Rough' && rv.value==0){
                setAkkiCs(75.0)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==0){
                setAkkiCs(100)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==0){
                setAkkiCs(75)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==0){
                setAkkiCs(100)
              }
              else if(dd2.value=='Threading' && rv.value==0){
                setAkkiCs(18.0)
              } 
              else if(dd2.value=='Knurling' && rv.value==0){
                setAkkiCs(37.5)
              } 
              else if(dd2.value=='PartingOff' && rv.value==0){
                setAkkiCs(60)
              } 
              else if(dd2.value=='Drilling'){
                setAkkiCs(60)
              }
              else if(dd2.value=='StraightTurning Rough' && rv.value==1){
                setAkkiCs(180)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==1){
                setAkkiCs(270)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==1){
                setAkkiCs(180)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==1){
                setAkkiCs(270)
              }
              else if(dd2.value=='Threading' && rv.value==1){
                setAkkiCs(60)
              } 
              else if(dd2.value=='Knurling' && rv.value==1){
                setAkkiCs(90)
              } 
              else if(dd2.value=='PartingOff' && rv.value==1){
                setAkkiCs(99.0)
              }
      }
      else if(dd.value=='Phosphor Bronze'){
              if(dd2.value=='StraightTurning Rough' && rv.value==0){
                setAkkiCs(18)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==0){
                setAkkiCs(36)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==0){
                setAkkiCs(18)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==0){
                setAkkiCs(36)
              }
              else if(dd2.value=='Threading' && rv.value==0){
                setAkkiCs(4.5)
              } 
              else if(dd2.value=='Knurling' && rv.value==0){
                setAkkiCs(9)
              } 
              else if(dd2.value=='PartingOff' && rv.value==0){
                setAkkiCs(21.6)
              } 
              else if(dd2.value=='Drilling'){
                setAkkiCs(13)
              }
              else if(dd2.value=='StraightTurning Rough' && rv.value==1){
                setAkkiCs(120)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==1){
                setAkkiCs(180)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==1){
                setAkkiCs(120)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==1){
                setAkkiCs(180)
              }
              else if(dd2.value=='Threading' && rv.value==1){
                setAkkiCs(60)
              } 
              else if(dd2.value=='Knurling' && rv.value==1){
                setAkkiCs(60)
              } 
              else if(dd2.value=='PartingOff' && rv.value==1){
                setAkkiCs(66)
              }
      }
      else if(dd.value=='Copper'){
              if(dd2.value=='StraightTurning Rough' && rv.value==0){
                setAkkiCs(54)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==0){
                setAkkiCs(80)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==0){
                setAkkiCs(54)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==0){
                setAkkiCs(80)
              }
              else if(dd2.value=='Threading' && rv.value==0){
                setAkkiCs(6.1)
              } 
              else if(dd2.value=='Knurling' && rv.value==0){
                setAkkiCs(27)
              } 
              else if(dd2.value=='PartingOff' && rv.value==0){
                setAkkiCs(48)
              } 
              else if(dd2.value=='Drilling'){
                setAkkiCs(40)
              }
              else if(dd2.value=='StraightTurning Rough' && rv.value==1){
                setAkkiCs(135)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==1){
                setAkkiCs(195)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==1){
                setAkkiCs(135)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==1){
                setAkkiCs(195)
              }
              else if(dd2.value=='Threading' && rv.value==1){
                setAkkiCs(30)
              } 
              else if(dd2.value=='Knurling' && rv.value==1){
                setAkkiCs(67.5)
              } 
              else if(dd2.value=='PartingOff' && rv.value==1){
                setAkkiCs(74.25)
              }
      }
      else if(dd.value=='Bronze'){
              if(dd2.value=='StraightTurning Rough' && rv.value==0){
                setAkkiCs(20)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==0){
                setAkkiCs(25)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==0){
                setAkkiCs(20)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==0){
                setAkkiCs(25)
              }
              else if(dd2.value=='Threading' && rv.value==0){
                setAkkiCs(30)
              } 
              else if(dd2.value=='Knurling' && rv.value==0){
                setAkkiCs(10)
              } 
              else if(dd2.value=='PartingOff' && rv.value==0){
                setAkkiCs(15)
              } 
              else if(dd2.value=='Drilling'){
                setAkkiCs(35)
              }
              else if(dd2.value=='StraightTurning Rough' && rv.value==1){
                setAkkiCs(120)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==1){
                setAkkiCs(145)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==1){
                setAkkiCs(120)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==1){
                setAkkiCs(145)
              }
              else if(dd2.value=='Threading' && rv.value==1){
                setAkkiCs(60)
              } 
              else if(dd2.value=='Knurling' && rv.value==1){
                setAkkiCs(60)
              } 
              else if(dd2.value=='PartingOff' && rv.value==1){
                setAkkiCs(66)
              }
      }
      else if(dd.value=='Monel Metal'){
              if(dd2.value=='StraightTurning Rough' && rv.value==0){
                setAkkiCs(20)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==0){
                setAkkiCs(25)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==0){
                setAkkiCs(20)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==0){
                setAkkiCs(25)
              }
              else if(dd2.value=='Threading' && rv.value==0){
                setAkkiCs(7)
              } 
              else if(dd2.value=='Knurling' && rv.value==0){
                setAkkiCs(10)
              } 
              else if(dd2.value=='PartingOff' && rv.value==0){
                setAkkiCs(15)
              } 
              else if(dd2.value=='Drilling'){
                setAkkiCs(13)
              }
              else if(dd2.value=='StraightTurning Rough' && rv.value==1){
                setAkkiCs(55)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==1){
                setAkkiCs(70)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==1){
                setAkkiCs(55)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==1){
                setAkkiCs(70)
              }
              else if(dd2.value=='Threading' && rv.value==1){
                setAkkiCs(21)
              } 
              else if(dd2.value=='Knurling' && rv.value==1){
                setAkkiCs(27.5)
              } 
              else if(dd2.value=='PartingOff' && rv.value==1){
                setAkkiCs(30.25)
              }
      }
      else if(dd.value=='Nickel'){
              if(dd2.value=='StraightTurning Rough' && rv.value==0){
                setAkkiCs(18)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==0){
                setAkkiCs(23)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==0){
                setAkkiCs(18)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==0){
                setAkkiCs(23)
              }
              else if(dd2.value=='Threading' && rv.value==0){
                setAkkiCs(7)
              } 
              else if(dd2.value=='Knurling' && rv.value==0){
                setAkkiCs(9)
              } 
              else if(dd2.value=='PartingOff' && rv.value==0){
                setAkkiCs(13.8)
              } 
              else if(dd2.value=='Drilling'){
                setAkkiCs(13)
              }
              else if(dd2.value=='StraightTurning Rough' && rv.value==1){
                setAkkiCs(50)
              }
              else if(dd2.value=='StraightTurning Finish' && rv.value==1){
                setAkkiCs(65)
              }
              else if(dd2.value=='TaperTurning Rough' && rv.value==1){
                setAkkiCs(50)
              }
              else if(dd2.value=='TaperTurning Finish' && rv.value==1){
                setAkkiCs(65)
              }
              else if(dd2.value=='Threading' && rv.value==1){
                setAkkiCs(18)
              } 
              else if(dd2.value=='Knurling' && rv.value==1){
                setAkkiCs(25)
              } 
              else if(dd2.value=='PartingOff' && rv.value==1){
                setAkkiCs(27.5)
              }
      }
      else{
        setAkkiCs('Enter Valid arguments')
      }
    
  }, [rv,dd,dd2])

  useEffect(() => {
    var n= ((cs*1000)/(3.14*diameter)).toFixed(2);
    setAkkispindalSpeed(n)
  }, [cs,diameter])

  const [final, setAkkiFinalAnswer] = React.useState(0);

  const onPressLearnMore = () => {

    setAkkiFinalAnswer(text + cuttingSpeed)

  }

  const backgroundStyle = {
    margin:5,
  };

  return (
   
    <SafeAreaView style={{height: 'auto',padding:10, margin:10}}>
       <ScrollView >
              <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

              <Text style={{color: 'blue',fontSize: 25, padding:10}}>{`Spindle Speed Calculator`}</Text>

              {/* <TextInput
                style={styles.input}
                onChangeText={onCuttingSpeed}
                value={cuttingSpeed} />
              <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />

              <Text>{final}</Text> */}

              <Text style={{marginTop:10}}>Select Work Piece Material</Text>
              <DropDownPicker zIndex={5000} zIndexInverse={6000}

                      // dropDownStyle={{
                      //   backgroundColor: Colors.black, borderBottomLeftRadius: 20, borderBottomRightRadius: 20
                      // }}
              
                      style={{ backgroundColor: Colors.white, paddingVertical: 10 }}
                      items={[
                        { label: 'Mild Steel', value: 'Mild Steel', },
                        { label: 'Cast Steel', value: 'Cast Steel', },
                        { label: 'Grey Cast Iron', value: 'Grey Cast Iron', },
                        { label: 'Aluminium', value: 'Aluminium', },
                        { label: 'Brass', value: 'Brass', },
                        { label: 'Phosphor Bronze', value: 'Phosphor Bronze', },
                        { label: 'Copper', value: 'Copper', },
                        { label: 'Bronze', value: 'Bronze', },
                        { label: 'Monel Metal', value: 'Monel Metal', },
                        { label: 'Nickel', value: 'Nickel', },
                      ]}
              
                      containerStyle={{ height: 40 }}
                      style={{ backgroundColor: '#fafafa' }}
                      itemStyle={{
                        justifyContent: 'flex-start'
                      }}
                      dropDownStyle={{ backgroundColor: '#fafafa' }}
                      onChangeItem={item => {
                        setAkkiDD(item)
                      }}
                    ></DropDownPicker>

                    <Text style={{marginTop:10,  
                      zIndex: 8,}}>Select Tool Material</Text>

                    <RadioForm 
                      radio_props={radio_props}
                      initial={0}
                      onPress={(value) => { setAkkiRv({ value: value }) }}
                    />

                    <Text style={{marginTop:10}}>Select Tyoe Of operation</Text>
                    {
                      visible1 ? null :
                        <DropDownPicker zIndex={5000} zIndexInverse={6000}
                          items={[
                            { label: 'StraightTurning Rough / Facing / Chamfiring', value: 'StraightTurning Rough', },
                            { label: 'StraightTurning Finish', value: 'StraightTurning Finish', },
                            { label: 'TaperTurning Rough', value: 'TaperTurning Rough', },
                            { label: 'TaperTurning Finish', value: 'TaperTurning Finish', },
                            { label: 'Threading', value: 'Threading', },
                            { label: 'Knurling', value: 'Knurling', },
                            { label: 'PartingOff', value: 'PartingOff', },
                            { label: 'Drilling', value: 'Drilling', },
                          ]}
                          containerStyle={{ height: 40 }}
                          style={{ backgroundColor: '#fafafa' }}
                          itemStyle={{
                            justifyContent: 'flex-start',
                            backgroundColor: '#fff',

                            //              backgroundColor:Colors.black
                          }}
                          dropDownStyle={{ backgroundColor: '#fafafa' }}
                          onChangeItem={item => {
                            setAkkiDD2(item)
                          }}
                        />
                    }

                    <Text > {`Cutting speed is ${cs}`} </Text>
                    <Text>{'Enter Diameter'}</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={onChangeDiameter}
                      value={diameter}
                    />

                    <Text> {`spindal speed is ${spindalSpeed} `} </Text>
                <Text style={{color: 'red', padding:10}}>{`NOTE: Nearest available speed should be selected...`}</Text>
                    
                    {
                      hideComponent ? <View>

                      <Text style={{color: 'blue',fontSize: 20, padding:10}}>{`Machining time Calculator`}</Text>

                        <Text> {`Length of W.P. in mm`} </Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={setAkkiLength1}
                          value={length1}
                        />
                        <Text> {`Approach Length in mm`} </Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={setAkkiLength2}
                          value={length2}
                        />
                        <Text> {`Over Travel in mm`} </Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={setAkkiLength3}
                          value={length3}
                        />

                        <Text> {`Total length of Workpiece in mm  ${lengthAns} `} </Text>
                        
                        <Text> {`Diameter of W.P. before machining ,in mm`} </Text> 
                        <TextInput
                          style={styles.input}
                          onChangeText={setAkkiD1}
                          value={d1}
                        />
                        <Text> {`Diameter of machined W.P. ,in mm`} </Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={setAkkiD2}
                          value={d2}
                        />
                    
                        <Text> {`Depth of Cut in mm`} </Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={setAkkiDepthCut}
                          value={depthCut}
                        />
                        <Text> {`Feed of the tool in mm/revolution`} </Text>
                        <TextInput
                          style={styles.input}
                          onChangeText={setAkkiFeedRate}
                          value={feedRate}
                        />

                        <Text> {`spindal speed is ${spindalSpeed} `} </Text>
                        <Text> {`Machining allowance  ${machineAllowance} `} </Text>
                        <Text> {`No of passes  ${noOfPass}`} </Text>
                        <Text> {`Totla machining time is :  ${totalMachineTime} `} </Text>

                      </View> : null
                    }
             </ScrollView>
          </SafeAreaView>
        
        );
      };

      const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
        },

        sectionContainer: {
          marginTop: 32,
          paddingHorizontal: 24,
        },
        sectionTitle: {
          fontSize: 24,
          fontWeight: '600',
        },
        sectionDescription: {
          marginTop: 8,
          fontSize: 18,
          fontWeight: '400',
        },
        highlight: {
          fontWeight: '700',
        },
      });

      export default App;