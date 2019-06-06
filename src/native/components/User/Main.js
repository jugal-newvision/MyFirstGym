import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';
import Slideshow from 'react-native-slideshow';
import {Container, Content} from 'native-base';
import Spacer from '../UI/Spacer';
import { Actions } from 'react-native-router-flux';
class Main extends React.Component {
constructor(props) {
super(props);

    this.state = {
        position: 1,
        interval: null,
        dataSource: [
            {
                title: 'Downtown Abu Dhabi',
                caption: ' ',
                url: require('../../../images/image-1.jpg'),
            }, {
                title: 'Abu Dhabi ladies Club',
                caption: ' ',
                url: require('../../../images/image-2.jpg'),
            }, {
                title: 'Abu Dhabi Club',
                caption: ' ',
                url: require('../../../images/image-3.jpg'),
            },
            {
              title: 'Swimming club',
              caption: ' ',
              url: require('../../../images/image-4.jpg'),
          },
        ],
    };
}

componentWillMount() {
    this.setState({
        interval: setInterval(() => {
            this.setState({
                position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
            });
        }, 5000)
    });
}

componentWillUnmount() {
    clearInterval(this.state.interval);
}

render() {
    return (
      <Container style ={{backgroundColor:'#ffffff'}}>
        <Content style={{marginRight:20, marginLeft:20}}>
          <View style ={{alignItems: 'center'}}>
            <Spacer size={10} />
            <Text>LOCATION NEAR YOU</Text>
            <Spacer size={10} />
            <Slideshow style={styles.imgStyle}
                dataSource={this.state.dataSource}
                position={this.state.position}
                arrowSize={0}
                onPositionChanged={position => this.setState({ position })} />
              <Spacer size={10} />
              <View style ={styles.adStyle}>
                <Text>Ad</Text>
              </View>
              <Spacer size={10} />
              <Text>DISCOVER</Text>
              <Spacer size={10} />
              <ImageBackground
                source={ require('../../../images/image-5.jpg')}
                style={{
                  height: 233,
                  width: '100%',
                  position: 'relative', // because it's parent
                  textAlign:'center',
                  alignContent:'center',
                  alignItems:'center',
                  borderRadius:4
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#2eaaeb',
                    position: 'absolute', // child
                    bottom: 10, // position where you want
                    textAlign:'center',
                    padding:10,
                    paddingLeft:20,
                    paddingRight:20,
                    borderWidth:1,
                    borderColor:'white',
                    backgroundColor:'white',
                  }}
                  onPress={Actions.favourite}
                >
                  EXPLORE
                </Text>
              </ImageBackground>

              <Spacer size={10} />
              <ImageBackground
                source={ require('../../../images/image-6.jpg')}
                style={{
                  height: 233,
                  width: '100%',
                  position: 'relative', // because it's parent
                  textAlign:'center',
                  alignContent:'center',
                  alignItems:'center',
                  borderRadius:4
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    color: '#2eaaeb',
                    position: 'absolute', // child
                    bottom: 10, // position where you want
                    textAlign:'center',
                    padding:10,
                    paddingLeft:20,
                    paddingRight:20,
                    borderWidth:1,
                    borderColor:'white',
                    backgroundColor:'white',
                  }}
                  onPress={Actions.schedule}
                >
                  SCHEDULE
                </Text>
              </ImageBackground>
              <Spacer size={10} />
          </View>
        </Content>
      </Container>
    );
}
}

const styles = StyleSheet.create({

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