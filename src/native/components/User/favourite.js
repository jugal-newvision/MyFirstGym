import React from 'react';
import { View, StyleSheet  } from 'react-native';
import {Container, Content, List, ListItem, Body, Left, Text, Button} from 'native-base';
import {Icon} from 'react-native-elements';
import Spacer from '../UI/Spacer';
import { Actions } from 'react-native-router-flux';
const x=10;
const Favorite = ({ member, logout }) => (
   <Container style={{flex:1,flexDirection:'row', alignItems:'center',justifyContent:'center',}}>
     <Content  >
    {(member && member.email)
          ?(
      <List>
          <View style ={{alignContent:'center'}}>
            <Spacer size={10} />
            <ListItem style ={{borderColor:'#2eaaeb',borderLeftWidth:4,borderRadius:4}}>
              <Left style ={{borderColor:'#2eaaeb',borderRightWidth:2, width:'15%'}}>
                <Body  >
                  <Text >11:00 AM</Text>
                </Body>
              </Left>
              <Left style ={{ width:'35%'}}>
                <Body  >
                  <View>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>Stars Artistic</Text>
                    <Text style ={{fontSize:8}} >Gymnastic</Text>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'40%'}}>
                  <Body style ={{width:'100%'}}>
                  <View style ={{width:'100%'}}>
                    <Button style ={{backgroundColor:'green',borderRadius:50,width:'100%',height:30}}  >
                      <Text style={{marginLeft:0,marginRight:0,fontSize:8}}>3.5Y-8Y</Text>
                    </Button>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'10%',alignItems:'center'}}>
                <Body>
                  <View style ={{alignContent:'flex-end'}}>
                  <Icon name={"chevron-right"}  size={30} color="#01a699"/>
                  </ View>
                </Body>
              </Left>
            </ListItem>       
            <Spacer size={10} />
            <ListItem style ={{borderColor:'#2eaaeb',borderLeftWidth:4,borderRadius:4}}>
              <Left style ={{borderColor:'#2eaaeb',borderRightWidth:2, width:'15%'}}>
                <Body  >
                  <Text >11:00 AM</Text>
                </Body>
              </Left>
              <Left style ={{ width:'35%'}}>
                <Body  >
                  <View>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>Stars Artistic</Text>
                    <Text style ={{fontSize:8}} >Gymnastic</Text>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'40%'}}>
                  <Body style ={{width:'100%'}}>
                  <View style ={{width:'100%'}}>
                    <Button style ={{backgroundColor:'green',borderRadius:50,width:'100%',height:30}}  >
                      <Text style={{marginLeft:0,marginRight:0,fontSize:8}}>3.5Y-8Y</Text>
                    </Button>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'10%',alignItems:'center'}}>
                <Body>
                  <View style ={{alignContent:'flex-end'}}>
                  <Icon name={"chevron-right"}  size={30} color="#01a699"/>
                  </ View>
                </Body>
              </Left>
            </ListItem>       
            <Spacer size={10} />
            <ListItem style ={{borderColor:'#2eaaeb',borderLeftWidth:4,borderRadius:4}}>
              <Left style ={{borderColor:'#2eaaeb',borderRightWidth:2, width:'15%'}}>
                <Body  >
                  <Text >11:00 AM</Text>
                </Body>
              </Left>
              <Left style ={{ width:'35%'}}>
                <Body  >
                  <View>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>Stars Artistic</Text>
                    <Text style ={{fontSize:8}} >Gymnastic</Text>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'40%'}}>
                  <Body style ={{width:'100%'}}>
                  <View style ={{width:'100%'}}>
                    <Button style ={{backgroundColor:'green',borderRadius:50,width:'100%',height:30}}  >
                      <Text style={{marginLeft:0,marginRight:0,fontSize:8}}>3.5Y-8Y</Text>
                    </Button>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'10%',alignItems:'center'}}>
                <Body>
                  <View style ={{alignContent:'flex-end'}}>
                  <Icon name={"chevron-right"}  size={30} color="#01a699"/>
                  </ View>
                </Body>
              </Left>
            </ListItem>       
            <Spacer size={10} />
            <ListItem style ={{borderColor:'#2eaaeb',borderLeftWidth:4,borderRadius:4}}>
              <Left style ={{borderColor:'#2eaaeb',borderRightWidth:2, width:'15%'}}>
                <Body  >
                  <Text >11:00 AM</Text>
                </Body>
              </Left>
              <Left style ={{ width:'35%'}}>
                <Body  >
                  <View>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>Stars Artistic</Text>
                    <Text style ={{fontSize:8}} >Gymnastic</Text>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'40%'}}>
                  <Body style ={{width:'100%'}}>
                  <View style ={{width:'100%'}}>
                    <Button style ={{backgroundColor:'green',borderRadius:50,width:'100%',height:30}}  >
                      <Text style={{marginLeft:0,marginRight:0,fontSize:8}}>3.5Y-8Y</Text>
                    </Button>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'10%',alignItems:'center'}}>
                <Body>
                  <View style ={{alignContent:'flex-end'}}>
                  <Icon name={"chevron-right"}  size={30} color="#01a699"/>
                  </ View>
                </Body>
              </Left>
            </ListItem>       
            <Spacer size={10} />
            <ListItem style ={{borderColor:'#2eaaeb',borderLeftWidth:4,borderRadius:4}}>
              <Left style ={{borderColor:'#2eaaeb',borderRightWidth:2, width:'15%'}}>
                <Body  >
                  <Text >11:00 AM</Text>
                </Body>
              </Left>
              <Left style ={{ width:'35%'}}>
                <Body  >
                  <View>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>Stars Artistic</Text>
                    <Text style ={{fontSize:8}} >Gymnastic</Text>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'40%'}}>
                  <Body style ={{width:'100%'}}>
                  <View style ={{width:'100%'}}>
                    <Button style ={{backgroundColor:'green',borderRadius:50,width:'100%',height:30}}  >
                      <Text style={{marginLeft:0,marginRight:0,fontSize:8}}>3.5Y-8Y</Text>
                    </Button>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'10%',alignItems:'center'}}>
                <Body>
                  <View style ={{alignContent:'flex-end'}}>
                  <Icon name={"chevron-right"}  size={30} color="#01a699"/>
                  </ View>
                </Body>
              </Left>
            </ListItem>       
            <Spacer size={10} />
            <ListItem style ={{borderColor:'#2eaaeb',borderLeftWidth:4,borderRadius:4}}>
              <Left style ={{borderColor:'#2eaaeb',borderRightWidth:2, width:'15%'}}>
                <Body  >
                  <Text >11:00 AM</Text>
                </Body>
              </Left>
              <Left style ={{ width:'35%'}}>
                <Body  >
                  <View>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>Stars Artistic</Text>
                    <Text style ={{fontSize:8}} >Gymnastic</Text>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'40%'}}>
                  <Body style ={{width:'100%'}}>
                  <View style ={{width:'100%'}}>
                    <Button style ={{backgroundColor:'green',borderRadius:50,width:'100%',height:30}}  >
                      <Text style={{marginLeft:0,marginRight:0,fontSize:8}}>3.5Y-8Y</Text>
                    </Button>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'10%',alignItems:'center'}}>
                <Body>
                  <View style ={{alignContent:'flex-end'}}>
                  <Icon name={"chevron-right"}  size={30} color="#01a699"/>
                  </ View>
                </Body>
              </Left>
            </ListItem>       
            <Spacer size={10} />
            <ListItem style ={{borderColor:'#2eaaeb',borderLeftWidth:4,borderRadius:4}}>
              <Left style ={{borderColor:'#2eaaeb',borderRightWidth:2, width:'15%'}}>
                <Body  >
                  <Text >11:00 AM</Text>
                </Body>
              </Left>
              <Left style ={{ width:'35%'}}>
                <Body  >
                  <View>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>Stars Artistic</Text>
                    <Text style ={{fontSize:8}} >Gymnastic</Text>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'40%'}}>
                  <Body style ={{width:'100%'}}>
                  <View style ={{width:'100%'}}>
                    <Button style ={{backgroundColor:'green',borderRadius:50,width:'100%',height:30}}  >
                      <Text style={{marginLeft:0,marginRight:0,fontSize:8}}>3.5Y-8Y</Text>
                    </Button>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'10%',alignItems:'center'}}>
                <Body>
                  <View style ={{alignContent:'flex-end'}}>
                  <Icon name={"chevron-right"}  size={30} color="#01a699"/>
                  </ View>
                </Body>
              </Left>
            </ListItem>       
            <Spacer size={10} />
            <ListItem style ={{borderColor:'#2eaaeb',borderLeftWidth:4,borderRadius:4}}>
              <Left style ={{borderColor:'#2eaaeb',borderRightWidth:2, width:'15%'}}>
                <Body  >
                  <Text >11:00 AM</Text>
                </Body>
              </Left>
              <Left style ={{ width:'35%'}}>
                <Body  >
                  <View>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>Stars Artistic</Text>
                    <Text style ={{fontSize:8}} >Gymnastic</Text>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'40%'}}>
                  <Body style ={{width:'100%'}}>
                  <View style ={{width:'100%'}}>
                    <Button style ={{backgroundColor:'green',borderRadius:50,width:'100%',height:30}}  >
                      <Text style={{marginLeft:0,marginRight:0,fontSize:8}}>3.5Y-8Y</Text>
                    </Button>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'10%',alignItems:'center'}}>
                <Body>
                  <View style ={{alignContent:'flex-end'}}>
                  <Icon name={"chevron-right"}  size={30} color="#01a699"/>
                  </ View>
                </Body>
              </Left>
            </ListItem>       
            <Spacer size={10} />
            <ListItem style ={{borderColor:'#2eaaeb',borderLeftWidth:4,borderRadius:4}}>
              <Left style ={{borderColor:'#2eaaeb',borderRightWidth:2, width:'15%'}}>
                <Body  >
                  <Text >11:00 AM</Text>
                </Body>
              </Left>
              <Left style ={{ width:'35%'}}>
                <Body  >
                  <View>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>Stars Artistic</Text>
                    <Text style ={{fontSize:8}} >Gymnastic</Text>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'40%'}}>
                  <Body style ={{width:'100%'}}>
                  <View style ={{width:'100%'}}>
                    <Button style ={{backgroundColor:'green',borderRadius:50,width:'100%',height:30}}  >
                      <Text style={{marginLeft:0,marginRight:0,fontSize:8}}>3.5Y-8Y</Text>
                    </Button>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'10%',alignItems:'center'}}>
                <Body>
                  <View style ={{alignContent:'flex-end'}}>
                  <Icon name={"chevron-right"}  size={30} color="#01a699"/>
                  </ View>
                </Body>
              </Left>
            </ListItem>       
            <Spacer size={10} />
            <ListItem style ={{borderColor:'#2eaaeb',borderLeftWidth:4,borderRadius:4}}>
              <Left style ={{borderColor:'#2eaaeb',borderRightWidth:2, width:'15%'}}>
                <Body  >
                  <Text >11:00 AM</Text>
                </Body>
              </Left>
              <Left style ={{ width:'35%'}}>
                <Body  >
                  <View>
                    <Text style ={{fontSize:10,fontWeight:'900'}}>Stars Artistic</Text>
                    <Text style ={{fontSize:8}} >Gymnastic</Text>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'40%'}}>
                  <Body style ={{width:'100%'}}>
                  <View style ={{width:'100%'}}>
                    <Button style ={{backgroundColor:'green',borderRadius:50,width:'100%',height:30}}  >
                      <Text style={{marginLeft:0,marginRight:0,fontSize:8}}>3.5Y-8Y</Text>
                    </Button>
                  </View>
                </Body>
              </Left>
              <Left style ={{ width:'10%',alignItems:'center'}}>
                <Body>
                  <View style ={{alignContent:'flex-end'}}>
                  <Icon name={"chevron-right"}  size={30} color="#01a699"/>
                  </ View>
                </Body>
              </Left>
            </ListItem>       
          </View>
      </List>
      )
      : (
      
          <View style ={styles.content}> 
                 <Text style = {{fontWeight:'bold', fontSize:16, textAlign:'center', flex:0.8, margin:0}}>All your fitness favourites</Text>
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

);
const styles = StyleSheet.create({

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
export default Favorite;
