import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

import RadialGradient from 'react-native-radial-gradient';

import IconCheck from 'react-native-vector-icons/MaterialCommunityIcons'
import {useDispatch,useSelector} from 'react-redux'

const gradientwidth = 245;
const gradientHeight = 285;


export default function DepositSuccess(props) {
   const closeModalText = 'false'
   const deposit1 = useSelector((state) => state.deposit)
    
    
    return (
         <View style={styles.outerView} onTouchEnd={() => 
            props.closeModal(closeModalText)}>
            <View style={styles.gradientContainer} onTouchEnd={(e) => e.stopPropagation()}>
            
            <RadialGradient style={styles.gradient}
            colors={['#003380','#005ce6','#1a75ff']}
            stops={[0.05,0.3, 0.6]}
            center={[gradientwidth/2,gradientHeight/2]}
            radius={500}>
            {
                <View style={styles.gradientInner}>
                <IconCheck name="check-circle-outline" size={80} color="white"  style={[styles.iconCheck]}/>
                <Text style={styles.success}>Success!</Text>
                <Text style={styles.amount}>${deposit1}</Text>
                <Text style={styles.description}>has been instantly deposited to your account</Text>            
                <TouchableOpacity style={styles.done}
                onPress={() => 
                    props.closeModal(closeModalText)
                  }                      
                >
                    <Text style={[styles.doneText]}>Done</Text>
                </TouchableOpacity>
            </View>
            }
            </RadialGradient>
           
            </View>
        </View>


)
}





const styles = StyleSheet.create({
    outerView:{
        height:'100%',
        alignItems:'center',
        paddingTop:80,
        backgroundColor:'rgba(0, 0, 0,0.5)'
    },

    gradientContainer:{
        height:gradientHeight,
        width:gradientwidth,
        borderRadius:20,
        backgroundColor:'blue',
        overflow:'hidden',
        
        
    },
    
    gradient:{
        height:gradientHeight,
        width:gradientwidth,
        
    },
    gradientInner:{
        alignItems:'center',
    },
    iconCheck:{
        marginTop:10,
    },
    success:{
        color:'white',
        fontSize:38,
        fontWeight:'bold',
    },
    amount:{
        color:'#CFDAE8',
        fontSize:25,
    },
    description:{
        color:'#B8CBE2',
        width:150,
        textAlign:'center',
        fontSize:12,
    },
    done:{
        backgroundColor:'#437CC0',
        width:170,
        padding:10,
        alignItems:'center',
        borderRadius:20,
        marginTop:20,
    },
    doneText:{
        color:'white',
    },
    
    
   

})

