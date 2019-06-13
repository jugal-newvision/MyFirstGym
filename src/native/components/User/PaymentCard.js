import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Form, Item, Input, Button, View, Label} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Messages from '../UI/Messages';
import Spacer from '../UI/Spacer';
import { Dropdown } from 'react-native-material-dropdown';

class PaymentCard extends React.Component {
  // static propTypes = {
  //   member: PropTypes.shape({
  //     email: PropTypes.string,
  //   }),
  //   error: PropTypes.string,
  //   success: PropTypes.string,
  //   loading: PropTypes.bool.isRequired,
  //   onFormSubmit: PropTypes.func.isRequired,
  // }

  // static defaultProps = {
  //   success: null,
  //   error: null,
  //   member: {},
  // }

  constructor(props) {
    super(props);
    this.state = {
      // email: (props.member && props.member.email) ? props.member.email : '',
      month:'jun',
      year:'2023',
      cardnumber:'',
      cvc:'',
      cardholderName:''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => this.setState({ [name]: val })

  handleSubmit = () => {
     const { onFormSubmit } = this.props;

    return onFormSubmit(this.state)
      .then(() => setTimeout(() => { Actions.pop(); Actions.login(); }, 1000))
      .catch(() => {});
  }

  render() {
    // const { loading, error, success } = this.props;
    // const { email } = this.state;
    let month = [{
      value: 'Jan',
    }, {
      value: 'Fab',
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
  let year = [{
    value: 2018,
  }, {
    value: 2019,
  }, {
    value: 2020,
  }, {
    value: 2021,
  }, {
    value: 2022,
  }, {
    value: 2023,
  }, {
    value: 2024,
  }, {
    value: 2025,
  }];
    return (

      <Container>
         <View style ={{flex:1, textAlign:'center', backgroundColor:'#ffffff'}}>
          <Content padder>
          <View style = {{position:'relative', alignSelf:'center',padding:10, width:'100%', }}>
            <Spacer  size = {10}/>
            {/* {error && <Messages message={error} />}
            {success && <Messages type="success" message={success} />} */}
            <Form>
              <View style={{flexDirection:'row', flexWrap:'wrap', flex:1}}>
                <Item stackedLabel style={{borderRadius:4, width: '65%', marginRight: '2%', alignSelf:'flex-start'}}>
                  <Label>Card Number</Label>
                  <Input
                    style={{borderRadius:4, color:'#959595', textAlignVertical:'center', backgroundColor:'#F0F0F0', marginRight:10, borderWidth:0, maxWidth:'100%', paddingLeft:10}}
                    placeholder = '7419 9412 5910 0212'
                    placeholderTextColor="#959595"
                    autoCapitalize="none"
                    maxLength={16}
                    minLength={16}
                    value={this.state.cardnumber}
                    // disabled={loading}
                    keyboardType="numeric"
                    onChangeText={v => this.handleChange('cardnumber', v)}
                  />
                </Item>
                <Item stackedLabel style={{borderRadius:4, width: '29%', marginLeft: '2%', alignSelf:'flex-end'}}>
                  <Label style ={{marginLeft: '3%'}}>CVC</Label>
                  <Input
                style={{borderRadius:4, color:'#959595', textAlignVertical:'center', backgroundColor:'#F0F0F0', borderWidth:0, maxWidth:'100%', paddingLeft:10}}
                    placeholder = '123'
                    placeholderTextColor="#959595"
                    autoCapitalize="none"
                    maxLength={3}
                    minLength={3}
                    value={this.state.cvc}
                    // disabled={loading}
                    keyboardType="numeric"
                    onChangeText={v => this.handleChange('cvc', v)}
                  />
                </Item>
                <Item stackedLabel style={{borderRadius:4, width: '98%', alignSelf:'flex-end', marginTop:10}}>
                  <Label >Card Holder Name</Label>
                  <Input
                style={{borderRadius:4, color:'#959595', textAlignVertical:'center', backgroundColor:'#F0F0F0', borderWidth:0, maxWidth:'100%', paddingLeft:10}}
                    placeholder = 'joshua Hernandez'
                    placeholderTextColor="#959595"
                    autoCapitalize="none"
                    value={this.state.cardholderName}
                    // disabled={loading}
                    keyboardType="default"
                    onChangeText={v => this.handleChange('cardholderName', v)}
                  />
                </Item>
                <Item stackedLabel style={{borderRadius:4, width: '50%',marginRight: '3%',  alignSelf:'flex-end', marginTop:10}}>
                  <Dropdown containerStyle={styles.input}
                        style={{backgroundColor:'#F0F0F0'}}
                        label='Expiration Date'
                        textColor='#959595'
                        itemPadding={5}
                        style={{backgroundColor:'#F0F0F0', height:30, padding:5, marginTop:2}}
                        baseColor='rgba(0, 0, 0, 0.87)'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        labelFontSize={17}
                        value={this.state.month}
                        data={month}
                        />
                </Item>
                <Item stackedLabel style={{borderRadius:4, width: '30%', marginLeft: '3%',  alignSelf:'flex-end', marginTop:10}}>
                  <Dropdown containerStyle={styles.input}
                        label='Year'
                        itemPadding={5}
                        style={{backgroundColor:'#F0F0F0', height:30, padding:5,  marginTop:2}}
                        textColor='#959595'
                        baseColor='rgba(0, 0, 0, 0.87)'
                        inputContainerStyle={{ borderBottomColor: 'transparent' }}
                        labelFontSize={17}
                        value={this.state.year}
                        data={year}
                        />
                </Item>
                </View>
              <Spacer size={20} />
              <View padder style={{alignItems:'flex-end'}}>
                <Button block style ={styles.buttonStyleTransparent} onPress={Actions.creditcard}>
                    <Text style={styles.loginButtonText}> Pay </Text>
                </Button>
              </View>
            </Form>
            </View>
          </Content>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  input:{
    color:'#000000', 
    textAlignVertical:'center', 
    backgroundColor:'#ffffff', 
    width:'100%',
    paddingLeft:0,
    borderBottomWidth:0
  },
  labelColor:{
    color:'#ffffff'
  },
  labelForgetColor:{
    color:'#ffffff',
    flex:1,
    textAlign:'right',
    position:'absolute',
    right:5,
    bottom:2,
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
    borderWidth:1,
    borderRadius:4,
    borderColor:'#ffffff'
  },

  loginButtonText:{
    color:'#ffffff',
    fontSize:12,
    lineHeight:13
  },
  buttonStyleTransparent:{
    backgroundColor:'#25AE88',
    borderRadius:20,
    marginTop:250,
  },
});


export default PaymentCard;
