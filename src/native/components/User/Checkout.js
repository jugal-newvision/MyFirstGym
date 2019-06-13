import React from 'react';
import { View, StyleSheet , Image } from 'react-native';
import {Container, Content, List, ListItem, Body, Left, Text, Button} from 'native-base';
import Spacer from '../UI/Spacer';

const BuyServices = ({ member, logout }) => (
   <Container>
     <Content  >
     <Spacer size={40} />
     <View>
        <Spacer size={5} />
            <View style = {[styles.listItemsDesign]}>
                <View style={styles.serviceImage} ><Image  style = {{width:6, height:6}} source = {require('../../../images/Ellipse.png')} /></View>
                <View style={styles.serviceName}><Text style={styles.textFont}>1 Laser Tag Session</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.priceFont}>AED 100.00</Text></View>
            </View>
            <View style = {[styles.listItemsDesign1]}>
                <View style={[styles.serviceName, styles.marginTopData]}><Text style={styles.textFont}>ay 10 days(3 Hours)</Text></View>
                <View style={[styles.serviceMoney, styles.marginTopData]}><Text style={styles.priceFont}>AED 800.00</Text></View>
                <View style={{flex:0.2, backgroundColor:'#EB4242', textAlign:'center'}} ><Image  style = {{width:20, height:30, alignSelf:'center', marginTop:10, marginBottom:10, backgroundColor:'transparent'}} source = {require('../../../images/deleteButton.png')} /></View>
            </View>
            <View style = {[styles.listItemsDesign]}>
                <View style={styles.serviceImage} ><Image  style = {{width:6, height:6}} source = {require('../../../images/Ellipse.png')} /></View>
                <View style={styles.serviceName}><Text style={styles.textFont}>Late Stay 20 days(3 Hours)</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.priceFont}>AED 1,200.00</Text></View>
            </View>
        <Spacer size={15} />
        <View style ={styles.headingView} >
              <Text style={styles.textHeading} >Buy More Services</Text>
              <View style = {{width:20, height:20, borderRadius:10, backgroundColor:'#0099EF', marginLeft:10, position:'absolute', right:'23%'}}><Image  style = {{width:9.33, height:9.33,  alignSelf:'center', marginTop:5 }} source = {require('../../../images/plusimage.png')} /></View>
        </View>
        <Spacer size={15} />
        <View style ={styles.listItemsDesign} >
            <View style = {{flex:0.4}}><Text style={styles.textFont}>Promo Code</Text></View>
            <View style= {styles.applyView}><Text style={styles.textApply}>APPLY</Text></View>
        </View>
        <Spacer size={5} />
        <View style ={styles.listItemsDesign} >
            <View><Text style={{fontSize:17, lineHeight:22, color:'rgba(0, 0, 0, 0.87)', fontWeight:'bold'}}>Bill Details</Text></View>
        </View>
        <View style = {[styles.billDetails]}>
                <View style={styles.serviceName}><Text style={styles.textFont}>Subtotal</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.textFont}>AED 2,130.0</Text></View>
            </View>
            <View style = {[styles.billDetails]}>
                <View style={styles.serviceName}><Text style={styles.textFont}>Tax</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.textFont}>AED 65.00</Text></View>
            </View>
            <View style = {[styles.billDetails]}>
                <View style={styles.serviceName}><Text style={styles.textFont}>Applied Credit</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.textFont}>AED 0.00</Text></View>
            </View>
            <Spacer size={60} />
            <View style = {[styles.listItemsDesign]}>
                <View style={styles.Pay}><Text style={{fontSize:17, lineHeight:22, color:'rgba(0, 0, 0, 0.87)', fontWeight:'bold'}}>To Pay</Text></View>
                <View style={styles.payMoney}><Text style={{fontSize:17, lineHeight:22, color:'rgba(0, 0, 0, 0.87)', fontWeight:'bold'}}>AED 4,611.50</Text></View>
            </View>
            <Spacer size={40} />
            <View style={{width:'90%', alignContent:'center', alignSelf:'center'}}>
                <Button block style ={styles.buttonStyle}>
                  <Text style={styles.loginButtonText}>Select Payment</Text>
                </Button>
              </View>
            <Spacer size={40} />
     </View>
     </Content>
   </Container>

);
const styles = StyleSheet.create({
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
    fontSize:17,
    lineHeight:22,
    alignContent:'center',
    alignSelf:'center',
    margin:0,
    position:'relative',
    color:'rgba(0, 0, 0, 0.54)'
  },
  listItemsDesign:{
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'#ffffff',
    flexWrap:'wrap',
    flexDirection:'row',
    paddingTop:15,
    paddingBottom:15
  },
  listItemsDesign1:{
    backgroundColor:'#ffffff',
    flexWrap:'wrap',
    flexDirection:'row',
  },
  billDetails:{
    paddingLeft:15,
    paddingRight:15,
    backgroundColor:'#ffffff',
    flexWrap:'wrap',
    flexDirection:'row',
    paddingTop:7,
    paddingBottom:7
  },
  listItemsDesignAction:{backgroundColor:'#0099EF'},
  serviceImage:{flex:0.05,paddingTop:8},
  serviceName:{flex:0.65, alignItems:'flex-start',},
  serviceMoney:{flex:0.3, textAlign:'right', alignItems:'flex-end', fontSize:13},
  Pay:{flex:0.5, alignItems:'flex-start',},
  payMoney:{flex:0.5, textAlign:'right', alignItems:'flex-end', fontSize:13},
  textFont:{
    fontSize:15
  },
  priceFont:{
    fontSize:13
  },
  cartButton:{
    alignItems:'center',
    width:58,
    textAlign:'center', 
    height:58, 
    borderRadius:29,
    backgroundColor:'#FFFFFF',
    color:'#ffffff', 
    position:'absolute', 
    alignSelf:'flex-end', 
    bottom:10, 
    right:10
  },
  imageStyle:{
    marginLeft:12 ,
    alignSelf:'center', 
    width:35, 
    height:35, 
    borderRadius:10
  },
  textApply:{
      fontSize:11,
      alignItems:'flex-end',
      lineHeight:13,
      textAlign:'center',
      color:'#C4C4C4',
      borderWidth:1,
      borderColor:'#E8E8E8',
      paddingTop:7,
      paddingBottom:7,
      paddingLeft:10,
      paddingRight:10,
      borderRadius:16
    },
    applyView:{
      textAlign:'right',
      alignItems:'flex-end',
      alignContent:'flex-end',
      alignSelf:'flex-end',
      flex:0.6,
    },
    buttonStyle:{
      backgroundColor:'#25AE88',
      borderRadius:50,
      shadowColor: 'rgb(0, 0, 0)',
      shadowOpacity: 0.25,
      shadowOffset: { width: 2, height: 4 },
      shadowRadius: 2,
      elevation: 1,
    },
    loginButtonText:{
      color:'#FFFFFF',
      fontSize:17,
      lineHeight:22
    },
    marginTopData:{
      marginTop:15,
      marginRight:10
    },
});
export default BuyServices;
