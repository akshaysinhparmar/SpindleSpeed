/**
 * @author [Nisarg Doshi]
 * @email [nisarg.d@prodcutivet.com]
 * @create date 2020-10-27 18:24:48
 * @modify date 2020-10-27 18:24:48
 * @desc [description]
 */
/**
 */
import React from 'react';
import {Image} from 'react-native';
import styles from '../image/Style'

const image = ({imageSource,imageStyle}) => {
  return (
      <Image source={imageSource} style={[imageStyle,styles.container]}/>
    );
  };
  export default React.memo(image)
  
