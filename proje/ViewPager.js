//This is an example code for ViewPager//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button,Image,TouchableOpacity, TouchableHighlight,TouchableNativeFeedback } from 'react-native';
// import all basic components
import Swiper from "react-native-swiper";


export default function ViewPager( { navigation } ) {
  

          
            return (
              <View style={{ flex: 1, alignItems:'center', backgroundColor:'white'}}>
              <Swiper style={styles.wrapper}  showsButtons={false} autoplay >
                <View style={styles.slide1}>
                  <Image style={styles.logo1} source={require('./kcklogo.png')}/>
                  <Text style={styles.title}>Welcome to Decipher</Text>
                  <Text style={styles.description}>Earn high yield on your cash in an insured account</Text>
                </View>
                <View style={styles.slide2outer}>
                  <Image style={styles.kckLogo} source={require('./kcklogo.png')}/>
                  <View style={styles.slide2}>
                    <Image style={styles.logo2} source={require('./kaplumbaga.png')}/>
                    <Text style={styles.title}>High Yieldon Your Cash</Text>
                    <Text style={styles.description}>Made possible by alternative markets with continuous compounding</Text>
                  </View>
                </View>
                <View style={styles.slide3outer}>
                  <Image style={styles.kckLogo} source={require('./kcklogo.png')}/>
                  <View style={styles.slide3}>
                    <Image style={styles.logo3} source={require('./truck.png')}/>
                    <Text style={styles.title}>High Yieldon Your Cash</Text>
                    <Text style={styles.description}>Made possible by alternative markets with continuous compounding</Text>
                  </View>
                </View>
            </Swiper>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Signup')}
             
              >
            <View style={styles.signUp}>
              
              
               <Text style={styles.signUpText}>Sign Up</Text>
                            
            </View>
            </TouchableOpacity>
            <View style={styles.logIn} >
              <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}
              >
                <Text style={styles.logInText} >Log In</Text>
              </TouchableOpacity>
            </View>
            </View>
            )
            }
            const styles = StyleSheet.create({
              wrapper: {},
              slide1: {
                flex: 1,
                justifyContent:'center',
                alignItems: 'center',
                backgroundColor: 'white'
              },
              slide2outer:{
                flex:1,
              },
              slide2: {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white'
              },
              slide3outer:{
                flex:1,
              },
              slide3: {
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
              logo1:{
                width:150,
                height:150,
              },
              logo2:{
                width:200,
                height:200,
                marginTop:30,
              },
              logo3:{
                width:200,
                height:200,
                marginTop:30,
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