import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, TouchableHighlight, ImageBackground } from 'react-native';
import {Container, Content,Text, Button} from 'native-base';
import Spacer from '../UI/Spacer';
import { Actions } from 'react-native-router-flux';

const CreditCard = ({ member, logout }) => (
  <Container>
    <View style ={{flex:1, textAlign:'center'}}>
    <Content>
      <View>
        <View style = {styles.rootView}>
        <TouchableHighlight onPress={Actions.updatecreditcard}>
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
          </TouchableHighlight>
        </View>
        
        <TouchableHighlight  style = {styles.addNewVardView} onPress={Actions.newcreditcardadd}>
          <View style={styles.content} >
            <Image style={styles.settingcardIcon}  source = {require('../../../images/buy-services.png')}/>
          </View>
        </TouchableHighlight>
        <View style = {styles.buttonView}>
          <Button block style ={styles.buttonStyleTransparent}>
              <Text style={styles.transparentButtonText}> Update Card </Text>
          </Button>
        </View>
      </View>
    </Content>
    </View>
  </Container>
);

const styles = StyleSheet.create({
rootView:{
  minHeight:200,
    borderRadius:12,
    position:'relative',
    width:'90%',
    alignSelf:'center',
    marginTop:50,
    color:'#ffffff',
    paddingBottom:15,
},
  buttonView:{
  minHeight:30,
    position:'relative',
    width:'90%',
    alignSelf:'center',
    marginTop:100,
    marginBottom:15,
},
addNewVardView:{
  backgroundColor:'#cccccc',
  minHeight:200,
  borderRadius:12,
  position:'relative',
  width:'90%',
  alignSelf:'center',
  color:'#ffffff',
  paddingBottom:15,
  justifyContent:'center',
  alignItems: 'center',
},
profileName:{
    fontSize:22,
    textAlign:'left',
    color:'#ffffff'
},  
cardColor:{
    color:'#ddd9d9',
    fontStyle: 'italic'
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
balanceBoldText:{
    fontSize:26,
    fontWeight:'bold',
    textAlign:'right',
    textTransform: 'uppercase',
    color:'#ffffff'
  },
  settingcardIcon:{
    width:60,
    height:60,
    zIndex:99,
    marginTop:70
  },
  content:{
    textAlign:'center',
    alignItems:'center',
    margin:0,
    flex:1,
    
},
buttonStyleTransparent:{
  backgroundColor:'#cccccc',
  borderRadius:20,
},
transparentButtonText:{
  color:'#ffffff'
},
});

CreditCard.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

CreditCard.defaultProps = {
  member: {},
};

export default CreditCard;
