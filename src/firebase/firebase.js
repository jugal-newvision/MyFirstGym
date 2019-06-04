import Axios from 'axios';
import React from 'react';

import {View, Text} from 'react-native';

// const instance = Axios.create({
//     baseURL:'https://myfirstgym-ebf8b.firebaseio.com/'
// });
let x = "";
const Firebase = () =>{
    
    fetch('https://myfirstgym-ebf8b.firebaseio.com/Users.json', {
         method: 'GET',
        headers: {
            Accept: 'application/json',
          },
        },
        ).then(response => {
          if (response.ok) {
            response.json().then(responseData => {
               // return(<View><Text>{responseData}</Text></View>);
                alert(response);
            });
          }
          else{
            alert(response);
           // return(<View><Text>{response.error}</Text></View>);
          }
        });
        return <View><Text></Text></View>
    }
export default Firebase;