import React from 'react';
import { StyleSheet, View, Text, Button,Dimensions,Image, TouchableOpacity } from 'react-native'
import Icona from 'react-native-vector-icons/EvilIcons'
import { SafeAreaView } from 'react-native-safe-area-context';
import SettingsItem from  './components/SettingsListItem'
import IconProfile from 'react-native-vector-icons/MaterialIcons'
import IconNext from 'react-native-vector-icons/MaterialIcons'
import IconBellRing from 'react-native-vector-icons/MaterialCommunityIcons'
import IconBank from 'react-native-vector-icons/FontAwesome'
import IconBook from 'react-native-vector-icons/Octicons'
import IconLock from 'react-native-vector-icons/AntDesign'
import IconHeadset from 'react-native-vector-icons/FontAwesome5'

const screenWidth = Math.round(Dimensions.get('window').width)



export default function Dashboard({ navigation }) {
    const data = [40, 48, 50, 55, 63, 65 ]
    const days = ['Feb', 'Mar', 'Apr','May','Jun','Jul']
    const contentInset = { top: 20, bottom: 20 }
    const iconNext=(<IconNext name="navigate-next" size={17} color="#A6A6A6"  style={[styles.applePayIcon]}/>)
    const iconProfile = (<IconProfile name="account-circle" size={30} color="#428DFF"  style={styles.topIcon} />)
    const iconBellRing = (<IconBellRing name="bell-ring" size={30} color="#428DFF"  style={styles.topIcon} />)
    const iconBank = (<IconBank name="bank" size={30} color="#428DFF"  style={[styles.topIcon]}/>)
    const iconBook = (<IconBook name="book" size={30} color="#428DFF"  style={styles.topIcon} />)
    const iconLock = (<IconLock name="lock1" size={30} color="#428DFF"  style={styles.topIcon} />)
    const iconHeadset =(<IconHeadset name="headset" size={30} color="#428DFF"  style={styles.topIcon} />)
    return (
        <SafeAreaView style={styles.safeAreaView}>            
            
            <View style={styles.topBar} >
                <TouchableOpacity
                onPress={() => navigation.goBack()}                        
                >
                    <Icona name="close" size={30} color="#8c8c8c"  style={styles.topIcon} />
                </TouchableOpacity>
                
                <View style={[styles.smallItems]}
                                                
                        >
                            <Text style={[styles.smallItemsText]}>Settings</Text>
                </View>
            </View>

            <View style={styles.listItemsFirstBlock}>
                <SettingsItem firstText='Account' secondText='Soner ATMACA' firstIcon={iconProfile} secondIcon={iconNext} />
                <SettingsItem firstText='Notifications' secondText='On' firstIcon={iconBellRing} secondIcon={iconNext} />
            </View>
            <View style={styles.listItemsSecondBlock}>
                <SettingsItem firstText='Withdraw to Bank'  firstIcon={iconBank} secondIcon={iconNext} />
            </View>
            <View style={styles.listItemsThirdBlock}>
                <SettingsItem firstText='FAQ'  firstIcon={iconBook} secondIcon={iconNext} />
                <SettingsItem firstText='Privacy'  firstIcon={iconLock} secondIcon={iconNext} />    
                <SettingsItem firstText='Support'  firstIcon={iconHeadset} secondIcon={iconNext} />    
            </View>
            

            <TouchableOpacity
                            style={styles.logOutContainer}
                            onPress={() => navigation.navigate('Dashboard')}
                            
                            >
                            <View style={styles.logOut}>
                            
                            
                            <Text style={styles.logOutText}>Log Out</Text>
                                            
                            </View>
            </TouchableOpacity>
                    
           
              
                
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView:{
        flexDirection:'column',
        justifyContent:'space-between',
        height:'100%',
    },
    topBar:{
        flexDirection:'row',
        
        alignItems:'center',
        marginTop:10,
    },
    topIcon:{
        marginLeft:10,
    },
    smallItems:{       
        width:60,
        padding:2,
        borderRadius:10,
        textAlign:'center',
        marginLeft:110,
              
    },
    smallItemsText:{
        color:'#1B73DD',      
        textAlign:'center',
        width:60,
        fontWeight:'bold',      
    },
    
    logOutContainer:{
        alignItems:'center',
        marginHorizontal:15,
        marginBottom:20,
    },
    logOut:{
        backgroundColor:'white',
        width:'100%',
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius:10,
        alignItems:'center',
        marginTop:80,
      },
      logOutText:{
        color:'#5F5F5F',
        fontSize:15,
        fontWeight:'bold',
      },
      
      listItemsFirstBlock:{
          backgroundColor:'white',
          borderRadius:10,
          marginHorizontal:15,
      },
     
      listItemsSecondBlock:{
        backgroundColor:'white',
        borderRadius:10,
        marginHorizontal:15,
      },
      listItemsThirdBlock:{
        backgroundColor:'white',
        borderRadius:10,
        marginHorizontal:15,
      },
})

