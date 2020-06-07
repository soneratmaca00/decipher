//This is an example code for ViewPager//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button,Image,TouchableOpacity, TouchableHighlight,TouchableNativeFeedback } from 'react-native';
// import all basic components
import Swiper from "react-native-swiper";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ViewPager( { navigation } ) {
  

          
            return (
              <SafeAreaView style={{ flex: 1, alignItems:'center', backgroundColor:'white'}}>
              <Swiper style={styles.wrapper}  showsButtons={false} autoplay >
                <View style={styles.slide1}>
                  <Image style={styles.logo1} source={require('./Blue2.png')}/>
                  <Text style={styles.title}>Welcome to Decipher</Text>
                  <Text style={styles.description}>Earn high yield on your cash in an insured account</Text>
                </View>
                <View style={styles.slide2outer}>
                  <Image style={styles.kckLogo} source={require('./Blue2.png')}/>
                  <View style={styles.slide2}>
                    <Image style={styles.logo2} source={require('./money.png')}/>
                    <Text style={styles.title}>High Yieldon Your Cash</Text>
                    <Text style={styles.description}>Made possible by alternative markets with continuous compounding</Text>
                  </View>
                </View>
                <View style={styles.slide2outer}>
                  <Image style={styles.kckLogo} source={require('./Blue2.png')}/>
                  <View style={styles.slide2}>
                    <Image style={styles.logo2} source={require('./truck.png')}/>
                    <Text style={styles.title}>High Yieldon Your Cash</Text>
                    <Text style={styles.description}>Made possible by alternative markets with continuous compounding</Text>
                  </View>
                </View>
                <View style={styles.slide2outer}>
                <Image style={styles.kckLogo} source={require('./Blue2.png')}/>
                <View style={styles.slide2}>
                  <Image style={styles.logo2} source={require('./money5.png')}/>
                  <Text style={styles.title}>No Minumums. No Fees.</Text>
                  <Text style={styles.description}>No joke. Start with any amount. What you see is what you get.</Text>
                </View>
              </View>
              <View style={styles.slide2outer}>
                <Image style={styles.kckLogo} source={require('./Blue2.png')}/>
                <View style={styles.slide2}>
                  <Image style={styles.logo2} source={require('./money4.png')}/>
                  <Text style={styles.title}>Withdraw Anytime</Text>
                  <Text style={styles.description}>No lockup periods. Your money is ready whenever you need it.</Text>
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
            </SafeAreaView>
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
                marginTop:60,
              },
              logo2:{
                width:200,
                height:200,
                marginTop:60,
                marginBottom:5,
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