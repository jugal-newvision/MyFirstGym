import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Form, Item, Input, Button, View, Label} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Messages from '../UI/Messages';
import Spacer from '../UI/Spacer';

class UpdateCreditCard extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    success: null,
    error: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
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
    const { loading, error, success } = this.props;
    const { email } =this.state;

    return (
      <Container>
         <View style ={{flex:1, textAlign:'center', backgroundColor:'#ffffff'}}>
          <Content padder>
          <Spacer  size = {40}/>
            <View style ={{width:'100%', height:30, color:'#959595',backgroundColor:'#F0F0F0', textAlign:'center'}}><Text style={{textAlign:'center'}}>NEW CREDIT CARD</Text></View>
            <Spacer  size = {10}/>
          <View style = {{position:'relative', alignSelf:'center',padding:15, width:'100%', }}>
          <Spacer  size = {10}/>
            {error && <Messages message={error} />}
            {success && <Messages type="success" message={success} />}
            <Form>
              <View style={{flexDirection:'row', flexWrap:'wrap', flex:1}}>
                <Item stackedLabel style={{borderRadius:4, width: '100%', alignSelf:'flex-start'}}>
                  <Label>CC Number</Label>
                  <Input
                    style={{borderRadius:4, color:'#959595', textAlignVertical:'center', backgroundColor:'#F0F0F0', marginRight:10, borderWidth:0, maxWidth:'100%', paddingLeft:10}}
                    placeholder = ' '
                    placeholderTextColor="#959595"
                    autoCapitalize="none"
                    value={' '}
                    // disabled={loading}
                    keyboardType="numeric"
                    onChangeText={v => this.handleChange('email', v)}
                  />
                </Item>
                <Item stackedLabel style={{borderRadius:4, width: '100%', alignSelf:'flex-start'}}>
                <Label>NAME</Label>
                  <Input
                style={{borderRadius:4, color:'#959595', textAlignVertical:'center', backgroundColor:'#F0F0F0', borderWidth:0, maxWidth:'100%', paddingLeft:10}}
                    placeholder = ''
                    placeholderTextColor="#959595"
                    autoCapitalize="none"
                    value={email}
                    // disabled={loading}
                    keyboardType="default"
                    onChangeText={v => this.handleChange('email', v)}
                  />
                </Item>
                <Item stackedLabel style={{borderRadius:4, width: '100%', alignSelf:'flex-start'}}>
                <Label>CC Expiration</Label>
                  <Input
                style={{borderRadius:4, color:'#959595', textAlignVertical:'center', backgroundColor:'#F0F0F0', borderWidth:0, maxWidth:'100%', paddingLeft:10}}
                    placeholder = ''
                    placeholderTextColor="#959595"
                    autoCapitalize="none"
                    value=' '
                    // disabled={loading}
                    keyboardType="default"
                    onChangeText={v => this.handleChange('email', v)}
                  />
                </Item>
                <Item stackedLabel style={{borderRadius:4, width: '100%', alignSelf:'flex-start'}}>
                <Label>Billing Address</Label>
                  <Input
                style={{borderRadius:4, color:'#959595', textAlignVertical:'center', backgroundColor:'#F0F0F0', borderWidth:0, maxWidth:'100%', paddingLeft:10}}
                    placeholder = ''
                    placeholderTextColor="#959595"
                    autoCapitalize="none"
                    value=' '
                    // disabled={loading}
                    keyboardType="default"
                    onChangeText={v => this.handleChange('email', v)}
                  />
                </Item>
                <Item stackedLabel style={{borderRadius:4, width: '100%', alignSelf:'flex-start'}}>
                <Label>City</Label>
                  <Input
                style={{borderRadius:4, color:'#959595', textAlignVertical:'center', backgroundColor:'#F0F0F0', borderWidth:0, maxWidth:'100%', paddingLeft:10}}
                    placeholder = ''
                    placeholderTextColor="#959595"
                    autoCapitalize="none"
                    value=' '
                    // disabled={loading}
                    keyboardType="default"
                    onChangeText={v => this.handleChange('email', v)}
                  />
                </Item>
                <Item stackedLabel style={{borderRadius:4, width: '100%', alignSelf:'flex-start'}}>
                <Label>Postal Code</Label>
                  <Input
                style={{borderRadius:4, color:'#959595', textAlignVertical:'center', backgroundColor:'#F0F0F0', borderWidth:0, maxWidth:'100%', paddingLeft:10}}
                    placeholder = ''
                    placeholderTextColor="#959595"
                    autoCapitalize="none"
                    maxLength={6}
                    minLength={6}
                    value=' '
                    // disabled={loading}
                    keyboardType="numeric"
                    onChangeText={v => this.handleChange('email', v)}
                  />
                </Item>
                <Item stackedLabel style={{borderRadius:4, width: '100%', alignSelf:'flex-start'}}>
                <Label>validate Your account password</Label>
                  <Input
                style={{borderRadius:4, color:'#959595', textAlignVertical:'center', backgroundColor:'#F0F0F0', borderWidth:0, maxWidth:'100%', paddingLeft:10}}
                    placeholder = ''
                    placeholderTextColor="#959595"
                    autoCapitalize="none"
                    value=' '
                    // disabled={loading}
                    keyboardType="default"
                    onChangeText={v => this.handleChange('email', v)}
                  />
                </Item>
                </View>
              <Spacer size={20} />
              <View padder style={{alignItems:'flex-end'}}>
                <Button block style ={styles.buttonStyleTransparent} onPress={this.handleSubmit} disabled={loading}>
                    <Text style={styles.loginButtonText}> update card </Text>
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
    fontSize:12
  },
  buttonStyleTransparent:{
    backgroundColor:'#25AE88',
    borderRadius:20,
    marginTop:20,
  },
});
export default UpdateCreditCard;
