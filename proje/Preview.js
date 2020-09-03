import React , { useState } from 'react';
import { StyleSheet, View, Text,Dimensions, 
    TouchableOpacity, 
    Modal} from 'react-native'
import IconBack from 'react-native-vector-icons/MaterialCommunityIcons'
import IconBank from 'react-native-vector-icons/FontAwesome' 
import { SafeAreaView } from 'react-native-safe-area-context';
import DepositSuccess from './DepositSuccess';
import {useDispatch,useSelector} from 'react-redux'
import PreviewListItem from './components/PreviewListItem' 
const screenWidth = Math.round(Dimensions.get('window').width)
const screenHeight = Math.round(Dimensions.get('window').height)


export default function Preview({ navigation }) {
   
   const [modalVisible, setModalVisible] = useState(false);
   const deposit1 = useSelector((state) => state.deposit)

   const closeModal = (text) =>{
        setModalVisible(text);
   }
   const iconBank = (<IconBank name="bank" size={20} color="#D5E2F4"  style={{marginRight:5}}/>)

   
    return (
        <SafeAreaView style={[styles.safeAreaView]}>
            <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
                }}>
            <DepositSuccess closeModal={closeModal} />
            </Modal>
            <View style={styles.topBar} >
                <TouchableOpacity
                onPress={() => navigation.goBack()}                        
                >
                    <IconBack name="keyboard-backspace" size={30} color="#8c8c8c"  style={styles.topIcon} />
                </TouchableOpacity>
                
                <View style={[styles.smallItems]}
                                                
                        >
                            <Text style={[styles.smallItemsText]}>Preview</Text>
                </View>
            </View>
            <View style={styles.depositContainer}>
                <Text style={styles.depositAmount} numberOfLines={1}
                adjustsFontSizeToFit>${deposit1}</Text>
            </View>

            <View>
                <PreviewListItem style={{borderTopWidth: 1}} leftText='Payment method' rightText='Bank of America' 
                icon={iconBank}/>
                <PreviewListItem  leftText='Deposited' rightText='Instantly' />
                <PreviewListItem  leftText='Lockup Period' rightText='None' />
                <PreviewListItem  leftText='Current APY' rightText='3.0%' />                
                <View style={styles.ListItemsFeeContainer}>               
                    <View style={styles.ListItemsFee}>
                        <Text style={styles.ListItemsTextLeft}>Fee</Text>
                        <Text style={styles.ListItemsTextRight}>$0</Text>
                    </View>
                    <View style={styles.ListItemsFee}>
                        <Text style={styles.ListItemsTotalTextLeft}>Total</Text>
                        <Text style={styles.ListItemsTotalTextRight}>${deposit1}</Text>
                    </View>
                </View>
                <Text style={styles.fundsText} >Funds will be debited within 3 days.</Text>
            </View>
            
             
            <TouchableOpacity
                        style={styles.depositNowContainer}
                        onPress={() => {
                            setModalVisible(true);
                            }}
                        
                        >
                        <View style={styles.depositNow}>
                        
                        
                        <Text style={styles.depositNowText}>Deposit Now</Text>
                                        
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
        width:70,
        alignItems: 'center',
        padding:3,
        borderRadius:20,
        marginLeft:110,     
    },
    smallItemsText:{
        color:'white',      
        textAlign:'center',
        width:60,      
    },
    depositContainer:{
        alignItems:'center',
    },
    depositAmount:{
        color:'#1B73DD',
        fontSize:40,
        fontWeight:'bold',
        height:50
    },
    bankIcon:{
        marginRight:5,
    },
    ListItemsFee:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:2,
    },
    ListItemsFeeContainer:{
        paddingHorizontal:12,
        paddingVertical:15,
        borderColor:'#D6D6D6',
        borderBottomWidth:1,
    },
    ListItemsTotalTextLeft:{
        fontWeight:'bold',
        fontSize:16,
        color:'#3A3A3A',
    },
    ListItemsTotalTextRight:{
        color:'#717171',
        fontWeight:'bold',
    },
    fundsText:{
        fontSize:10,
        color:'#5D5D5D',
        paddingHorizontal:12,
    },

    depositNowContainer:{
        alignItems:'center',
      
    },
    depositNow:{
        backgroundColor:'#0066ff',
        width:300,
        padding:10,
        borderRadius:20,
        alignItems:'center',
        marginVertical:10,
        marginTop:80,
      },
      depositNowText:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
      },

})