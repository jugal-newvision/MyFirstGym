import React, { Component }  from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import Spacer from '../UI/Spacer';
import { Actions } from 'react-native-router-flux';


class BookMultiple extends Component {
  state = {
   
  };


  render() {
    return (
    <Container style={styles.container}>
      <Content style = {{flex:1, flexDirection:'column'}}>
        <View  style = {{flex:1, flexDirection:'column'}} >
          <Spacer size={40} />
          <TouchableHighlight style ={styles.mainEventsRow} underlayColor="white" onPress={Actions.bookmultiple} >
              <View style = {styles.eachRow}>
                <View style={styles.firstcolumn}>
                  <Text style = {styles.rootText}>Make This Reservation Every</Text>
                </View>
                <View style={styles.secondcolumn}>
                  <Text style = {styles.calenderText}>( 1 Week )</Text>
                </View>
                <View style={styles.thirdcolumn}>
                <Image source = {require('../../../images/right_events.png')}/>
                </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style ={styles.mainEventsRow} underlayColor="white" onPress={Actions.bookmultiple} >
              <View style = {styles.eachRow}>
                  <View style={styles.firstcolumn}>
                    <Text style = {styles.rootText} >Selected Day</Text>
                  </View>
                  <View style={styles.secondcolumn}>
                    <Text style = {styles.calenderText}>Tue- Sun</Text>
                  </View>
                  <View style={styles.thirdcolumn}>
                  <Image source = {require('../../../images/right_events.png')}/>
                  </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style ={styles.mainEventsRow} underlayColor="white" onPress={Actions.bookmultiple} >
              <View style = {styles.eachRow}>
                  <View style={styles.firstcolumn}>
                    <Text style = {styles.rootText}>Start Date</Text>
                  </View>
                  <View style={styles.secondcolumn}>
                    <Text style = {styles.calenderText}>( Thursday 13 Jun )</Text>
                  </View>
                  <View style={styles.thirdcolumn}>
                  <Image source = {require('../../../images/right_events.png')}/>
                  </View>
              </View>
            </TouchableHighlight>

            <TouchableHighlight style ={styles.mainEventsRow} underlayColor="white" onPress={Actions.bookmultiple} >
              <View style = {styles.eachRow}>
                  <View style={styles.firstcolumn}>
                    <Text style = {styles.rootText}>End Date</Text>
                  </View>
                  <View style={styles.secondcolumn}>
                    <Text style = {styles.calenderText}>( Thursday 13 Jun )</Text>
                  </View>
                  <View style={styles.thirdcolumn}>
                    <Image source = {require('../../../images/right_events.png')}/>
                  </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style ={styles.mainEventsRow} underlayColor="white">
              <View style = {styles.eachRow}>
                  <View style={styles.firstcolumn}>
                    <Text style = {styles.rootText}>Total Reservation:</Text>
                  </View>
                  <View style={styles.secondcolumn}>
                    <Text style = {[styles.calenderText, styles.alignTextRight]}>1</Text>
                  </View>
                  <View style={styles.thirdcolumn}></View>
              </View>
            </TouchableHighlight>

            <View style = {styles.buttonView}>
              <Button block style ={styles.buttonStyle} onPress = {Actions.bookmultiple} >
                  <Text>BOOKING NOW</Text>
              </Button>
            </View>
        </View>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ffffff',
    flex:1,
  },
  mainEventsRow:{
    paddingRight:25,
    paddingLeft:25,
    borderBottomWidth:1,
    borderBottomColor:'rgba(0, 0, 0, 0.1)'
  },
  eachRow:{
    flexDirection:'row',
    flexWrap:'wrap',
    flex:1,
    justifyContent:'center',
    paddingTop:15,
    paddingBottom:15
  },
  firstcolumn:{flex:0.65},
  secondcolumn:{flex:0.3},
  thirdcolumn:{
    flex:0.05,
    justifyContent:'flex-end'
  },
  buttonView:{
    flex:1,
    marginRight:15,
    marginLeft:15,
    marginTop:255
  },
  buttonStyle:{
    paddingBottom:15,
    paddingTop:15,
    backgroundColor:'#25AE88',
    borderRadius:2,
  },
  rootText:{
    fontSize:13,
    lineHeight:18,
    color:'rgba(0, 0, 0, 0.87)'
  },
  calenderText:{
    fontSize:11,
    lineHeight:13,
    color:'rgba(0, 0, 0, 0.87)'
  },
  alignTextRight:{
    alignSelf:'center'
  }

});
export default BookMultiple;
