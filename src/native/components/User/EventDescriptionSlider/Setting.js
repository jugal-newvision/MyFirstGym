import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'; 
import { sliderItemWidth, sliderItemHorizontalMargin, slideWidth} from './Styles_slider';



const Setting = ({ title , path, className}) => (

  <View
    style={{
      width: sliderItemWidth,
      paddingHorizontal: sliderItemHorizontalMargin,
      backgroundColor: '#ffffff',
    }}
  >
    <View
      style={{
        width: slideWidth,
        flex: 1,
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
                  borderRadius:4,
                  minHeight:44
                }}
              >
          </Image>
          {(title) ?
            (
                <View style = {{textAlign:'left'}}>
                    <Text style={styles.classTextName}>{title}</Text>
                    <Text  style={styles.classTextName}>({className})</Text>
                </View>
            ):
             ( <View><Text></Text></View>)
          }
    </View>
  </View>
);
const styles = StyleSheet.create({
  classTextName:{
      fontSize:15,
      lineHeight:20,
      color:'rgba(0, 0, 0, 0.87)',
      textAlign:'left',
      alignSelf:'flex-start',
      justifyContent:'flex-start'
  },  
});
export default Setting;

