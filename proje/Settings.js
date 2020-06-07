import React from 'react';
import { StyleSheet, View, Text, Button,Dimensions,Image, TouchableOpacity } from 'react-native'
import Icona from 'react-native-vector-icons/EvilIcons'
import RadialGradient from 'react-native-radial-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
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
                <View style={styles.listItems}>
                    <IconProfile name="account-circle" size={30} color="#428DFF"  style={styles.topIcon} />
                <View style={styles.listItemsInner}>                    
                    <Text style={styles.listItemsTextLeft}>Account</Text>
                    <Text style={styles.listItemsText}>Soner ATMACA</Text>
                </View>
                    <IconNext name="navigate-next" size={17} color="#A6A6A6"  style={[styles.applePayIcon]}/>
                </View>
            
                <View style={styles.listItems}>
                    <IconBellRing name="bell-ring" size={30} color="#428DFF"  style={styles.topIcon} />
                    <View style={styles.listItemsInner}>                    
                    <Text style={styles.listItemsTextLeft}>Notifications</Text>
                    <Text style={styles.listItemsText}>On</Text>
                    </View>
                    <IconNext name="navigate-next" size={17} color="#A6A6A6"  style={[styles.applePayIcon]}/>
                </View>
            </View>
            <View style={styles.listItemsSecondBlock}>
                <View style={styles.listItems}>
                <IconBank name="bank" size={30} color="#428DFF"  style={[styles.topIcon]}/>
                    <View style={styles.listItemsInner}>                    
                    <Text style={styles.listItemsTextLeft}>Withdraw to Bank</Text>
                    <Text style={styles.listItemsText}></Text>
                    </View>
                    <IconNext name="navigate-next" size={17} color="#A6A6A6"  style={[styles.applePayIcon]}/>
                </View>
            </View>
            <View style={styles.listItemsThirdBlock}>
                <View style={styles.listItems}>
                    <IconBook name="book" size={30} color="#428DFF"  style={styles.topIcon} />
                <View style={styles.listItemsInner}>                    
                    <Text style={styles.listItemsTextLeft}>FAQ</Text>
                    <Text style={styles.listItemsText}></Text>
                </View>
                    <IconNext name="navigate-next" size={17} color="#A6A6A6"  style={[styles.applePayIcon]}/>
                </View>
            
                <View style={styles.listItems}>
                    <IconLock name="lock1" size={30} color="#428DFF"  style={styles.topIcon} />
                    <View style={styles.listItemsInner}>                    
                    <Text style={styles.listItemsTextLeft}>Privacy</Text>
                    <Text style={styles.listItemsText}></Text>
                    </View>
                    <IconNext name="navigate-next" size={17} color="#A6A6A6"  style={[styles.applePayIcon]}/>
                </View>
                <View style={styles.listItems}>
                    <IconHeadset name="headset" size={30} color="#428DFF"  style={styles.topIcon} />
                    <View style={styles.listItemsInner}>                    
                    <Text style={styles.listItemsTextLeft}>Support</Text>
                    <Text style={styles.listItemsText}></Text>
                    </View>
                    <IconNext name="navigate-next" size={17} color="#A6A6A6"  style={[styles.applePayIcon]}/>
                </View>
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
      listItems:{
          flexDirection:'row',
          paddingVertical:12,
          alignItems:'center',
          paddingHorizontal:10,
          justifyContent:'space-between',
          borderTopWidth:1,
          borderTopColor:'#ECF0F5',

      },
      listItemsInner:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginHorizontal:8,
      },
      listItemsFirstBlock:{
          backgroundColor:'white',
          borderRadius:10,
          marginHorizontal:15,
      },
      listItemsTextLeft:{
        color:'#5F5F5F',
        fontWeight:'bold',
      },
      listItemsText:{
          color:'#5F5F5F'
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

