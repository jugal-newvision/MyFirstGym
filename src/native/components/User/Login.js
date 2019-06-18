import React from 'react';
import PropTypes from 'prop-types';
import {Container, Content, Form, Item, Input, Text, View, Button} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Messages from '../UI/Messages';
import Spacer from '../UI/Spacer';

class Login extends React.Component {
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
    error: null,
    success: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (name, val) => this.setState({ [name]: val })

  handleSubmit = () => {
    const { onFormSubmit } = this.props;

    return onFormSubmit(this.state)
      .then(() => setTimeout(() => Actions.pop(), 1000))
      .catch(() => {});
  }
  render() {
    const { loading, error, success } = this.props;
    const { email } = this.state;

    return (
      <Container>
         <View style ={styles.mainContainer}>
        <Content>
          <View>
            <Spacer  size = {20}/>
            <Image style = {{alignSelf:'center'}} source ={require('../../../images/app-icon.png')} />
            <Spacer size={20} />
            <Text style ={styles.welcomeText} >Welcome!</Text>
            <Spacer size={5} />
            <Text style ={styles.normalText} >Sign up and start exploring.</Text>
            <Spacer size={30} />
            <View padder>
              {error && <Messages message={error} />}
              {success && <Messages type="success" message={success} />}
            </View>
            <Form>
              <Item stackedLabel>
                <Input
                  style={styles.inputField}
                  placeholderTextColor="#ffffff"
                  autoCapitalize="none"
                  placeholder = 'Username or E-mail'
                  value={email}
                  keyboardType="email-address"
                  disabled={loading}
                  onChangeText={v => this.handleChange('email', v)}
                />
              </Item>
              <Item stackedLabel >
                <Input
                  style={styles.inputField}
                  placeholderTextColor="#ffffff"
                  secureTextEntry
                  placeholder = 'Password'
                  disabled={loading}
                  onChangeText={v => this.handleChange('password', v)}
                />
                  <Text onPress={Actions.forgotPassword} style ={styles.labelForgetColor} >Forget Password?</Text>
              </Item>
              <Spacer size={20} />
              <View>
                <Button block style ={styles.buttonStyle} onPress= {Actions.profile} disabled={loading}>
                    <Text style={styles.loginButtonText} uppercase={false}> {loading ? 'Loading' : 'Login'} </Text>
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

  mainContainer:{
    backgroundColor:'#2eaaeb',
    flex:1, 
    justifyContent: 'center',
    paddingRight:30,
    paddingLeft:30
  },
  inputField:{
    color:'#ffffff', 
    textAlignVertical:'bottom',
    fontSize:17,
    lineHeight:22,
    fontFamily:'SFPro_Text_Regular'
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
    fontSize:12,
    lineHeight:16,
    fontFamily:'SFPro_Text_Regular'
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
    fontSize:16,
    lineHeight:17,
    textAlign: 'center',
    flex:1, 
    color:'white',
    fontFamily:'SFProDisplay_Light',
  },
  buttonStyle:{
    backgroundColor:'white',
    borderWidth:1,
    borderRadius:4,
    borderColor:'#ffffff',
  },

  loginButtonText:{
    color:'#00A6EF',
    fontSize:20,
    lineHeight:25,
    fontFamily:'SFProDisplay_Light',
    fontWeight:'300'
  }
});

export default Login;
