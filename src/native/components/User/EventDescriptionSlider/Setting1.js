import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; 
import { classsliderItemWidth, classsliderItemHorizontalMargin, classslideWidth} from './Styles_slider1';

const Setting = ({ title , path, className}) => (

  <View
    style={{
      width: classsliderItemWidth,
      paddingHorizontal: classsliderItemHorizontalMargin,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    }}
  >
    <View
      style={{
        width: classslideWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:4
      }}
    >
             <Image
               source={path}
                style={{
                  width: '100%',
                  position: 'relative', // because it's parent
                  textAlign:'center',
                  alignContent:'center',
                  alignItems:'center',
                  borderRadius:4
                }}
              >
          </Image>
          {(title) ?
            (
                <View>
                    <Text style={styles.className}>{title}</Text>
                    <Text  style={styles.classTextName}>({className})</Text>
                </View>
            ):
             ( <View><Text></Text></View>)
          }
    </View>
  </View>
);
const styles = StyleSheet.create({
  className:{
      fontSize:15,
      lineHeight:20,
      color:'rgba(0, 0, 0, 0.87)',
  },  
  classTextName:{
    fontSize:13,
    lineHeight:16,
    color:'#727272',
},  
});
export default Setting;

