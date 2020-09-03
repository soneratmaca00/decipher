import React from 'react';
import { StyleSheet, View, Text } from 'react-native'





const DashBoardListItem = (props) =>{
    return(
        <View style={[styles.whiteContainerItem,{borderBottomWidth:2, borderBottomColor:'#ECF0F5'}]}>
            {props.firstIcon}
            <View style={styles.whiteContainerItemInner}>
            <Text style={styles.whiteContainerItemTxt}>{props.firstText}</Text>
            <Text style={styles.whiteContainerItemAmount}>{props.secondText}</Text>
            </View>
        </View>
    )
}

export default DashBoardListItem



const styles = StyleSheet.create({
    
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
})