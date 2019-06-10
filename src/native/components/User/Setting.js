import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Container, Content, Text, Button} from 'native-base';
import ToggleSwitch from 'toggle-switch-react-native';
import { Actions } from 'react-native-router-flux';
import Spacer from '../UI/Spacer';


class Setting extends React.Component{

    constructor() {
        super();
        this.state = {
          username: 'Prakash',
          allowPushEmailNotifications: true,
          allowPushSMSNotifications: false,
          allowPushNotifications: false,
          allowPushPromtClassNotifications: false,
        };
      }

      onToggleChange  = (id) => {
         {(id==='1')?
          (
            this.setState({allowPushEmailNotifications:!this.state.allowPushEmailNotifications})
          ):(id==='2')?(
            this.setState({allowPushSMSNotifications:!this.state.allowPushSMSNotifications})
          ):(id==='3')?
          (
            this.setState({allowPushNotifications:!this.state.allowPushNotifications})
          ):(id==='4')?
          (
            this.setState({allowPushPromtClassNotifications:!this.state.allowPushPromtClassNotifications})
          ):(<View><Text>Hello</Text></View>)
      }
    }
    render(){
        return(
            <Container style = {styles.mainContainer}>
      <Content>
         {(this.state.username)
         ?(
            <View style={styles.mainView}>
                <Text style = {styles.mainNotificationText} >Notification</Text>
                <Spacer size ={20} />
                <View style={styles.notification}>
                    <View style = {styles.firstColumn}>
                        <Text style = {styles.mainNotificationText}>Send me email confirmation</Text>
                        <Text style = {styles.subNotificationText}>Receive email confirmations when booking and purchasing in the app</Text>
                    </View>
                    <View style = {styles.secondColumn}>
                        <ToggleSwitch
       
                            isOn={this.state.allowPushEmailNotifications}
                            onColor='green'
                            offColor='#cccccc'
                            size='small'
                            onToggle={  this.onToggleChange.bind(this,"1")}
                        />
                    </View>
                     
                </View>

                <View style={styles.notification}>
                    <View style = {styles.firstColumn}>
                        <Text style = {styles.mainNotificationText}>Email me SMS notification</Text>
                        <Text style = {styles.subNotificationText}>Receive notification from this business</Text>
                    </View>
                    <View style = {styles.secondColumn}>
                        <ToggleSwitch
                            isOn={this.state.allowPushSMSNotifications}
                            onColor='green'
                            offColor='#cccccc'
                            size='small'
                            onToggle={  this.onToggleChange.bind(this,"2")}
                        />
                    </View>
                     
                </View>

                <View style={styles.notification}>
                    <View style = {styles.firstColumn}>
                        <Text style = {styles.mainNotificationText}>Push Notification</Text>
                        <Text style = {styles.subNotificationText}>Receive push notification</Text>
                    </View>
                    <View style = {styles.secondColumn}>
                        <ToggleSwitch
                            isOn={this.state.allowPushNotifications}
                            onColor='green'
                            offColor='#cccccc'
                            size='small'
                            onToggle={  this.onToggleChange.bind(this,"3")}
                        />
                    </View>
                     
                </View>

                <View style={styles.notification}>
                    <View style = {styles.firstColumn}>
                        <Text style = {styles.mainNotificationText}>Promt me to sign in to class</Text>
                        <Text style = {styles.subNotificationText}>Skip this line by signing in on mobile</Text>
                    </View>
                    <View style = {styles.secondColumn}>
                        <ToggleSwitch
                            isOn={this.state.allowPushPromtClassNotifications}
                            onColor='green'
                            offColor='#cccccc'
                            size='small'
                            onToggle={  this.onToggleChange.bind(this,"4")}
                        />
                    </View>
                     
                </View>
                <Spacer size ={20} />
                <Text style = {styles.mainNotificationText} >Setting</Text>
                <View style={styles.mainView}>
                  <Text style = {styles.marginBottomOnText}>Calender</Text>
                  <Text style = {styles.marginBottomOnText}>Language</Text>
                </View>
                <Text style = {styles.mainNotificationText} >Support</Text>
                <View style={styles.mainView}>
                  <Text style = {styles.marginBottomOnText}>Help Center</Text>
                  <Text style = {styles.marginBottomOnText}>My First Gym Privacy Policy</Text>
                  <View style = {styles.marginBottomOnText}>
                    <Text>Version</Text>
                    <Text style = {styles.versionText}>3.1.5</Text>
                  </View>
                  <Text style = {styles.marginBottomOnText}>Tell Us What you think</Text>
                </View>
            </View>
         ):
         (
            <View style ={styles.content}> 
                <Text style = {styles.text}>All your fitness App Settings</Text>
                <Spacer size={10} />
                <Text style={{textAlign:'center', flex:0.8, margin:0, color:'#827b7b'}}>View your go-to classes and book your next workout, instantly</Text>
                <Spacer size={20} />
                <Button block style ={styles.buttonStyle} onPress={Actions.login}>
               <Text style={styles.loginButtonText}> Login </Text>
                </Button>
            </View>
         )
         }
      </Content>
    </Container>
        )
    }
    
  };
  
  const styles = StyleSheet.create({
      mainContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      },
      mainView:{
          padding:15
      },
      notification:{
        paddingLeft:15,
        flex:1,
        flexDirection:'row',
        marginBottom:20
      },
      marginBottomOnText:{
        marginBottom:15
      },
      mainNotificationText:{
          fontSize:16,
          fontWeight:'bold'
      },
      subNotificationText:{
        fontSize:12
      },
      firstColumn:{
        flex:0.8
      },
      secondColumn:{
        flex:0.2,
        textAlign:'center',
        marginTop:10
      },
      versionText:{
        fontSize:8
      },
     text:{
          fontWeight:'bold',
           fontSize:16,
            textAlign:'center',
             flex:0.8,
            margin:0
        },
    buttonStyle:{
        backgroundColor:'transparent',
        borderRadius:4,
        borderWidth:1,
        flex:0.8,
        width:'80%',
        marginLeft:'10%',
        borderColor:'#000000',
        justifyContent: 'center',
        alignItems: 'center',
      },
      loginButtonText:{
        color:'#000000',
        fontSize:12
      },
      content:{
        textAlign:'center',
        alignItems:'center',
        margin:0,
        flex:1,
    },


  });
  
  export default Setting;
  