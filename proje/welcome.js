import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
  
} from 'react-native';

let sliderList = [
    {id:1, imageSource: './kcklogo.png', title:'Welcome to Decipher', description:'Earn high yield on your cash in an insured account'}
]

export default function Welcome() {
   


    return(
        <View style={styles.container}>
            <View style={styles.logocontainer}>
                <View style={styles.innercontainer}>
                    <Image  style={styles.logo} source={require('./kcklogo.png')}/>
                    <Text style={styles.title} >Welcome to Decipher</Text>
                    <Text style={styles.description} >Earn high yield on your cash in an insured account</Text>
                </View>
                <View style={styles.innercontainer}>
                    <Image  style={styles.logo} source={require('./kcklogo.png')}/>
                    <Text style={styles.title} >Welcome to Decipher</Text>
                    <Text style={styles.description} >Earn high yield on your cash in an insured account</Text>
                </View>
                <View style={styles.innercontainer}>
                    <Image  style={styles.logo} source={require('./kcklogo.png')}/>
                    <Text style={styles.title} >Welcome to Decipher</Text>
                    <Text style={styles.description} >Earn high yield on your cash in an insured account</Text>
                </View>      
            </View>
            <View style={styles.topcontainer}>
                <View style={styles.top}></View>
                <View style={styles.top}></View>
                <View style={styles.top}></View>
                <View style={styles.top}></View>
                <View style={styles.top}></View>
            </View>
            <View style={styles.signup}>
                <Text style={styles.signuptext}>Sign Up</Text>
            </View>
            <View >
                <Text style={styles.logintext} >Log In</Text>
            </View>
        </View>

    )
}

const styles=  StyleSheet.create({
    logocontainer:{
        height:450,
       justifyContent:'center',
       flexDirection:'row',
       width:300,
       overflow:'hidden'

    },
    innercontainer:{
        alignItems: 'center',
        height:450,
        width:300
        

    },
    logo:{
        height:100,
        width:100,
    },
    title:{
        fontSize:25,
        color:'#696969'
    },
    description:{
        fontSize:12,
        color:'#A9A9A9',
        width:250,
        textAlign:'center',
        
    },

    container:{
        backgroundColor:'white',
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    top: {
        backgroundColor:'#A9A9A9',
        width: 5,
        height:5,
        borderRadius:3,
        marginHorizontal:3,
        marginBottom:10,
    },
    topcontainer:{
        flexDirection:'row',
        
    },
    signup:{
        backgroundColor:'#4169E1',
        width:'80%',
        padding:12,
        alignItems:'center',
        borderRadius:25,
        marginBottom:10,

    },
    signuptext:{
        color:'white',
        fontSize:18,
    },
    logintext:{
        color:'#4169E1'
    },


})