import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native'; 
import { sliderItemWidth, sliderItemHorizontalMargin, slideWidth } from './Styles_slider';



const Setting = ({ title , path, className}) => (

  <View
    style={{
      width: sliderItemWidth,
      height: 150,
      paddingHorizontal: sliderItemHorizontalMargin,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    }}
  >
    <View
      style={{
        width: slideWidth,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'purple',
        borderRadius:4,
        borderWidth:1,
        borderColor:'#ffffff',
        marginRight:0
      }}
    >
      <ImageBackground
                source={path}
                style={{
                  height: 150,
                  width: '100%',
                  position: 'relative', // because it's parent
                  textAlign:'center',
                  alignContent:'center',
                  alignItems:'center',
                  borderRadius:4
                }}
              >
              <Text style={styles.location}>{title}</Text>
      </ImageBackground>
    </View>
  </View>
);
const styles = StyleSheet.create({
  location:{ color: 'white', position:'absolute', bottom:15, left:15, fontSize:20, lineHeight:25, fontFamily:'SFProDisplay_Regular'},
});
export default Setting;
