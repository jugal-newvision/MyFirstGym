import React, { Component }  from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Container, Content, Button, Text } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, sliderItemWidth} from './EventDescriptionSlider/Styles_slider';
import { classsliderWidth, classsliderItemWidth} from './EventDescriptionSlider/Styles_slider1';
import SliderCarousel from './EventDescriptionSlider/Setting';
import SliderCarousel1 from './EventDescriptionSlider/Setting1';
import Spacer from '../UI/Spacer';
import { Actions } from 'react-native-router-flux';


class EventDescription extends Component {
  state = {
    desc: [
      {
        path: require('../../../images/desc1.png'),
      },
      {
        path:require('../../../images/desc2.png'),
      },
      {
        path:require('../../../images/desc3.png'),
      },
      {
        path:require('../../../images/desc4.png'),
      },
    ],
    descclass: [
      {
        title: 'Other Classes',
        path: require('../../../images/descclass1.png'),
        className:'SAME AGE'
      },
      {
        title: 'Other Schedule',
        path:require('../../../images/descclass2.png'),
        className:'SAME CLASS'
      },
      {
        title: 'Other Teacher',
        path:require('../../../images/descclass3.png'),
        className:'SAME CLASS'
      },
      {
        title: 'SWIM CLASS',
        path:require('../../../images/descclass1.png'),
        className:'SAME AGE'
      },
    ],
    booking:true,
  };

   renderListComponent = ({ item }) => (
     <SliderCarousel path={item.path}/>
   );
   renderListComponent = ({ item }) => (
    <SliderCarousel1 title={item.title} path={item.path} className={item.className}/>
  );

  BookingClickAction =() =>(
    this.setState({booking : !this.state.booking})
  )

  render() {
    return (
    <Container style={{backgroundColor:'#ffffff'}}>
      <Content>
        <View style={styles.container}>
          <Spacer size={40} />
          <View style = {styles.firstBoxContainer}>
            <View style = {styles.row}>
              <View style={[styles.column, styles.firstandlastcolumn]}>
                  <Text style = {styles.typeBlock}>Type</Text>
                  <Text style = {styles.nameBlock}>Gymnastic</Text>
              </View>
              <View style={[styles.column, styles.middlecolumn]}>
                  <Text style = {styles.typeBlock}>Age Group</Text>
                  <Text style = {styles.nameBlock}>3.5y-5y</Text>
              </View>
              <View style={[styles.column, styles.firstandlastcolumn, styles.borderRight]}>
                  <Text style = {styles.typeBlock}>Teacher</Text>
                  <Text style = {styles.nameBlock}>Tyler</Text>
              </View>
            </View>
            <View style = {styles.row}>
              <View style={[styles.column, styles.firstandlastcolumn, styles.borderBottom]}>
                  <Text style = {styles.typeBlock}>Time</Text>
                  <Text style = {styles.nameBlock}>11:00am</Text>
              </View>
              <View style={[styles.column, styles.middlecolumn, styles.borderBottom]}>
                  <Text style = {styles.typeBlock}>Day</Text>
                  <Text style = {styles.nameBlock}>Thursday 13th June</Text>
              </View>
              <View style={[styles.column, styles.firstandlastcolumn, styles.borderRight, styles.borderBottom]}>
                  <Text style = {styles.typeBlock}>Duration</Text>
                  <Text style = {styles.nameBlock}>45min</Text>
              </View>
            </View>
          </View>
          <Spacer size={20} />
              <Carousel
                containerCustomStyle={{ backgroundColor: 'white' }}
                contentContainerCustomStyle={{ backgroundColor: '#ffffff'}}
                data={this.state.desc}
                renderItem={this.renderListComponent}
                sliderWidth={sliderWidth}
                itemWidth={sliderItemWidth}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                enableSnap={true}
                loop={true}
                lockScrollWhileSnapping={true}
              />
          <Spacer size={20} />
          <View style = {styles.description}>
            <Text style = {styles.className}>Class Description</Text>
            <View style = {styles.classDescriprion}>
                <Text style = {styles.classDescriprionText} >Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s, when an unknown printer 
                  took a galley of type and scrambled it to make a type specimen book. 
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                  Lorem Ipsum is simply dummy text of the printing.</Text>
            </View>
          </View>
          <Spacer size={20} />
          <View style={styles.listHead}>
            <View style={{flex:0.8, justifyContent:'center'}}><Text style={styles.eventName}>You may also be interested in</Text></View>
            <View style={{flex:0.15, justifyContent:'center'}}><Text style={styles.viewStyle}>View All</Text></View>
            <View style={{flex:0.05, justifyContent:'center', textAlign:'right'}}><Image  style = {styles.iconStyle} source = {require('../../../images/arrow.png')} /></View>
        </View>
        <Spacer size={20} />
        <Carousel
          containerCustomStyle={{ backgroundColor: 'white' }}
          contentContainerCustomStyle={{ backgroundColor: '#ffffff'}}
          data={this.state.descclass}
          renderItem={this.renderListComponent}
          sliderWidth={classsliderWidth}
          itemWidth={classsliderItemWidth}
          activeSlideAlignment={'start'}
          inactiveSlideScale={1}
          inactiveSlideOpacity={1}
          enableSnap={true}
          loop={true}
          lockScrollWhileSnapping={true}
        />
         <Spacer size={20} />
        <View style = {styles.buttonView}>
          { (this.state.booking) ?
              (
                <View>
                  <Button block style ={styles.buttonStyle} onPress = {this.BookingClickAction} >
                    <Text>BOOKING NOW</Text>
                  </Button>
                  <View>
                    <TouchableHighlight onPress = {Actions.bookmultiple} underlayColor="white" >
                      <Text style = {styles.bookMultiple}>Book Multiple</Text>
                    </TouchableHighlight>
                  </View>
                </View>
              )
            :
            (
              <Button block style ={[styles.cancelButtonStyle, styles.cancelButtonStyle]} onPress = {this.BookingClickAction}>
                <Text> CANCEL BOOKING</Text>
              </Button>
            )
          }
            
        </View>
        <Spacer size={20} />
        </View>
      </Content>
    </Container>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginRight:15,
    marginLeft:15,
    backgroundColor:'#ffffff'
  },
  row:{
      flexDirection:'row',
      flexWrap:'wrap',
      flex:1,
  },
  firstBoxContainer:{
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4,
    elevation: 2,
    borderColor:'rgba(0, 0, 0, 0.25)',
    padding:10,
    borderBottomWidth:1
  },
  description:{},
  className:{
    fontSize:17,
    lineHeight:22,
    color:'#146FA9',
    fontWeight:'900'
  },
  classDescriprion:{
    marginRight:13,
    marginLeft:13,
    color:'#565656',
  },
  classDescriprion1:{
    color:'#565656',
    fontSize:13,
    lineHeight:16,
    textAlign:'justify'
  },
  column:{
    justifyContent:'center',
    borderRightColor:'rgba(0, 0, 0, 0.1)',
    borderRightWidth:1,
    borderBottomColor:'rgba(0, 0, 0, 0.1)',
    borderBottomWidth:1,
    alignContent:'center',
    textAlign:'center',
    paddingTop:15,
    paddingBottom:15,
  },
  borderRight:{
    borderRightWidth:0
  },
  borderBottom:{
    borderBottomWidth:0
  },
  firstandlastcolumn:{flex:0.3},
  middlecolumn:{flex:0.4},
  typeBlock:{
    color:'#8F8F8F',
    fontSize:12,
    lineHeight:16,
    alignSelf:'center'
  },
  nameBlock:{
    color:'#000000',
    fontSize:12,
    lineHeight:16,
    alignSelf:'center'
  },
  listHead:
  {
    flexDirection:'row', 
    flexWrap:'wrap', 
    flex:1,
  },
  eventName:{
    fontSize:16,
    lineHeight:22, 
    color:'#146FA9',
  },
  viewStyle:
  {
    alignSelf:'flex-end', 
    fontSize:12,
    lineHeight:16,
    color:'#565656'
  },
  iconStyle:{
    width:8, 
    height:11, 
    alignSelf:'flex-end'
  },
  buttonView:{
    flex:1
  },
  buttonStyle:{
    paddingBottom:15,
    paddingTop:15,
      backgroundColor:'#25AE88',
      borderRadius:2
  },
  cancelButtonStyle:{
    backgroundColor:'#EB4242',
  },
  buttonText:{
    fontSize:17,
    lineHeight:22,
    color:'#FFFFFF'
  },
  bookMultiple:{
    fontSize:12,
    lineHeight:16,
    textDecorationLine:'underline',
    alignSelf:'flex-end',
    marginTop:5,
    color:'#565656'
  },
});
export default EventDescription;
