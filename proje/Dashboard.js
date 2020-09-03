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
import DashBoardListItem from './components/DashboardListİtem'
import {useDispatch,useSelector} from 'react-redux'

const screenWidth = Math.round(Dimensions.get('window').width)


export default function Dashboard({ navigation }) {
    const data = [40, 48, 50, 55, 63, 65 ]
    const days = ['Feb', 'Mar', 'Apr','May','Jun','Jul']
    const contentInset = { top: 20, bottom: 20 }
    const iconUSD = (<IconUSD name="currency-usd" size={25} color="#428DFF"  style={styles.topIcon} />)
    const iconPig = (<IconPig name="piggy-bank" size={25} color="#428DFF"  style={styles.topIcon} />)
    const iconAlarm = ( <IconAlarm name="alarm" size={25} color="#428DFF"  style={styles.topIcon} />)
    const iconGraph = (<IconGraph name="bar-graph" size={25} color="#428DFF"  style={styles.topIcon} />)
    const dispacth = useDispatch(); 

    const clickDeposit = () =>{
        navigation.navigate('Deposit')
        dispacth({
            type:'DEPOSITCHANGE',
            payload:''
          })

    }
    
    return (
        <SafeAreaView style={styles.safeAreaView} >
            <RadialGradient style={styles.gradient}
            colors={['#003380','#005ce6','#1a75ff']}
            stops={[0.05,0.3, 0.6]}
            center={[screenWidth/2,100]}
            radius={700}>
            {
            <View style={styles.containerouter}>
                <View style={styles.smallItemsList}>
                    <TouchableOpacity style={[styles.smallItems]}
                    onPress={() => navigation.navigate('Settings')}                        
                    >
                        <Text style={[styles.smallItemsText]}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.smallItems]}
                    onPress={() => clickDeposit()}                        
                    >
                        <Text style={[styles.smallItemsText]}>Deposit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.smallItems]}
                    onPress={() => clickDeposit()}                        
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
                        <DashBoardListItem firstIcon={iconUSD} firstText='Interest Earned' secondText='$1,927.36'/>
                        <DashBoardListItem firstIcon={iconPig} firstText='Current APY' secondText='3.0%'/>
                        <DashBoardListItem firstIcon={iconAlarm} firstText='Lockup Period' secondText='None'/>
                    </View>
                    <View style={styles.whiteContainerSecondBlock}>
                        <DashBoardListItem firstIcon={iconGraph} firstText='This Week' secondText='$33.83'/>
                        <DashBoardListItem firstIcon={iconGraph} firstText='This Month' secondText='$142.09'/>
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
        borderRadius:20,
        paddingVertical: 3,
        width: 70,
        alignItems: 'center'
    },
    smallItemsText:{
        color:'white',      
        textAlign:'center',    
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

