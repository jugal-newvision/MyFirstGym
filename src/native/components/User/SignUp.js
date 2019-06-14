import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content, Text, Form, Item, Label, Input, Button} from 'native-base';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Messages from '../UI/Messages';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';
import { Dropdown } from 'react-native-material-dropdown';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          username: 'Tyler',
          firstname:'Tyler',
          lastname:'',
          address:' ',
          city:' ',
          country:' ',
          mobileno:' ',
          gender:' ',
          relation:' ',
          month:'Month',
          day:'Day',
          year:'Year',

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
      let gender = [{
        value: 'Male',
      }, {
        value: 'Female',
      }];
      let relation = [{
        value: 'Mother',
      }, {
        value: 'Father',
      }];
      let month = [{
        value: 'Jan',
      }, {
        value: 'Feb',
      }, {
        value: 'Mar',
      }, {
        value: 'Apr',
      }, {
        value: 'May',
      }, {
        value: 'Jun',
      }, {
        value: 'Jul',
      }, {
        value: 'Aug',
      }, {
        value: 'Sept',
      }, {
        value: 'Oct',
      }, {
        value: 'Nov',
      }, {
        value: 'Dec',
      },
    ];
    let day = [{
      value: 1,
    }, {
      value: 2,
    }, {
      value: 3,
    }, {
      value: 4,
    }, {
      value: 5,
    }, {
      value: 6,
    }, {
      value: 7,
    }, {
      value: 8,
    }, {
      value: 9,
    }, {
      value: 10,
    }, {
      value: 11,
    }, {
      value: 12,
    }, {
      value: 13,
    }, {
      value: 14,
    }, {
      value: 15,
    }, {
      value: 16,
    }, {
      value: 17,
    }, {
      value: 18,
    }, {
      value: 19,
    }, {
      value: 20,
    }, {
      value: 21,
    }, {
      value: 22,
    }, {
      value: 23,
    }, {
      value: 24,
    }, {
      value: 25,
    }, {
      value: 26,
    }, {
      value: 27,
    }, {
      value: 28,
    }, {
      value: 29,
    }, {
      value: 30,
    }, {
      value: 31,
    }];
    let year = [{
      value: 1980,
    }, {
      value: 1981,
    }, {
      value: 1982,
    }, {
      value: 1983,
    }, {
      value: 1984,
    }, {
      value: 1985,
    }, {
      value: 1986,
    }, {
      value: 1987,
    }, {
      value: 1988,
    }, {
      value: 1989,
    }, {
      value: 1990,
    }, {
      value: 1991,
    }, {
      value: 1992,
    }, {
      value: 1993,
    }, {
      value: 1994,
    }, {
      value: 1995,
    }, {
      value: 1996,
    }, {
      value: 1997,
    }, {
      value: 1998,
    }, {
      value: 1999,
    }, {
      value: 2000,
    }, {
      value: 2001,
    }, {
      value: 2002,
    }, {
      value: 2003,
    }, {
      value: 2004,
    }, {
      value: 2005,
    }, {
      value: 2006,
    }, {
      value: 2007,
    }, {
      value: 2008,
    }, {
      value: 2009,
    }, {
      value: 2010,
    }, {
      value: 2011,
    }, {
      value: 2012,
    }, {
      value: 2013,
    }, {
      value: 2014,
    }, {
      value: 2015,
    }, {
      value: 2016,
    }, {
      value: 2017,
    }, {
      value: 2018,
    }, {
      value: 2019,
    }]
        return(
            <Container style = {styles.mainContainer}>
      <Content>
         {(this.state.username)
         ?(
           <View>
            <Spacer size={20} />
            <Text style = {styles.title}>PARENT INFO</Text>
            <View style ={styles.content}> 
            <Spacer size={20} />
              <View style={styles.notification}>
                <View style = {styles.firstColumn}>
                  <Item stackedLabel  style={styles.item}>
                    <Label>First Name</Label>
                    <Input
                        style={styles.input}
                        placeholderTextColor="#000000"
                        autoCapitalize="none"
                        placeholder = ' '
                        value = {this.state.firstname}
                        keyboardType="default"
                        onChangeText={v => this.handleChange('firstname', v)}
                      />
                      </Item>
                      <Item stackedLabel style={styles.item}>
                        <Label>Last Name</Label>
                        <Input
                            style={styles.input}
                            placeholderTextColor="#000000"
                            autoCapitalize="none"
                            placeholder = ' '
                            value = {this.state.lastname}
                            keyboardType="default"
                            onChangeText={v => this.handleChange('lastname', v)}
                          />
                      </Item>
                  </View>
                  <View style = {styles.secondColumn}>
                      <View>
                        <Image  style = {styles.profileImage} source = {require('../../../images/profile_image/profile_image.png')} />
                      </View>
                  </View>
                </View>
                <View style = {styles.itemView}>
                  <Item stackedLabel style={styles.item}>
                    <Dropdown containerStyle={styles.input}
                      label='Gender'
                      textColor='#000000'
                      baseColor='#575757'
                      inputContainerStyle={{ borderBottomColor: 'transparent' }}
                      labelFontSize={17}
                      value={this.state.gender}
                        data={gender}
                      />
                  </Item>
                </View>
                <View style = {styles.itemView}>
                  <Item stackedLabel style={styles.item}>
                    <Dropdown containerStyle={styles.input}
                      label='Relationship'
                      textColor='#000000'
                      baseColor='#575757'
                      inputContainerStyle={{ borderBottomColor: 'transparent' }}
                      labelFontSize={17}
                      value={this.state.relation}
                      data={relation}
                      />
                  </Item>
                </View>
                <View style={styles.notification}>
                  <View style = {styles.birthday}>
                    <Item stackedLabel style={styles.item}>
                      <Dropdown containerStyle={styles.input}
                        label='Birthday'
                        textColor='#000000'
                        baseColor='#575757'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        labelFontSize={17}
                        value={this.state.month}
                        data={month}
                        />
                    </Item>
                  </View>
                  <View style = {styles.birthday}>
                    <Item stackedLabel style={styles.item}>
                      <Dropdown containerStyle={styles.input}
                        textColor='#000000'
                        baseColor='#575757'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        labelFontSize={17}
                        value={this.state.day}
                        data={day}
                        />
                    </Item>
                  </View>
                  <View style = {styles.birthday}>
                    <Item stackedLabel style={styles.item}>
                      <Dropdown containerStyle={styles.input}
                        textColor='#000000'
                        baseColor='#575757'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        labelFontSize={17}
                        value={this.state.year}
                        data={year}
                        />
                    </Item>
                  </View>
                </View>
                <View style = {styles.itemView}>
                  <Item stackedLabel style={styles.item}>
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
                <View style = {styles.itemView}>
                  <Item stackedLabel  style={styles.item} >
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
                <View style = {styles.itemView}>
                  <Item stackedLabel  style={styles.item}>
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
                <View style = {styles.itemView}>
                  <Item stackedLabel style={styles.item}>
                      <Label>Mobile No</Label>
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
                  <Button style = {{alignItems:'center',width:58,textAlign:'center', height:58, borderRadius:29,backgroundColor:'#0099EF',color:'#ffffff', position:'absolute', alignSelf:'flex-end', bottom:10, right:10}} onPress={Actions.signup_child}>
                    <Image  style = {{marginLeft:19 ,alignSelf:'center', width:20, height:20, borderRadius:10}} source = {require('../../../images/Shape.png')} />
                  </Button>
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
    profileImage:{
      width:100,
      height:100,
      borderRadius:50,
      alignSelf:'center',
      position:'absolute',
      top:-50
    },
      mainContainer:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ffffff'
      },
      title:{
        backgroundColor:'#EEEEEE',
        color:'rgba(0, 0, 0, 0.87)',
        fontSize:13,
        lineHeight:18,
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
        paddingLeft:15,
        paddingRight:15,
    },

    notification:{
      flex:1,
      flexDirection:'row',
    },
    firstColumn:{
      flex:0.6
    },
    secondColumn:{
      flex:0.4,
      textAlign:'center',
      alignItems:'center',
      justifyContent:'center',
    },
    birthday:{
      flex:0.33,
      marginBottom:10
    },
    input:{
      color:'#000000', 
      textAlignVertical:'center', 
      backgroundColor:'#ffffff', 
      width:'100%',
      paddingLeft:0,
      borderBottomWidth:1,
      borderColor:'rgba(0, 0, 0, 0.12)',
    },
    item:{
      maxHeight:55,
      width:'100%',
      borderBottomWidth:0
    },
    itemView:{
      width:'100%',
    },

  });
export default SignUp;
