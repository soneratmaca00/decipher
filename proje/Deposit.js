import React , { useState } from 'react';
import { StyleSheet, View, Text,Dimensions, 
    TouchableOpacity, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icona from 'react-native-vector-icons/EvilIcons'
import IconApple from 'react-native-vector-icons/FontAwesome5' 
import IconNext from 'react-native-vector-icons/MaterialIcons'
import { SafeAreaView } from 'react-native-safe-area-context';



const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)


const numbers = [
    {number:1, key:1},
    {number:2, key:2},
    {number:3, key:3},
    {number:4, key:4},
    {number:5, key:5},
    {number:6, key:6},
    {number:7, key:7},
    {number:8, key:8},
    {number:8, key:9},
    {number:'.', key:10},
    {number:0, key:11},
    {number:'<-', key:12},
]


export default function Login({ navigation }) {
   
    const [deposit, setDeposit] = useState('')
   

    const clickHandler = (item) => {
        if(deposit.length > 0 && item.key === 12 ){
            
            
            setDeposit(deposit.substring(0, deposit.length - 1))
        }else if(item.key != 12 ){
            setDeposit(deposit + item.number)
            
        }else{

        }
        

    } 
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
                            <Text style={[styles.smallItemsText]}>Deposit</Text>
                </View>
                         
            </View>
            <View style={styles.depositContainer}>
                <Text style={styles.depositAmount} numberOfLines={1}
                adjustsFontSizeToFit>${deposit}</Text>
                <View style={styles.oneTime}>
                    <Icon name="repeat" size={10} color="#1B73DD"  style={[styles.repeatIcon]}/>
                    <Text style={styles.oneTimeText} >One-time purchase</Text>
                </View>
            </View>
            <View style={styles.applePayContainer}>
                <View style={styles.applePayIconContainer}>
                    <IconApple name="apple-pay" size={20} color="#717171"  style={[styles.applePayIcon]}/>
                </View>
                <View style={styles.applePayLimitContainer}>
                    <Text style={styles.applePay} >Apple Pay</Text>
                    <Text style={styles.dailyLimit} >Daily Limit: $250</Text>
                </View>
                <Text style={styles.increaseLimit} >Increase Limit</Text>
                <IconNext name="navigate-next" size={17} color="#A6A6A6"  style={[styles.applePayIcon]}/>
            </View>
                
                <FlatList
                numColumns={3}
                keyExtractor={(item) => item.key}
                data={numbers}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => {
                        
                        
                        clickHandler(item)
                        
                    }}>
                        <View style={styles.tuslar}>
                            <Text style={styles.tuslarText} >{item.number}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <TouchableOpacity
                        style={styles.depositPreviewContainer}
                        onPress={() => navigation.navigate('Preview', {
                            depositAmount:deposit,
                        })}
                        
                        >
                        <View style={styles.depositPreview}>
                        
                        
                        <Text style={styles.depositPreviewText}>Preview Deposit</Text>
                                        
                        </View>
            </TouchableOpacity>
        
        
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
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
        color:'white',
        backgroundColor:'#0066ff',        
        width:60,
        padding:2,
        borderRadius:10,
        textAlign:'center',
        marginLeft:110,
              
    },
    smallItemsText:{
        color:'white',      
        textAlign:'center',
        width:60,      
    },
    depositContainer:{
        alignItems:'center',
        marginTop:30,
    },
    depositAmount:{
        color:'#1B73DD',
        fontSize:40,
        fontWeight:'bold',
        marginBottom:15,
        height:50
    },
    oneTime:{
        flexDirection:'row',
        backgroundColor:'#D0E5FF',
        width:'40%',
        alignItems:'center',
        justifyContent:'center',
        padding:3,
        borderRadius:12,
    },
    oneTimeText:{
        color:'#717171',
        marginLeft:5,
        fontWeight:'bold',
        fontSize:12,
    },
    applePayContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderTopColor:'#D6D6D6',
        borderTopWidth:1,
        borderBottomColor:'#D6D6D6',
        borderBottomWidth:1,
        marginTop:50,
        paddingVertical:10,
    },
    applePayIconContainer:{
        borderColor:'#717171',
        borderWidth:1,
        justifyContent:'center',
        marginLeft:45,
        marginRight:15,
        padding:3,
        height:25,
        borderRadius:5,
    },
    applePayIcon:{
        
    },
    applePay:{
      color:'#717171',
      fontWeight:'bold',  
    },
    dailyLimit:{
        color:'#A6A6A6',
        fontSize:10,
    },
    increaseLimit:{
        color:'#A6A6A6',
        fontSize:13,
        marginLeft:78,
        
    },
    tuslar:{
        width:screenWidth/3,
        alignItems:'center',
        justifyContent:'center',   
        height:60,

    },
    tuslarText:{
        fontSize:20,
        fontWeight:'bold',
        color:'#717171',
    },
    depositPreviewContainer:{
        alignItems:'center',
    },
    depositPreview:{
        backgroundColor:'#0066ff',
        width:300,
        padding:10,
        borderRadius:20,
        alignItems:'center',
        marginVertical:10,
      },
      depositPreviewText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
      },

})