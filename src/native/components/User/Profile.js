import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import {
  Container, Content, List, ListItem, Body, Left, Text, Button
} from 'native-base';
import { Icon, TouchableOpacity,  } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import Header from '../UI/Header';

const Profile = ({ member, logout }) => (
  <Container>
    <View style ={{flex:1, textAlign:'center'}}>
    <Content>
         {/* {(member && member.email) */}
         {(1)
          ? (
            <View style ={{marginBottom:50}}>
              <View style = {{ backgroundColor:'#ffffff', position:'relative',width:'90%', alignSelf:'center', marginTop:70}}>
                <Image  style = {styles.profileImage} source = {require('../../../images/image-2.jpg')} />
                <View style ={{marginTop:60, flexDirection:'row', flexWrap:'wrap', textAlign:'center', alignSelf:'center'}}>
                  <Text style ={styles.profileName}>Janet Walker</Text>
                  <TouchableHighlight onPress={Actions.creditcard} style={styles.cardIcon} underlayColor="white">
                    <View>
                        <Image style={styles.cardIcon}  source = {require('../../../images/card.png')}/>
                    </View>
                  </TouchableHighlight>
                </View>

                <View style ={{alignSelf:'center', textAlign:'center'}}>
                  <Button style = {styles.buttonStyle}><Text style={styles.buttonText}>Active</Text></Button>
                </View>
                <View style={{flexDirection:'row',flex:1}}>
                  <View style={[styles.flexColumn, styles.bordercolumn]}>
                    <Text style = {styles.balanceText}>Account Balance</Text>
                    <Text style={styles.balanceBoldText}>AED 0.00</Text>
                  </View>
                  <View style={styles.flexColumn}>
                    <Text style = {styles.balanceText}>Unpaid Classes</Text>
                    <Text style={styles.balanceBoldText}>NONE</Text>
                  </View>
                </View>
            </View>
            <View style = {{ position:'relative',width:'90%', alignSelf:'center', marginTop:0}}>
              <View style={{flexDirection:'row',flex:1, marginTop:10, marginBottom:0, marginRight:10, marginLeft:10}}>
              <TouchableHighlight style={styles.viewColumnStyle} underlayColor="white">
                  <View>
                    <Image style={styles.cardIconImages}  source = {require('../../../images/my-classes.png')}/>
                    <Text style={styles.balanceText} >My Classes</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.viewColumnStyle} underlayColor="white">
                  <View>
                    <Image style={styles.cardIconImages}  source = {require('../../../images/my-waitlist.png')}/>
                    <Text style={styles.balanceText}>My Waitlists</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.viewColumnStyle} underlayColor="white">
                  <View>
                    <Image style={styles.cardIconImages}  source = {require('../../../images/my-attendance.png')}/>
                    <Text style={styles.balanceText}>My Attendance</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={{flexDirection:'row',flex:1, margin:10}}>
              <TouchableHighlight style={styles.viewColumnStyle} underlayColor="white">
                  <View>
                    <Image style={styles.cardIconImages}  source = {require('../../../images/my-purchase.png')}/>
                    <Text style={styles.balanceText}>My Purchases</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.viewColumnStyle} underlayColor="white" onPress={Actions.account}>
                  <View>
                    <Image style={styles.cardIconImages}  source = {require('../../../images/my-account.png')}/>
                    <Text style={styles.balanceText}>My Account</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.viewColumnStyle} underlayColor="white" onPress={Actions.mypoints}>
                  <View>
                    <Image style={styles.cardIconImages}  source = {require('../../../images/my-points.png')}/>
                    <Text style={styles.balanceText}>My Points</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
            <TouchableHighlight style={[styles.rootView]} underlayColor="white" onPress={Actions.buyservices}>
              <View style = {[styles.inlineView]}>
                        <Image style={styles.settingcardIcon}  source = {require('../../../images/buy-services.png')}/>
                        <Text style ={styles.settingText}>Buy Services</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={[styles.rootView]} underlayColor="white" onPress={Actions.setting}>
              <View style = {styles.inlineView}>
                  <Image style={styles.settingcardIcon}  source = {require('../../../images/setting.png')}/>
                  <Text style ={styles.settingText}>Setting</Text>
              </View>
            </TouchableHighlight>
          </View>
          )
          : (
            <View style ={{marginBottom:50}}>
              <View style = {{minHeight:150, backgroundColor:'#ffffff', position:'relative',width:'90%', alignSelf:'center', marginTop:70}}>
                <Image  style = {styles.profileImage} source = {require('../../../images/profile-1.png')} />
                  <Button block style ={styles.buttonStyleTransparent} onPress={Actions.login} >
                    <Text style={styles.transparentButtonText}> Login </Text>
                  </Button>
            </View>
            <View style = {{ position:'relative',width:'90%', alignSelf:'center', marginTop:0}}>
              <View style={{flexDirection:'row',flex:1, marginTop:10, marginBottom:0, marginRight:10, marginLeft:10}}>
               <View style={styles.viewColumnStyle}>
                    <Image style={styles.cardIconImages}  source = {require('../../../images/my-waitlist.png')}/>
                    <Text style={styles.balanceText}>My Waitlists</Text>
                  </View>
                  <View style={styles.viewColumnStyle}>
                    <Image style={styles.cardIconImages}  source = {require('../../../images/my-waitlist.png')}/>
                    <Text style={styles.balanceText}>My Waitlists</Text>
                  </View>
                <View style={styles.viewColumnStyle}>
                  <Image style={styles.cardIconImages}  source = {require('../../../images/my-attendance.png')}/>
                  <Text style={styles.balanceText}>My Attendance</Text>
                </View>
              </View>
              <View style={{flexDirection:'row',flex:1, margin:10}}>
                <View style={styles.viewColumnStyle}>
                  <Image style={styles.cardIconImages}  source = {require('../../../images/my-purchase.png')}/>
                  <Text style={styles.balanceText}>My Purchases</Text>
                </View>
                <View style={styles.viewColumnStyle}>
                  <Image style={styles.cardIconImages}  source = {require('../../../images/my-account.png')}/>
                  <Text style={styles.balanceText}>My Account</Text>
                </View>
                <View style={styles.viewColumnStyle}>
                  <Image style={styles.cardIconImages}  source = {require('../../../images/my-points.png')}/>
                  <Text style={styles.balanceText}>My Points</Text>
                </View>
              </View>
            </View>
            <View style = {[styles.rootView, styles.inlineView]}>
                      <Image style={styles.settingcardIcon}  source = {require('../../../images/buy-services.png')}/>
                      <Text style ={styles.settingText}>Buy Services</Text>
            </View>
            <View style = {[styles.rootView, styles.inlineView]}>
                      <Image style={styles.settingcardIcon}  source = {require('../../../images/setting.png')}/>
                      <Text style ={styles.settingText}>Setting</Text>
            </View>
          </View>
          )
        }
    </Content>
    </View>
  </Container>
);

const styles = StyleSheet.create({
rootView:{
  backgroundColor:'#ffffff',
   position:'relative',
   width:'90%',
   alignSelf:'center'
},
inlineView:{
  flexDirection:'row',
   flexWrap:'wrap',
   padding:20,
   paddingRight:10,
},
profileImage:{
  width:100,
  height:100,
  borderRadius:50,
  alignSelf:'center',
  position:'absolute',
  top:-50
},
profileName:{
  fontWeight:'bold',
  fontSize:24,
  color:'#000000',
  textAlign:'center',
  zIndex: 2,
  marginRight:10,
},
cardIcon:{
    width:30,
    height:30,
    zIndex:99
},
settingcardIcon:{
  width:20,
  height:20,
  zIndex:99,
  marginRight:10
},
cardIconImages:{
  width:50,
    height:50,
    alignSelf:'center',
    padding:10
},
buttonStyle:{
    backgroundColor:'green',
    borderWidth:1,
    borderRadius:20,
    height:20,
    width:70,
    borderColor:'green',
    textAlign:'center'
},
buttonText:{
  fontSize:8,
  textAlign:'center',
  alignSelf:'center'
},
flexColumn:{
  marginTop:20,
  paddingTop:10,
  paddingBottom:10,
   flex:0.5,
   textAlign:'center',
   marginBottom:20,
},
bordercolumn:{
  borderColor:'#000000',
  borderRightWidth:1,
  borderStyle: 'dotted'
},
balanceText:{
  fontSize:12,
  textAlign:'center'
},
settingText:{
  fontSize:14,
  textAlign:'center'
},
balanceBoldText:{
  fontSize:26,
  fontWeight:'bold',
  textAlign:'center',
  textTransform: 'uppercase',
  alignSelf:'center'
},
viewColumnStyle:{
  backgroundColor:'#ffffff',
   flex:0.33,
  textAlign:'center',
  alignSelf:'center',
  paddingTop:10,
  paddingBottom:10,
  marginLeft:5,
  marginRight:5
},
buttonStyleTransparent:{
  backgroundColor:'#ffffff',
  borderRadius: 0,
  borderWidth: 1,
  borderColor: '#000000',
  marginTop:70,
  width:'90%',
  alignSelf:'center'
},
transparentButtonText:{
  color:'#000000',
  fontSize:12,
  alignItems:'center',
  textAlign:'center',
}

});

Profile.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  member: {},
};

export default Profile;
