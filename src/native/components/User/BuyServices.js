import React from 'react';
import { View, StyleSheet , Image } from 'react-native';
import {Container, Content, List, ListItem, Body, Left, Text, Button} from 'native-base';
import Spacer from '../UI/Spacer';

const BuyServices = ({ member, logout }) => (
   <Container>
     <Content  >
     <Spacer size={40} />
     <View>
        <View style ={styles.headingView} >
            <Text style={styles.textHeading} >ADVENTURE TIME</Text>
        </View>
        <Spacer size={5} />
        <View style = {styles.serviceContent}>
            <View style = {[styles.listItemsDesign, styles.listItemsDesignAction]}>
                <View style={styles.serviceName}><Text style={styles.textFont}>1 Laser Tag Session</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.priceFont}>AED 100.00</Text></View>
            </View>
            <View style = {[styles.listItemsDesign]}>
                <View style={styles.count}><Text>1</Text></View>
                <View style={styles.serviceName}><Text style={styles.textFont}>Laser Tag Session</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.priceFont}>AED 100.00</Text></View>
            </View>
            <View style = {[styles.listItemsDesign]}>
                <View style={styles.serviceName}><Text style={styles.textFont}>4 Laser Tag Session</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.priceFont}>AED 300.00</Text></View>
            </View>
        </View>
        <Spacer size={15} />
        <View style ={styles.headingView} >
            <Text style={styles.textHeading} >CAMPS</Text>
        </View>
        <Spacer size={5} />
        <View style = {styles.serviceContent}>
            <View style = {[styles.listItemsDesign]}>
                <View style={styles.serviceName}><Text style={styles.textFont}>15 Days Camp</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.priceFont}>AED 2,430.00</Text></View>
            </View>
            <View style = {[styles.listItemsDesign, styles.listItemsDesignAction]}>
                <View style={styles.serviceName}><Text style={styles.textFont}>Late Stay 10 days(3 Hours)</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.priceFont}>AED 800.00</Text></View>
            </View>
            <View style = {[styles.listItemsDesign, styles.listItemsDesignAction]}>
                <View style={styles.serviceName}><Text style={styles.textFont}>Late Stay 20 days(3 Hours)</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.priceFont}>AED 1,200.00</Text></View>
            </View>
        </View>
        <Spacer size={15} />
        <View style ={styles.headingView} >
            <Text style={styles.textHeading} >PARTY</Text>
        </View>
        <Spacer size={5} />
        <View style = {styles.serviceContent}>
            <View style = {[styles.listItemsDesign]}>
                <View style={styles.serviceName}><Text style={styles.textFont}>Balloon Arch 8ft</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.priceFont}>AED 1,000.00</Text></View>
            </View>
            <View style = {[styles.listItemsDesign]}>
                <View style={styles.serviceName}><Text style={styles.textFont}>Birthday Meeting</Text></View>
                <View style={styles.serviceMoney}><Text style={styles.priceFont}>AED 0.00</Text></View>
            </View>
        </View>
        <Spacer size={15} />
        <Spacer size={5} />
        <View style ={styles.headingView} >
            <Text style={styles.textHeading} >PRIVATE LESSON/TRAINING</Text>
        </View>

        <Button style = {styles.cartButton}>
            <Image  style = {styles.imageStyle} source = {require('../../../images/cart.png')} />
        </Button>
     </View>
     </Content>
   </Container>

);
const styles = StyleSheet.create({
  headingView:{
    height:24,
    backgroundColor:'#ffffff',
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
    fontSize:15,
    lineHeight:20,
    alignContent:'center',
    alignSelf:'center',
    margin:0,
    position:'relative',
  },
  serviceContent:{
    alignSelf:'center',
    flex:1,
    width:'90%',
  },
  listItemsDesign:{
    paddingLeft:5,
    paddingRight:5,
    backgroundColor:'#ffffff',
    color:'#ffffff',
    flexWrap:'wrap',
    flexDirection:'row',
    paddingTop:20,
    paddingBottom:20
  },
  listItemsDesignAction:{backgroundColor:'#0099EF'},
  serviceName:{flex:0.7, alignItems:'flex-start',},
  serviceMoney:{flex:0.3, textAlign:'right', alignItems:'flex-end', fontSize:13},
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
    borderRadius:10},
});
export default BuyServices;
