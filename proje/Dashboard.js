import React from 'react';
import { StyleSheet, View, Text, Button,Dimensions,Image, TouchableOpacity } from 'react-native'

import RadialGradient from 'react-native-radial-gradient';

const screenWidth = Math.round(Dimensions.get('window').width)

export default function Dashboard({ navigation }) {
    
    return (
        <View style={{alignItems:'center'}}>            
            <RadialGradient style={styles.gradient}
                        colors={['#003380','#005ce6','#1a75ff']}
                        stops={[0.05,0.3, 0.6]}
                        center={[screenWidth/2,100]}
                        radius={400}>
                {
                <View style={styles.containerouter}>
                    <View style={styles.smallItemsList}>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Deposit')}                        
                        >
                            <Text style={[styles.smallItems, {marginRight:30}]}>Settings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Deposit')}                        
                        >
                            <Text style={[styles.smallItems, {marginRight:30}]}>Deposit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('Deposit')}                        
                        >
                            <Text style={styles.smallItems}>Earn</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.balance}>Balance</Text>
                        <Text style={styles.balanceAmount}>$31,937.84</Text>
                    </View>  
                </View>
                    
                    
                }
            </RadialGradient>
                <View style={styles.whitecontainer}>
                    <View>
                        <View style={styles.whiteContainerItem1}>
                            <Image style={styles.whiteContainerItemImg} source={require('./kcklogo.png')}/>
                            <Text style={styles.whiteContainerItemTxt}>Interest Earned</Text>
                            <Text style={styles.whiteContainerItemAmount}>$1,927.36</Text>
                        </View>
                        <View style={styles.whiteContainerItem2}>
                            <Image style={styles.whiteContainerItemImg} source={require('./kcklogo.png')}/>
                            <Text style={styles.whiteContainerItemTxt}>Current APY</Text>
                            <Text style={styles.whiteContainerItemAmount}>3.0%</Text>
                        </View>
                        <View style={styles.whiteContainerItem3}>
                            <Image style={styles.whiteContainerItemImg} source={require('./kcklogo.png')}/>
                            <Text style={styles.whiteContainerItemTxt}>Lockup Period</Text>
                            <Text style={styles.whiteContainerItemAmount}>None</Text>
                        </View>
                    </View>
                    <View style={styles.secondBlock}>
                        <View style={styles.whiteContainerItem1}>
                            <Image style={styles.whiteContainerItemImg} source={require('./kcklogo.png')}/>
                            <Text style={styles.whiteContainerItemTxt}>This Week</Text>
                            <Text style={styles.whiteContainerItemAmount}>$33.83</Text>
                        </View>
                        <View style={styles.whiteContainerItem3}>
                            <Image style={styles.whiteContainerItemImg} source={require('./kcklogo.png')}/>
                            <Text style={styles.whiteContainerItemTxt}>This Month</Text>
                            <Text style={styles.whiteContainerItemAmount}>$142.09</Text>
                        </View>
                    </View>
                    <View style={styles.thirdBlock}>
                        <Image style={styles.chartImg} source={require('./kcklogo.png')}/>
                    </View>
                </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    containerouter:{
        flex:1,
        alignItems:'center',
        marginBottom:25,
    },

    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    gradient:{
        width:screenWidth,
        height:200,
    },
    balance:{
        color:'#cccccc',
        fontSize:17,
        marginTop:10,
    },
    balanceAmount:{
        color:'white',
        fontSize:34,
    },
    smallItems:{
        color:'white',
        backgroundColor:'rgba(204, 204, 204, 0.5)',        
        width:60,
        padding:2,
        borderRadius:10,
        textAlign:'center',      
    },
    smallItemsList:{
        marginTop:20,
        flexDirection:'row',
        position:'absolute',
        
    },
    whitecontainer:{
        position:'absolute',
        marginTop:158,
        width:'100%',
        alignItems:'center',
    },
    
    whiteContainerItem1:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'80%',
        padding:12,
        justifyContent:'space-between',
        borderTopLeftRadius:12,
        borderTopRightRadius:12,
        marginBottom:2,
    },
    whiteContainerItem2:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'80%',
        padding:12,
        justifyContent:'space-between',
        marginBottom:2,
    },
    whiteContainerItem3:{
        flexDirection:'row',
        backgroundColor:'white',
        width:'80%',
        padding:12,
        justifyContent:'space-between',
        borderBottomLeftRadius:12,
        borderBottomRightRadius:12,
    },
    whiteContainerItemImg:{
        width:20,
        height:20,
        
    },
    whiteContainerItemTxt:{
        width:100,
        color: '#4d4d4d',
        fontWeight:'bold',
        fontSize:12,
    },
    whiteContainerItemAmount:{
        width:80,
        textAlign:'right',
        color:'#737373',
        fontSize:12,
        marginRight:5,
    },
    secondBlock:{
        marginTop:15,
    },
    thirdBlock:{
        marginTop:15,
       
    },
    chartImg:{
        width:320,
        height:130,
        borderRadius:12,
    }

})

