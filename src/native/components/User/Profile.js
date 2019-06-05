import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet } from 'react-native';
import {
  Container, Content, List, ListItem, Body, Left, Text
} from 'native-base';
import { Icon, TouchableOpacity } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import Header from '../UI/Header';

const Profile = ({ member, logout }) => (
  <Container>
    <View style ={{flex:1, textAlign:'center'}}>
    <Content>
      <List>
        {/* {(member && member.email) */}
        {(1)
          ? (
            <View style = {{minHeight:200, backgroundColor:'#ffffff', position:'relative',width:'90%', alignSelf:'center', marginTop:50}}>
              <Image style = {styles.profileImage} source = {require('../../../images/image-2.jpg')} />
              <View style ={{marginTop:60}}>
                <Text style ={styles.profileName}>Janet Walker</Text>
                <Icon name={"chevron-right"}  size={30} color="#01a699" style={styles.cardIcon}/>
              </View>
              
            </View>
          )
          : (
            <View>
              <Content padder>
                <Header
                  title="Hi there,"
                  content="Please login to gain extra access"
                />
              </Content>

              <ListItem onPress={Actions.login} icon>
                <Left>
                  <Icon name="power" />
                </Left>
                <Body>
                  <Text>
                    Login
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.signUp} icon>
                <Left>
                  <Icon name="add-circle" />
                </Left>
                <Body>
                  <Text>
                    Sign Up
                  </Text>
                </Body>
              </ListItem>
              <ListItem onPress={Actions.forgotPassword} icon>
                <Left>
                  <Icon name="help-buoy" />
                </Left>
                <Body>
                  <Text>
                    Forgot Password
                  </Text>
                </Body>
              </ListItem>
            </View>
          )
        }
      </List>
    </Content>
    </View>
  </Container>
);

const styles = StyleSheet.create({

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
  flex:0.8
},
cardIcon:{
  flex:0.2,
  borderRadius:15,
   borderWidth:1,
    borderColor:'#000000',
    position:'absolute',
    right:0
},

});

Profile.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  member: {},
};

export default Profile;
