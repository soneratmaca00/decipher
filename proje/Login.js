import React from 'react';
import { StyleSheet, View, Text, Image,Dimensions, 
    TextInput, TouchableOpacity,SafeAreaView, KeyboardAvoidingView } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { TouchableWithoutFeedback, ScrollView } from 'react-native-gesture-handler';

const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)
export default function Login({ navigation }) {
    return (
        <SafeAreaView style={{backgroundColor:'#FAFAFA', height:screenHeight,}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
                <View style={styles.topBar} >
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.goBack()}                        
                    >
                        <Icon name="close" size={30} color="#8c8c8c"  style={styles.topIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Signup')}                        
                    >
                        <Text style={styles.topText}>Sign Up</Text>
                    </TouchableOpacity>          
                </View>
                <View style={styles.smallContainer}>
                    <Image style={styles.smallImg} source={require('./Blue2.png')}/>
                    <Text style={styles.LogInText}>Log In</Text>
                </View>
                <View style={styles.loginContainerOuter}>
                    <View style={styles.loginContainer}>
                        <TextInput style={styles.textInput} placeholder='Email'></TextInput>
                        <TextInput style={styles.textInput} placeholder='Password'></TextInput>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Dashboard')}
                            
                            >
                            <View style={styles.logIn}>
                            
                            
                            <Text style={styles.logInText}>Log In</Text>
                                            
                            </View>
                        </TouchableOpacity>
                        <View style={styles.forgotPassword} >
                            <TouchableOpacity
                            style={styles.button}
                            onPress={() => navigation.navigate('Login')}
                            >
                            <Text style={styles.forgotPasswordText} >Forgot Password?</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={styles.version}>Version 1.0.0</Text>
                </View>

                </ScrollView>
        </SafeAreaView>
    )   
}

const styles=StyleSheet.create({
    topBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10,
    },
    topIcon:{
        marginLeft:10,
    },
    topText:{
        fontSize:15,
        color:'#8c8c8c',
        marginRight:10,

    },
    smallContainer:{
        width:screenWidth,
        alignItems:'center',
    },
    smallImg:{
        width:80,
        height:80,
    },
    loginContainerOuter:{
        alignItems:'center',
        marginTop:50,
    },
    loginContainer:{
        width:'80%',
        alignItems:'center',
        backgroundColor:'white',
    },
    LogInText:{
        color:'#2F7AE1',
        fontSize:20,
    },
    logIn:{
        backgroundColor:'#0066ff',
        width:230,
        padding:10,
        borderRadius:20,
        alignItems:'center',
        marginVertical:10,
      },
      logInText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
      },
      forgotPasswordText:{
        color:'#8c8c8c',
        fontWeight:'bold',
        marginBottom:20,
      },
      textInput:{
        width:'80%',
        paddingVertical: 15
      },
      version:{
          fontSize:12,
          color:'#cccccc',
      },

})