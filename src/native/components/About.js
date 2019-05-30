import React from 'react';
import {
  Container, Content, Button
} from 'native-base';

import { Text, View, Image, StyleSheet,Linking
} from 'react-native';
import Spacer from './UI/Spacer';
import { blue, bold, white } from 'ansi-colors';
import { Actions } from 'react-native-router-flux';
import Hr from './UI/Hr';
//import Firebase from './../../firebase/firebase'

const About = () => (
  <Container>
      <View style ={{backgroundColor:'#2eaaeb',flex:1, justifyContent: 'center',
                alignItems: 'center',alignContent:'center'}}>
        <Content>
          {/* <Firebase /> */}
          <View >
          <Spacer size={100} />
            <Image source ={require('../../images/app-icon.png')} />
            <Spacer size={20} />
              <Text style ={styles.welcomeText} >Welcome!</Text>
              <Spacer size={5} />
              <Text style ={styles.normalText} >Sign up and start exploring.</Text>
              <Spacer size={30} />
              <Button block style ={styles.buttonStyle} onPress={Actions.login}>
                <Text style={styles.loginButtonText}> Login </Text>
              </Button>
              <Spacer size={15} />
              <Button block style ={styles.buttonStyleTransparent} onPress={Actions.profile} >
                <Text style={styles.transparentButtonText}> Continue as a guest </Text>
              </Button>
              <Spacer size={10} />
              <Hr text="Or" />
              <Spacer size={10} />
              <Text style={styles.transparentButtonText}> Continue with </Text>
              <Spacer size={10} />
              <View  style={{flex: 1, flexDirection: 'row', alignItems:'center',marginTop: 0,
                  marginRight: 'auto',
                  marginBottom: 0,
                  marginLeft: 'auto',}}>
                <Image source ={require('../../images/facebook-gym.png')} style ={{width:45, height: 45, marginRight:10}} />
                <Image source ={require('../../images/g-gym.png') } style ={{width:45, height: 45, marginLeft:10}} />
              </View>
              <Spacer size={10} />
              <View  style={{flex: 1, flexDirection: 'row', alignItems:'center',marginTop: 0,
                  marginRight: 'auto',
                  marginBottom: 0,
                  marginLeft: 'auto',}}>
                <Text style={styles.signUpText}> Don't have an account? </Text>
                <Text style={[styles.signUpText, styles.signUpTextDecoration]}
                  onPress={Actions.signUp}>
                      Sign up!
                </Text>
              </View>
              
          </View>
        </Content>
      </View>
  </Container>
);

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  welcomeText:{
    fontSize:30,
    textAlign: 'center',
    flex:1, 
    color:'white',
  },
  normalText:{
    fontSize:12,
    textAlign: 'center',
    flex:1, 
    color:'white',
  },
  buttonStyle:{
    backgroundColor:'white',
  },
  buttonStyleTransparent:{
    backgroundColor:'transparent',
    borderRadius: 0,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  transparentButtonText:{
    color:'white',
    fontSize:12,
    alignItems:'center',
    textAlign:'center',
  },
  loginButtonText:{
    color:'#2eaaeb',
    fontSize:12
  },
  signUpText:{
    color:'white',
    fontSize:12,
    textAlign:'center',
  },
  signUpTextDecoration:{
    textDecorationLine:'underline'
  },
});

export default About;
