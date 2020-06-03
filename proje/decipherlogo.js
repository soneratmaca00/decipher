import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image
  
} from 'react-native';

export default function Logo() {
   


    return(
        <View style={styles.container}>
            <Image  style={styles.stretch} source={require('./logo.png')}/>
        </View>

    )
}

const styles=  StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },

    stretch: {
        width: 300,
        height: 300,
      },

})