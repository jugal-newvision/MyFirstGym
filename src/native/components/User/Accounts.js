import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Container, Content, Text, Button, Input, Label, Item} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Spacer from '../UI/Spacer';

class Accounts extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          username: 'Prakash',
          firstname:'janet',
          lastname:'Walker',
          address:'Delma',
          city:'Delma',
          country:'Delma',
          mobileno:'9667805455',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange = (name, val) =>{
        this.setState({ [name]: val })
      } 

      handleSubmit = () => {
        const { onFormSubmit } = this.props;
    
        return onFormSubmit(this.state)
          .then(() => setTimeout(() => Actions.pop(), 1000))
          .catch(() => {});
      }
    
    render(){

        return(
            <Container style = {styles.mainContainer}>
      <Content>
         {(this.state.username)
         ?(
          
          <View style ={styles.content}> 
            <Spacer size={20} />
            <Text style = {styles.title}>MY INFO</Text>
            <View style={styles.notification}>
              <View style = {styles.firstColumn}>
                <Item stackedLabel>
                  <Label>First Name</Label>
                  <Input
                      style={styles.input}
                      placeholderTextColor="#000000"
                      autoCapitalize="none"
                      placeholder = 'Janet'
                      value = {this.state.firstname}
                      keyboardType="default"
                      onChangeText={v => this.handleChange('firstname', v)}
                    />
                    </Item>
                    <Item stackedLabel>
                  <Label>Last Name</Label>
                  <Input
                      style={styles.input}
                      placeholderTextColor="#000000"
                      autoCapitalize="none"
                      placeholder = 'Walker'
                      value = {this.state.lastname}
                      keyboardType="default"
                      onChangeText={v => this.handleChange('lastname', v)}
                    />
                    </Item>
              </View>
              <View style = {styles.secondColumn}>

              </View>
              <View>
                <Item stackedLabel>
                    <Label>Address</Label>
                    <Input
                        style={styles.input}
                        placeholderTextColor="#000000"
                        autoCapitalize="none"
                        placeholder = 'Delma'
                        value = {this.state.address}
                        keyboardType="default"
                        onChangeText={v => this.handleChange('address', v)}
                      />
                      </Item>
              </View>
              <View>
                <Item stackedLabel>
                    <Label>City</Label>
                    <Input
                        style={styles.input}
                        placeholderTextColor="#000000"
                        autoCapitalize="none"
                        placeholder = 'Delma'
                        value = {this.state.city}
                        keyboardType="default"
                        onChangeText={v => this.handleChange('city', v)}
                      />
                      </Item>
              </View>
              <View>
                <Item stackedLabel>
                    <Label>Country</Label>
                    <Input
                        style={styles.input}
                        placeholderTextColor="#000000"
                        autoCapitalize="none"
                        placeholder = 'UAE'
                        value = {this.state.country}
                        keyboardType="default"
                        onChangeText={v => this.handleChange('country', v)}
                      />
                      </Item>
              </View>
              <View>
                <Item stackedLabel>
                    <Label>mobile No</Label>
                    <Input
                        style={styles.input}
                        placeholderTextColor="#000000"
                        autoCapitalize="none"
                        placeholder = '+91 9667805455'
                        value = {this.state.mobileno}
                        keyboardType="default"
                        onChangeText={v => this.handleChange('mobileno', v)}
                      />
                      </Item>
              </View>
            </View>
          </View>
         ):
         (
          <View style ={styles.content}> 
              <Text style = {styles.text}>All your Account Setting</Text>
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
        backgroundColor:'#ffffff'
      },
      title:{
        backgroundColor:'#cccccc',
        fontSize:16,
        fontWeight:'bold',
        width:'100%',
        textAlign:'center',
        paddingTop:5,
        paddingBottom:5
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

    notification:{
      paddingLeft:15,
      flex:1,
      flexDirection:'row',
      marginBottom:20
    },
    firstColumn:{
      flex:0.7
    },
    secondColumn:{
      flex:0.3,
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
    },
    input:{
      color:'#000000', 
      textAlignVertical:'center', 
      backgroundColor:'#ffffff', 
      width:'100%',
      borderWidth:0,
      maxHeight:20,
      height:15
    },

  });
  
  export default Accounts;
  