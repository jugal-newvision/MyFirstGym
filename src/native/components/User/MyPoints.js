import React from 'react';
import { View, StyleSheet , Image } from 'react-native';
import {Container, Content, List, ListItem, Body, Left, Text, Button} from 'native-base';
import Spacer from '../UI/Spacer';
const MyPoints = ({ member, logout }) => (
   <Container>
     <Content  >
     <Spacer size={40} />
     <View style ={{flexDirection:'row', flexWrap:'wrap', flex:1, marginLeft:25}}><Text>Today, 07 Jun 2019</Text></View>
          <View style ={{flexDirection:'row', flexWrap:'wrap', flex:1, marginTop:15, marginBottom:15}}>
              <View style = {{flex:0.3, alignContent:'center'}}>
                <Image style={styles.settingcardIcon}  source = {require('../../../images/points-1.png')}/>
              </View>
              <View style = {{flex:0.45}}>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>points Added from Client/Source Name</Text>
                    <View style={{flexDirection:'row', flexWrap:'wrap', flex:1}}>
                      <Text style ={{fontSize:8, flex:0.3}} >10:54 pm</Text>
                      <Text style ={{fontSize:8, flex:0.7, textAlign:'right'}} >Closing Point 200</Text>
                    </View>
              </View>
              <View style = {{flex:0.25}}>
                      <Text style={{marginLeft:0,marginRight:0,fontSize:16, color:'green', textAlign:'center', fontWeight:'bold', justifyContent:'center',textAlignVertical:'center',  marginTop:15}}>+20 points</Text>
              </View>
          </View>
          <View style ={{flexDirection:'row', flexWrap:'wrap', flex:1, marginLeft:25}}><Text>06 Jun 2019</Text></View>
          <View style ={{flexDirection:'row', flexWrap:'wrap', flex:1, borderBottomColor:'#cccccc', borderBottomWidth:1, marginTop:15, paddingBottom:15}}>
              <View style = {{flex:0.3, alignContent:'center'}}>
                <Image style={styles.settingcardIcon}  source = {require('../../../images/points-2.png')}/>
              </View>
              <View style = {{flex:0.45}}>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>points Added from Client/Source Name</Text>
                    <View style={{flexDirection:'row', flexWrap:'wrap', flex:1}}>
                      <Text style ={{fontSize:8, flex:0.3}} >10:54 pm</Text>
                      <Text style ={{fontSize:8, flex:0.7, textAlign:'right'}} >Closing Point 180</Text>
                    </View>
              </View>
              <View style = {{flex:0.25}}>
                      <Text style={{marginLeft:0,marginRight:0,fontSize:16, color:'green', textAlign:'center', fontWeight:'bold', justifyContent:'center',textAlignVertical:'center',  marginTop:15}}>+20 points</Text>
              </View>
          </View>
          <View style ={{flexDirection:'row', flexWrap:'wrap', flex:1,borderBottomColor:'#cccccc', borderBottomWidth:1, paddingTop:15, paddingBottom:15, marginBottom:15}}>
              <View style = {{flex:0.3, alignContent:'center'}}>
                <Image style={styles.settingcardIcon}  source = {require('../../../images/points-2.png')}/>
              </View>
              <View style = {{flex:0.45}}>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>points Added from Client/Services Name</Text>
                    <View style={{flexDirection:'row', flexWrap:'wrap', flex:1}}>
                      <Text style ={{fontSize:8, flex:0.3}} >10:54 pm</Text>
                      <Text style ={{fontSize:8, flex:0.7, textAlign:'right'}} >Closing Point 180</Text>
                    </View>
              </View>
              <View style = {{flex:0.25}}>
                      <Text style={{marginLeft:0,marginRight:0,fontSize:16, color:'#000000', textAlign:'center', fontWeight:'bold', justifyContent:'center',textAlignVertical:'center', marginTop:15}}>-20 points</Text>
              </View>
          </View>
     
     </Content>
   </Container>

);
const styles = StyleSheet.create({
settingcardIcon:{
  width:50,
  height:50,
  zIndex:99,
  alignItems:'center',
  alignSelf:'center'
},
});
export default MyPoints;
