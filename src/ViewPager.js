//This is an example code for ViewPager//
import React from 'react';
//import react in our code.
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
// import all basic components
import Swiper from "react-native-swiper";
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from './components/Slider'



export default function ViewPager( { navigation } ) {
  

          
            return (
              <SafeAreaView style={{ flex: 1, alignItems:'center', backgroundColor:'white'}}>
              <Swiper style={styles.wrapper}  showsButtons={false} autoplay >
                <Slider logoSource={require('./photos/Blue2.png')} logoStyle={{ width:150, height:150,marginTop:60}}
                Title='Welcome to Decipher' Description='Earn high yield on your cash in an insured account'/>
                <Slider kckLogoSource={require('./photos/Blue2.png')} logoStyle={{ width:200,height:200,marginTop:60,marginBottom:5}}
                logoSource={require('./photos/money.png')} 
                Title='High Yieldon Your Cash' Description='Made possible by alternative markets with continuous compounding' />
                <Slider kckLogoSource={require('./photos/Blue2.png')} logoStyle={{ width:200,height:200,marginTop:60,marginBottom:5}}
                logoSource={require('./photos/truck.png')} 
                Title='High Yieldon Your Cash' Description='Made possible by alternative markets with continuous compounding' />
                <Slider kckLogoSource={require('./photos/Blue2.png')} logoStyle={{ width:200,height:200,marginTop:60,marginBottom:5}}
                logoSource={require('./photos/money5.png')} 
                Title='No Minumums. No Fees.' Description='No joke. Start with any amount. What you see is what you get.' />
                <Slider kckLogoSource={require('./photos/Blue2.png')} logoStyle={{ width:200,height:200,marginTop:60,marginBottom:5}}
                logoSource={require('./photos/money4.png')} 
                Title='Withdraw Anytime' Description='No lockup periods. Your money is ready whenever you need it.' />
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