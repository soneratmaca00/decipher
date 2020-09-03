import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native'


const Slider = (props) => {
    return(
      <View style={styles.slide2outer}>
        <Image style={styles.kckLogo} source={props.kckLogoSource}/>
        <View style={styles.slide2}>
          <Image style={props.logoStyle} source={props.logoSource}/>
          <Text style={styles.title}>{props.Title}</Text>
          <Text style={styles.description}>{props.Description}</Text>
        </View>
      </View>
    )
  }

  export default Slider


  const styles = StyleSheet.create({
    
    slide2outer:{
      flex:1,
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white'
    },
    title: {
      color: '#808080',
      fontSize: 20,
      fontWeight: 'bold'
    },
    description:{
      color:'#b3b3b3',
      marginBottom:130,
      flexWrap: 'wrap',
      width:240,
      textAlign:'center'
    },  
    kckLogo:{
      width:60,
      height:60,
    },
    signUp:{
      backgroundColor:'#0066ff',
      width:300,
      padding:10,
      borderRadius:20,
      alignItems:'center',
      marginVertical:10,
    },
    signUpText:{
      color:'white',
      fontSize:15,
      fontWeight:'bold',
    },
    logInText:{
      color:'#0066ff',
      fontWeight:'bold',
      marginBottom:20,
    }
    
  })