import React from 'react';
import { View, StyleSheet, TouchableHighlight, Image  } from 'react-native';
import {Container, Content, Text, Button} from 'native-base';
import Spacer from '../UI/Spacer';
import { Actions } from 'react-native-router-flux';
class Favorite extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      LoopNo:10
    };
  }
  render(){
    var block = [];

    for(let i=0; i <  this.state.LoopNo; i++) {
      block.push(
          <TouchableHighlight key={i} style ={styles.mainEventsClass} underlayColor="white" onPress={Actions.eventsdescription}>
           <View style={{flexDirection:'row',flex:1}}>
              <View style ={{borderColor:'#146FA9',borderRightWidth:2, flex:0.25, alignSelf:'center'}}>
                <Text style={{alignSelf:'center', fontSize:15, color:'rgba(0, 0, 0, 0.87)'}} >11:00</Text>
                <Text style={{alignSelf:'center', fontSize:13, color:'rgba(0, 0, 0, 0.54)'}} >AM</Text>
              </View>
              <View style ={{flex:0.4}}>
                <View style = {{alignSelf:'center'}}>
                  <Text style ={{fontSize:16,fontWeight:'900', lineHeight:21, color:'rgba(0, 0, 0, 0.87)'}}>Stars Artistic</Text>
                  <Text style ={{fontSize:13, color:'rgba(0, 0, 0, 0.54)'}} >Gymnastic</Text>
                </View>
              </View>
              <View style ={{ flex:0.25, justifyContent:'center'}}>
                  <View style ={{alignSelf:'center'}}>
                    <Button style ={{backgroundColor:'#25AE88',borderRadius:50,width:'100%',height:30}}  >
                      <Text style={{marginLeft:0,marginRight:0,fontSize:11}}>3.5Y-8Y</Text>
                    </Button>
                  </View>
              </View>
              <View style ={{ flex:0.1, justifyContent:'center'}}>
                  <View style ={{alignSelf:'center', justifyContent:'center'}}>
                      <Image source = {require('../../../images/right_events.png')}/>
                  </View>
              </View>
            </View>
         </TouchableHighlight>
      )
    }

    return(
      <Container style={{flex:1,flexDirection:'row', alignItems:'center',justifyContent:'center',}}>
      <Content  >
     {(0)
           ?(
             <View>
               { block }
             </View>
            
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
    )
  }
   

  }
const styles = StyleSheet.create({

  mainEventsClass:{
    marginLeft:15, 
    marginRight:15,
    marginTop:10,
    marginBottom:10, 
    paddingTop:10, 
    paddingBottom:10, 
    borderColor:'#146FA9',
    borderLeftWidth:4,
    borderRadius:4, 
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1
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
});
export default Favorite;
