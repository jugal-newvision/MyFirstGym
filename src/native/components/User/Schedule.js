import React from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Container, Content, List, ListItem, Body, Left, Text, Icon, Button,
} from 'native-base';
import Spacer from '../UI/Spacer';



const Schedule = () => (
  <Container>
    <Content>
    <View>
              <Spacer size={10} />
              <ListItem style ={{borderColor:'#2eaaeb',borderLeftWidth:4,borderRadius:4}}>
                <Left style ={{borderColor:'#2eaaeb',borderRightWidth:2}}>
                <Body  >
                  <Text >11:00 AM</Text>
                </Body>
                </Left>
                <Left>
                  <View>
                    <Text style ={{fontSize:12}}>Stars Artistic</Text>
                    <Text style ={{fontSize:12}} >Gymnastic</Text>
                  </View>
                  <View>
                    <Button style ={{backgroundColor:'green',margin:5,borderRadius:50}}  ><Text style={{marginLeft:0,marginRight:0,fontSize:8}}>3.5Y-8Y</Text></Button>
                  </View>
                </Left>
                <Left>
                <Body>
                  
                </Body>
                </Left>
                </ListItem>
                <ListItem  icon>
                <Left>
                <Body>
                <Text>11:00 AM</Text>
                </Body>
                </Left>
                <Left>
                <Body>
                <Text>11:00 AM</Text>
                </Body>
                </Left>
                <Left>
                <Body>
                <Text>11:00 AM</Text>
                </Body>
                </Left>
                </ListItem>
                
            </View>
    </Content>
  </Container>

);


export default Schedule;
