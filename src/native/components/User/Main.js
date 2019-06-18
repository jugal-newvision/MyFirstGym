import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import {Container, Content} from 'native-base';
import Spacer from '../UI/Spacer';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, sliderItemWidth } from './MainLocationSlider/Styles_slider';
import SliderCarousel from './MainLocationSlider/Setting';
import { Actions } from 'react-native-router-flux';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
        {
          title: 'Downtown Abu Dhabi',
          path: require('../../../images/location1.jpg'),
          className:'location'
        },
        {
          title: 'Abu Dhabi Ladies Club',
          path:require('../../../images/location5.jpg'),
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
      ]
  } 
}

renderListComponent = ({ item }) => (
  <SliderCarousel title={item.title} path={item.path} className={item.className} />
);

render() {
    return (
      <Container style ={{backgroundColor:'#ffffff'}}>
        <Content>
          <View style ={styles.mainView}>
              <Spacer size={15} />
              <Text style = {styles.headingText}>LOCATION NEAR YOU</Text>
              <Spacer size={15} />
            </View>
            <View style ={{ marginLeft:15}}>
              <Carousel
                containerCustomStyle={{ backgroundColor: 'white', marginLeft:0, borderRadius:4 }}
                contentContainerCustomStyle={{ backgroundColor: '#ffffff', height: 150 }}
                data={this.state.locations}
                renderItem={this.renderListComponent}
                sliderWidth={sliderWidth}
                itemWidth={sliderItemWidth}
                activeSlideAlignment={'start'}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                loop = {true}
              />
              </View>
            <View style ={styles.mainView}>
              <Spacer size={10} />
              <View style ={styles.adStyle}>
                <Text>Ad</Text>
              </View>
              <Spacer size={15} />
              <Text style = {styles.headingText}>DISCOVER</Text>
              <Spacer size={15} />
              <ImageBackground
                source={ require('../../../images/image-5.jpg')}
                style={styles.imgBackground}
              >
                <Text style={[styles.headingText, styles.actionText]} onPress={Actions.explore}>EXPLORE</Text>
              </ImageBackground>

              <Spacer size={15} />
              <Text style = {styles.headingText}>SCHEDULE</Text>
              <Spacer size={15} />
              <ImageBackground
                source={ require('../../../images/image-6.jpg')}
                style={styles.imgBackground}
              >
                <Text style={[styles.headingText, styles.actionText]} onPress={Actions.schedule} >SCHEDULE</Text>
              </ImageBackground>
              <Spacer size={10} />
          </View>
        </Content>
      </Container>
    );
}
}

const styles = StyleSheet.create({

  mainView:{
    alignItems: 'center', 
    marginRight:15, 
    marginLeft:15
  },
  headingText:{
    fontSize:17,
    lineHeight:22,
    fontFamily:'SFPro_Text_Regular',
    color:'rgba(0, 0, 0, 0.87)'
  },
  imgBackground:{
    height: 233,
    width: '100%',
    position: 'relative', // because it's parent
    textAlign:'center',
    alignContent:'center',
    alignItems:'center',
    borderRadius:4
  },
  actionText:{
    position: 'absolute', // child
    bottom: 10, // position where you want
    textAlign:'center',
    padding:10,
    paddingLeft:20,
    paddingRight:20,
    borderWidth:1,
    borderColor:'white',
    backgroundColor:'white',
    fontFamily:'SFProDisplay_Medium',
    color:'#014863'
  },
  adStyle:{
    backgroundColor:'#cccccc',
    padding:20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
    width:'100%',
  },
  imgStyle:{
    borderRadius:0.5,
    width:'100%', 
    position: 'relative',
  }

});

export default Main;