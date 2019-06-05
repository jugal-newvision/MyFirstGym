import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Form, Item, Input, Button, View} from 'native-base';
import {Image, StyleSheet} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Messages from '../UI/Messages';
import Spacer from '../UI/Spacer';

class ForgotPassword extends React.Component {
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
    const { email } = this.state;

    return (
      <Container>
         <View style ={{backgroundColor:'#2eaaeb',flex:1, justifyContent: 'center',
                alignItems: 'center',alignContent:'center', textAlign:'center'}}>
          <Content padder>
            <Spacer  size = {100}/>
            <Image style = {{alignSelf:'center'}} source ={require('../../../images/app-icon.png')} />
            <Spacer size={20} />
            <Text style ={styles.welcomeText} >Welcome!</Text>
            <Spacer size={5} />
            <Text style ={styles.normalText} >Reset Your Password and start exploring.</Text>
            <Spacer size={30} />
            {error && <Messages message={error} />}
            {success && <Messages type="success" message={success} />}
            <Form>
              <Item stackedLabel style={{width:'90%'}}>
                <Input
                  style={{color:'#ffffff', textAlignVertical:'bottom'}}
                  placeholder = 'E-mail'
                  placeholderTextColor="#ffffff"
                  autoCapitalize="none"
                  value={email}
                  disabled={loading}
                  keyboardType="email-address"
                  onChangeText={v => this.handleChange('email', v)}
                />
              </Item>
              <Spacer size={20} />
              <View padder>
                <Button block style ={styles.buttonStyle} onPress={this.handleSubmit} disabled={loading}>
                    <Text style={styles.loginButtonText}> {loading ? 'Loading' : 'Reset Password' } </Text>
                </Button>
              </View>
            </Form>
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
    color:'#2eaaeb',
    fontSize:12
  }
});


export default ForgotPassword;
