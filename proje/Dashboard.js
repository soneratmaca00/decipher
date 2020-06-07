import React from 'react';
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'

import RadialGradient from 'react-native-radial-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import IconUSD from 'react-native-vector-icons/MaterialCommunityIcons'; 
import IconPig from 'react-native-vector-icons/FontAwesome5'; 
import IconAlarm from 'react-native-vector-icons/MaterialCommunityIcons'; 
import IconGraph from 'react-native-vector-icons/Entypo';
import { AreaChart, XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
const screenWidth = Math.round(Dimensions.get('window').width)


export default function Dashboard({ navigation }) {
    const data = [40, 48, 50, 55, 63, 65 ]
    const days = ['Feb', 'Mar', 'Apr','May','Jun','Jul']
    const contentInset = { top: 20, bottom: 20 }


    
    
    return (
        <SafeAreaView style={styles.safeAreaView} >
            <RadialGradient style={styles.gradient}
            colors={['#003380','#005ce6','#1a75ff']}
            stops={[0.05,0.3, 0.6]}
            center={[screenWidth/2,100]}
            radius={200}>
            {
            <View style={styles.containerouter}>
                <View style={styles.smallItemsList}>
                    <TouchableOpacity style={[styles.smallItems]}
                    onPress={() => navigation.navigate('Settings')}                        
                    >
                        <Text style={[styles.smallItemsText]}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.smallItems]}
                    onPress={() => navigation.navigate('Deposit')}                        
                    >
                        <Text style={[styles.smallItemsText]}>Deposit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.smallItems]}
                    onPress={() => navigation.navigate('Earn1')}                        
                    >
                        <Text style={styles.smallItemsText}>Earn</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balance}>Balance</Text>
                    <Text style={styles.balanceAmount}>$31,937.84</Text>
                </View>  
            </View>
                
                
            }
            </RadialGradient>

            
                <View style={styles.whitecontainer}>
                    <View style={styles.whiteContainerfirstBlock}>
                        <View style={[styles.whiteContainerItem,{borderBottomWidth:2, borderBottomColor:'#ECF0F5'}]}>
                            <IconUSD name="currency-usd" size={25} color="#428DFF"  style={styles.topIcon} />
                            <View style={styles.whiteContainerItemInner}>
                            <Text style={styles.whiteContainerItemTxt}>Interest Earned</Text>
                            <Text style={styles.whiteContainerItemAmount}>$1,927.36</Text>
                            </View>
                        </View>
                        <View style={[styles.whiteContainerItem,{borderBottomWidth:2, borderBottomColor:'#ECF0F5'}]}>
                            <IconPig name="piggy-bank" size={25} color="#428DFF"  style={styles.topIcon} />
                            <View style={styles.whiteContainerItemInner}>
                            <Text style={styles.whiteContainerItemTxt}>Current APY</Text>
                            <Text style={styles.whiteContainerItemAmount}>3.0%</Text>
                            </View>
                        </View>
                        <View style={styles.whiteContainerItem}>
                            <IconAlarm name="alarm" size={25} color="#428DFF"  style={styles.topIcon} />
                            <View style={styles.whiteContainerItemInner}>
                            <Text style={styles.whiteContainerItemTxt}>Lockup Period</Text>
                            <Text style={styles.whiteContainerItemAmount}>None</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.whiteContainerSecondBlock}>
                        <View style={[styles.whiteContainerItem,{borderBottomWidth:2, borderBottomColor:'#ECF0F5'}]}>
                            <IconGraph name="bar-graph" size={25} color="#428DFF"  style={styles.topIcon} />
                            <View style={styles.whiteContainerItemInner}>
                            <Text style={styles.whiteContainerItemTxt}>This Week</Text>
                            <Text style={styles.whiteContainerItemAmount}>$33.83</Text>
                            </View>
                        </View>
                        <View style={[styles.whiteContainerItem]}>
                            <IconGraph name="bar-graph" size={25} color="#428DFF"  style={styles.topIcon} />
                            <View style={styles.whiteContainerItemInner}>
                            <Text style={styles.whiteContainerItemTxt}>This Month</Text>
                            <Text style={styles.whiteContainerItemAmount}>$142.09</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.thirdBlock}>
                    <AreaChart
                    style={{ height: 100,marginHorizontal:10 }}
                    data={data}
                    contentInset={{ top: 10, bottom: 10 }}
                    curve={shape.curveNatural}
                    svg={{ fill: 'rgba(72, 142, 235, 0.8)' }}
                    >
                    
                    </AreaChart>
                    <XAxis
                    style={{ marginHorizontal: 0 }}
                    data={data}
                    formatLabel={(value, index) => days [index]}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black' }}
                    />

                    </View>
        
                    
                </View> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView:{
        width:'100%',
        height:'100%',
    },
    
    gradient:{
        width:'100%',
        height:200,
    },
    
    smallItems:{
        color:'white',
        backgroundColor:'rgba(204, 204, 204, 0.5)',        
        width:60,
        padding:2,
        borderRadius:10,
        textAlign:'center',
              
    },
    smallItemsText:{
        color:'white',      
        textAlign:'center',
        width:60,      
    },
    
    smallItemsList:{
        flexDirection:'row',
        marginHorizontal:50,
        justifyContent:'space-between',
        marginTop:20,
    },
    balanceContainer:{
        
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        marginTop:20,
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
    whitecontainer:{
        marginHorizontal:15,
        marginTop:-30,
    },
    whiteContainerfirstBlock:{
        backgroundColor:'white',
        borderRadius:20,
        marginBottom:15,
    },
    whiteContainerItem:{
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:20,
        alignItems:'center',
    },
    whiteContainerItemInner:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:5,
    },
    whiteContainerSecondBlock:{
        backgroundColor:'white',
        borderRadius:20,
        marginBottom:15,
    },
    thirdBlock:{
        backgroundColor:'white',
        height:120,
        borderRadius:20,
    },

})

