import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content, Text, Form, Item, Label, Input, Button} from 'native-base';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { Actions } from 'react-native-router-flux';
import Messages from '../UI/Messages';
import Header from '../UI/Header';
import Spacer from '../UI/Spacer';
import { Dropdown } from 'react-native-material-dropdown';

class SignUpCreateLogin extends React.Component {
  static propTypes = {
    success: PropTypes.string,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
  }

  state = {
    email: '',
    password: '',
    password2: '',
    howlearn: '',
    checked:true,
  }

  constructor(props) {
    super(props);

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

  changeCheckboxValue=() => {
    this.setState({checked: !this.state.checked})
  }
    render(){
      const { loading, error, success } = this.props;
        return(
            <Container style = {styles.mainContainer}>
      <Content>
            <View>
              <Spacer size={20} />
              <Text style = {styles.title}>CREATE YOUR LOGIN</Text>
              <View> 
                <Spacer size={20} />
                <View>
                    {error && <Messages message={error} />}
                    {success && <Messages type="success" message={success} />}
                </View>
                <Spacer size={20} />  
                <Form>
                  <Item stackedLabel>
                    <Label>Email</Label>
                    <Input
                      disabled={loading}
                      autoCapitalize="none"
                      keyboardType="email-address"
                      onChangeText={v => this.handleChange('email', v)}
                    />
                  </Item>

                  <Item stackedLabel>
                    <Label>Password</Label>
                    <Input
                      disabled={loading}
                      secureTextEntry
                      onChangeText={v => this.handleChange('password', v)}
                    />
                  </Item>

                  <Item stackedLabel>
                    <Label>Confirm Password</Label>
                    <Input
                      disabled={loading}
                      secureTextEntry
                      onChangeText={v => this.handleChange('password2', v)}
                    />
                  </Item>
                  <Spacer size={20} />
                  <Text style = {styles.title}>OTHER INFO</Text>
                  <Spacer size={20} />
                  <Item stackedLabel>
                    <Label>How did you learn about us?</Label>
                    <Input
                      disabled={loading}
                      autoCapitalize="none"
                      keyboardType="default"
                      onChangeText={v => this.handleChange('howlearn', v)}
                    />
                  </Item>
                  <Spacer size={5} />
                  <Text style = {styles.title}>LIABILITY RELEASE</Text>
                  <Spacer size={20} />
                  <View style={{marginRight:20, marginLeft:20, padding:15, borderWidth:1, borderColor:'#C4C4C4', borderradius:4}}>
                    <Text style={{fontWeight:'bold', fontSize:8}}>Refund Policy</Text>
                    <Text style={{fontSize:8}}>All fees and other amounts paid to My First Gym under the Agreement are non-refundable 
                      in all events. Purchase  can exchanged within My First Gym for other My First Gym services
                       within 7 days of purchase or manager approval.
                    </Text>
                    <View style = {{flexDirection:'row', flexWrap:'wrap', flex:1, marginTop:5}}>
                        <Text style = {{flex:0.9, fontSize:8, color:'#cccccc'}}>Waiver and Release of Liability</Text>
                        <View style = {{flex:0.1, borderRadius:16,}}>
                            <Image  style = {{width:16, height:4,  alignSelf:'flex-end', marginTop:11 }} source = {require('../../../images/dots.png')} />
                        </View>
                    </View>
                  </View>
                  <Spacer size={15} />
                  <CheckBox
                    style={{fontSize:8, backgroundColor:'#ffffff'}}
                    number={8}
                    center
                    title='I agree to the My First Gym liability waiver'
                    iconRight
                    checkedColor='#147BDF'
                    checked={this.state.checked}
                    onPress={this.changeCheckboxValue}
                  />
                  <Spacer size={15} />
                  <Button block disabled={loading} style={{width:'80%', alignSelf:'center',backgroundColor:'#147BDF', borderRadius:25}}>
                    <Text>{loading ? 'Loading' : 'SUBMIT'}</Text>
                  </Button>
                  <Spacer size={25} />
                </Form>
              </View>
            </View>
      </Content>
    </Container>
        )
    }
  };
  const styles = StyleSheet.create({

      mainContainer:{
        flex:1,
        flexDirection:'row',
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
        paddingBottom:5,
        alignSelf:'center',
        flex:1,
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
    input:{
      color:'#000000', 
      textAlignVertical:'center', 
      backgroundColor:'#ffffff', 
      width:'100%',
      paddingLeft:0,
      borderBottomWidth:1,
      borderColor:'rgba(0, 0, 0, 0.12)',
    },
  });
export default SignUpCreateLogin;
