import React from 'react';
import { Container, Content, Button} from 'native-base';
import { Text, View, Image, StyleSheet,Linking} from 'react-native';
import Spacer from './UI/Spacer';
import { Actions } from 'react-native-router-flux';
import Hr from './UI/Hr';

class About extends React.Component {
  constructor(props) {
    super(props);
    }
    render(){
      return(
        <Container>
        <View style ={styles.mainContainer}>
          <Content>
            <View >
            <Spacer size={100} />
              <Image  source ={require('../../images/app-icon.png')} />
              <Spacer size={20} />
                <Text style ={styles.welcomeText} >Welcome!</Text>
                <Spacer size={5} />
                <Text style ={styles.normalText} >Sign up and start exploring.</Text>
                <Spacer size={30} />
                <Button block style ={styles.buttonStyle} onPress={Actions.login}>
                  <Text style={styles.loginButtonText}> Login </Text>
                </Button>
                <Spacer size={15} />
                <Button block style ={styles.buttonStyleTransparent} onPress={Actions.main} >
                  <Text style={styles.transparentButtonText}> Continue as a guest </Text>
                </Button>
                <Spacer size={10} />
                <Hr text="Or" />
                <Spacer size={10} />
                <Text style={styles.continuaTextt}> Continue with </Text>
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
      )
    }
}

const styles = StyleSheet.create({
  mainContainer:{
    backgroundColor:'#2eaaeb',
    flex:1, 
    justifyContent: 'center',
    paddingRight:30,
    paddingLeft:30
  },
  welcomeText:{
    fontSize:34,
    lineHeight:41,
    textAlign: 'center',
    flex:1, 
    color:'white',
    fontFamily:'SFProDisplay_Regular'
  },
  normalText:{
    fontSize:12,
    textAlign: 'center',
    flex:1, 
    color:'white',
    fontFamily:'SFProDisplay_Light'
  },
  buttonStyle:{
    backgroundColor:'#ffffff',
    borderRadius:4
  },
  buttonStyleTransparent:{
    backgroundColor:'#2eaaeb',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  transparentButtonText:{
    color:'#ffffff',
    fontSize:17,
    lineHeight:22,
    alignItems:'center',
    textAlign:'center',
    fontFamily:'SFPro_Text_Regular'
  },
  continuaTextt:{
    color:'#ffffff',
    fontSize:12,
    lineHeight:16,
    alignItems:'center',
    textAlign:'center',
    fontFamily:'SFPro_Text_Regular'
  },
  loginButtonText:{
    color:'#00A6EF',
    fontSize:20,
    lineHeight:25,
    fontFamily:'SFProDisplay_Light'
  },
  signUpText:{
    color:'white',
    fontSize:12,
    textAlign:'center',
    fontFamily:'SFPro_Text_Regular'
  },
  signUpTextDecoration:{
    textDecorationLine:'underline',
    fontFamily:'SFPro_Text_Regular'
  },
});

export default About;
