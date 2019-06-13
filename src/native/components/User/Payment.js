import React from 'react';
import { View, StyleSheet , Image, TouchableHighlight, ImageBackground } from 'react-native';
import {Container, Content, List, ListItem, Body, Left, Text, Button} from 'native-base';
import Spacer from '../UI/Spacer';
import Slideshow from 'react-native-slideshow';
import { Actions } from 'react-native-router-flux';
import Hr from '../UI/hr1.js';

class Payment extends React.Component {
  constructor(props) {
    super(props); 
  }
    render() {
      return (
   <Container>
     <Content  >
     <Spacer size={40} />
     <View>
        <View style ={styles.headingView} >
            <Text style={styles.smallFont} >Total amount to be paid</Text>
            <Spacer size={10} />
            <Text style={styles.textHeading} >AED 999.00</Text>
        </View>
        <Spacer size={30} />
        <View style ={styles.headingView} >
            <Text style={styles.smallFont} >SAVED CARDS</Text>
        </View>
        <Spacer size={30} />
          <View style = {styles.rootView}>
            <View style={{flex:0.85, marginRight:15, }}>
              <ImageBackground source={require('../../../images/creditcard.png')} style = {{width:'100%',minHeight:200, flexGrow:1,borderRadius:12}} resizeMode="stretch">
                  <Spacer size={110} />
                  <View style ={{marginLeft:15, flexDirection:'row',flexWrap:'wrap' , flex:1}}>
                  <View style ={{flexDirection:'row' , flex:1, position:'absolute'}}>
                      <Text style ={[styles.ExpdateText]} >Exp 06/23</Text>
                  </View>
                    <Text style ={[styles.cardNumberText]} >.... .... ....</Text>
                    <Text style ={[styles.balanceText]} >0212</Text>
                  </View>
                </ImageBackground>
            </View>
            <View style={{flex:0.15, marginRight:0, width:60}}>
              <Image  style = {{borderBottomLeftRadius:6, borderTopLeftRadius:6, height:200, width:60}} source = {require('../../../images/atm.png')} resizeMode='stretch' />
            </View>
              
          </View>
          <Spacer size={30} />
            <Hr text="OTHER PAYMENT MODES" style = {{textTransform:'uppercase'}} />
        <Spacer size={30} />
        <TouchableHighlight onPress={Actions.paymentcard} underlayColor="#cccccc">
        <View style={styles.listItemsDesign}>
            <View style={styles.serviceImage} ><Image  style = {{width:20, height:16}} source = {require('../../../images/dc_card.png')} /></View>
            <View style={styles.serviceName}><Text style={styles.textFont}>Debit/Credit Card</Text></View>
            <View style={styles.serviceMoney}><Image  style = {{width:8, height:10}} source = {require('../../../images/arrow.png')} /></View>
        </View>
        </TouchableHighlight>
        <View style = {[styles.listItemsDesign]}>
            <View style={styles.serviceImage} ><Image  style = {{width:20, height:16}} source = {require('../../../images/net_banking.png')} /></View>
            <View style={styles.serviceName}><Text style={styles.textFont}>Net Banking</Text></View>
            <View style={styles.serviceMoney}><Image  style = {{width:8, height:10}} source = {require('../../../images/arrow.png')} /></View>
        </View>
        <View style = {[styles.listItemsDesign]}>
            <View style={styles.serviceImage} ><Image  style = {{width:20, height:16}} source = {require('../../../images/paypal.png')} /></View>
            <View style={styles.serviceName}><Text style={styles.textFont}>Paypal</Text></View>
            <View style={styles.serviceMoney}><Image  style = {{width:8, height:10}} source = {require('../../../images/arrow.png')} /></View>
        </View>
     </View>
     </Content>
   </Container>

);
}
}
const styles = StyleSheet.create({


  rootView:{
      borderRadius:12,
      position:'relative',
      alignSelf:'center',
      color:'#ffffff',
      paddingBottom:15,
      flex:1,
      flexDirection:'row',
      flexWrap:'wrap',
      marginLeft:15
  },
  ExpdateText:{
    fontSize:18,
    textAlign:'right',
    color:'#ffffff',
  },
  balanceText:{
    fontSize:18,
    textAlign:'right',
    color:'#ffffff',
    paddingTop:24
  },
  cardNumberText:{
    fontSize:37,
    textAlign:'right',
    color:'#ffffff',
    marginRight:10,
    marginBottom:0
  },
  headingView:{
    flexDirection:'row', 
    flexWrap:'wrap', 
    textAlign:'center',
    alignContent:'center',
    alignItems:'center',
    margin:0,
    flex:1,
  },
  textHeading:{
    width:'100%',
    textAlign:'center',
    fontSize:24,
    lineHeight:29,
    color:'rgba(0, 0, 0, 0.87)',
  },
  smallFont:{
    fontSize:12,
    lineHeight:14,
    width:'100%',
    textAlign:'center',
    color:'#666666',
  },
  listItemsDesign:{
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'#ffffff',
    flexWrap:'wrap',
    flexDirection:'row',
    paddingTop:15,
    paddingBottom:15,
    borderColor:'#D1D1D1',
  },
  serviceImage:{flex:0.1,paddingTop:4, marginRight:10},
  serviceName:{flex:0.8, alignItems:'flex-start',},
  serviceMoney:{flex:0.1, textAlign:'right', alignItems:'flex-end', fontSize:13, marginLeft:10, paddingTop:8},
  marginTopData:{
    marginTop:15,
    marginRight:10
  },
  textFont:{
    fontSize:16,
    lineHeight:20,
    color:'rgba(0, 0, 0, 0.87)',
  },
  imgStyle:{
    borderRadius:15,
    width:'100%', 
    position: 'relative',
    minHeight:200,
  },
});
export default Payment;
