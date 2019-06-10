import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, StyleSheet,  } from 'react-native';
import Barcode from 'react-native-barcode-builder';
import {Container, Content,Text} from 'native-base';
import Spacer from '../UI/Spacer';

const Mycard = ({ member, logout }) => (
  <Container>
    <View style ={{flex:1, textAlign:'center'}}>
    <Content>
        <View style = {styles.rootView}>
            <View style ={{margin:15, flexDirection:'row', flexWrap:'wrap', flex:1}}>
                <Text style ={styles.profileName}>MFG</Text>
                <Text style ={[styles.profileName, styles.cardColor]}>Card</Text>
                <View style={{alignContent:'flex-end', textAlign:'right',flex:1}}>
                   <Text style = {styles.balanceText}>Total Points</Text>
                   <Text style = {styles.balanceBoldText}>200</Text>
                </View>
            </View>
            <Spacer size={10} />
            <View style={{width:'80%', alignSelf:'center'}}>
                <Barcode value="Hello World" format="CODE128" height={45} text = 'aqb23bmcvds3W3' width={1.55} />
            </View>
        </View>
    </Content>
    </View>
  </Container>
);

const styles = StyleSheet.create({
rootView:{
    backgroundColor:'#2eaaeb',
    minHeight:200,
    borderRadius:12,
    position:'relative',
    width:'90%',
    alignSelf:'center',
    marginTop:50,
    color:'#ffffff',
    paddingBottom:15
},
profileName:{
    fontSize:22,
    textAlign:'left',
    color:'#ffffff'
},  
cardColor:{
    color:'#ddd9d9',
    fontStyle: 'italic'
},
balanceText:{
    fontSize:15,
    textAlign:'right',
    color:'#ffffff'
  },
balanceBoldText:{
    fontSize:26,
    fontWeight:'bold',
    textAlign:'right',
    textTransform: 'uppercase',
    color:'#ffffff'
  },
});

Mycard.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

Mycard.defaultProps = {
  member: {},
};

export default Mycard;
