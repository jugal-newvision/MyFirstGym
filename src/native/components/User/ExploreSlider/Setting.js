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
        borderRadius:4
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
                {
                  (className==='location')?
                  (<Text style={styles.location}>{title}</Text>)
                  : (className==='classes')?
                  (<View style={styles.classes}><Text style={styles.classsesColor}>{title}</Text></View>)
                  : (className==='camps')? 
                    (<View style={styles.classes}><Text style={styles.classsesColor}>{title}</Text></View>)
                  :(<Text style={styles.location}>{className}</Text>)
                }
        
      </ImageBackground>
    </View>
  </View>
);
const styles = StyleSheet.create({

  location:{ color: 'white', position:'absolute', bottom:10, left:10, fontSize:16, lineHeight:21},
  classes:{ color: 'white', position:'absolute', bottom:0, left:0, backgroundColor:'rgba(0, 0, 0, 0.5)',height:40, width:'100%', justifyContent:'center', textAlign:'center', },
  classsesColor:{fontSize:11, lineHeight:12, color:'#ffffff', alignItems:'center', justifyContent:'center',alignContent:'center', marginLeft:30}
});
export default Setting;
