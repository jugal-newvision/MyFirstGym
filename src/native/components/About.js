import React from 'react';
import {
  Container, Content
} from 'native-base';

import { Text, View, Image, StyleSheet
} from 'react-native';
import Spacer from './UI/Spacer';
import { blue, bold, white } from 'ansi-colors';

const About = () => (
  <Container>
      <View style ={{backgroundColor:'#2eaaeb',flex:1, justifyContent: 'center',
                alignItems: 'center',}}>
        <Content>
          <View >
          <Spacer size={50} />
            <Image source ={require('../../images/app-icon.png')} />
            <Spacer size={30} />
              <Text style ={styles.welcomeText} >Welcome!</Text>
              <Spacer size={10} />
              <Text style ={styles.welcomeText} >Sign up and start exploring.</Text>
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
    fontSize:45,
    textAlign: 'center',
    flex:1, 
    color:'white',
  }
});

export default About;
