import * as React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import IconUSD from 'react-native-vector-icons/MaterialCommunityIcons'; 
import IconPig from 'react-native-vector-icons/FontAwesome5'; 
import IconAlarm from 'react-native-vector-icons/MaterialCommunityIcons'; 
import IconGraph from 'react-native-vector-icons/Entypo';


export default function Earn1 () {
    return(
<View style={styles.outer}>
    <View style={styles.whiteContainerfirstBlock}>
    <View style={[styles.whiteContainerItem,{borderBottomWidth:2, borderBottomColor:'#ECF0F5'}]}>
        <IconUSD name="currency-usd" size={25} color="#428DFF"  style={styles.topIcon} />
        <Text style={styles.whiteContainerItemTxt}>Interest Earned</Text>
        <Text style={styles.whiteContainerItemAmount}>$1,927.36</Text>
    </View>
    <View style={[styles.whiteContainerItem,{borderBottomWidth:2, borderBottomColor:'#ECF0F5'}]}>
        <IconPig name="piggy-bank" size={25} color="#428DFF"  style={styles.topIcon} />
        <Text style={styles.whiteContainerItemTxt}>Current APY</Text>
        <Text style={styles.whiteContainerItemAmount}>3.0%</Text>
    </View>
    <View style={styles.whiteContainerItem}>
        <IconAlarm name="alarm" size={25} color="#428DFF"  style={styles.topIcon} />
        <Text style={styles.whiteContainerItemTxt}>Lockup Period</Text>
        <Text style={styles.whiteContainerItemAmount}>None</Text>
    </View>
    </View>
</View>

    )
}

const styles = StyleSheet.create({
    outer:{
        position:'absolute',
        backgroundColor:'red',
        width:'100%',
        height:'100%',
    },
    inner:{
        backgroundColor:'yellow',
        marginHorizontal:20,
        height:'100%',
    },
    whiteContainerItem:{
        flexDirection:'row',
        
    },
    whiteContainerfirstBlock:{
        backgroundColor:'white',
        marginHorizontal:10,
    },

})