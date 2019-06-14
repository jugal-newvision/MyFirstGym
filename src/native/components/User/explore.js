import React, { Component }  from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Container, Content, List, ListItem, Body, Left, Text, Icon } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, sliderItemWidth } from './ExploreSlider/Styles_slider';
import SliderCarousel from './ExploreSlider/Setting';
import Spacer from '../UI/Spacer';


class Explore extends Component {
  state = {
    locations: [
      {
        title: 'Downtown Abu Dhabi',
        path: require('../../../images/Location1.png'),
        className:'location'
      },
      {
        title: 'Abu Dhabi Ladies Club',
        path:require('../../../images/Location2.png'),
        className:'location'
      },
      {
        title: 'Explore More',
        path:require('../../../images/location3.jpg'),
        className:'location'
      },
      {
        title: 'Downtown Abu Dhabi',
        path:require('../../../images/location4.jpg'),
        className:'location'
      },
    ],
    classes: [
      {
        title: 'SWIM CLASS',
        path: require('../../../images/class1.jpg'),
        className:'classes'
      },
      {
        title: 'FITNESS CLASS',
        path:require('../../../images/class2.jpg'),
        className:'classes'
      },
      {
        title: 'INDEPENDENT GYM',
        path:require('../../../images/class3.jpg'),
        className:'classes'
      },
      {
        title: 'SWIM CLASS',
        path:require('../../../images/class4.jpg'),
        className:'classes'
      },
    ],
    camps: [
      {
        title: 'KIDS HOLIDAY CAMPS',
        path: require('../../../images/camp1.jpg'),
        className:'camps'
      },
      {
        title: 'PARENTS NIGHT OUT',
        path:require('../../../images/camp2.jpg'),
        className:'camps'
      },
      {
        title: 'COMING SOON',
        path:require('../../../images/camp3.jpg'),
        className:'camps'
      },
      {
        title: 'PARENTS NIGHT OUT',
        path:require('../../../images/camp4.jpg'),
        className:'camps'
      },
    ],
  };

  renderListComponent = ({ item }) => (
    <SliderCarousel title={item.title} path={item.path} className={item.className} />
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listHead}>
          <View style={{flex:0.5}}><Text style={styles.eventName}>Locations</Text></View>
          <View style={{flex:0.4}}><Text style={styles.viewStyle}>View All</Text></View>
          <View style={{flex:0.1, justifyContent:'center'}}><Image  style = {styles.iconStyle} source = {require('../../../images/arrow.png')} /></View>
        </View>
        <Spacer size={20} />
        <Carousel
          containerCustomStyle={{ backgroundColor: 'white' }}
          contentContainerCustomStyle={{ backgroundColor: '#ffffff', height: 150 }}
          data={this.state.locations}
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
         <View style={styles.listHead}>
          <View style={{flex:0.5}}><Text style={styles.eventName}>Classes</Text></View>
          <View style={{flex:0.4}}><Text style={styles.viewStyle}>View All</Text></View>
          <View style={{flex:0.1, justifyContent:'center'}}><Image  style = {styles.iconStyle} source = {require('../../../images/arrow.png')} /></View>
        </View>
        <Spacer size={20} />
        <Carousel
          containerCustomStyle={{ backgroundColor: 'white' }}
          contentContainerCustomStyle={{ backgroundColor: '#ffffff', height: 150 }}
          data={this.state.classes}
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
         <View style={styles.listHead}>
          <View style={{flex:0.5}}><Text style={styles.eventName}>Camps</Text></View>
          <View style={{flex:0.4}}><Text style={styles.viewStyle}>View All</Text></View>
          <View style={{flex:0.1, justifyContent:'center'}}><Image  style = {styles.iconStyle} source = {require('../../../images/arrow.png')} /></View>
        </View>
        <Spacer size={20} />
        <Carousel
          containerCustomStyle={{ backgroundColor: 'white' }}
          contentContainerCustomStyle={{ backgroundColor: '#ffffff', height: 150 }}
          data={this.state.camps}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
    backgroundColor: '#ffffff',
  },
  eventName:{
    fontSize:17, 
    lineHeight:22,
    color:'#565656',
  },
  viewStyle:
  {
    alignSelf:'flex-end', 
    fontSize:10,
    color:'#565656'
  },
  iconStyle:{
    width:8, 
    height:10, 
    alignSelf:'center', 
    marginTop:14
  },
  listHead:
  {
    flexDirection:'row', 
    flexWrap:'wrap', 
    flex:1, 
    paddingLeft:10, 
    paddingRight:10, 
    paddingBottom:20, 
    paddingBottom:20, 
    maxHeight:20
  },
});
export default Explore;
