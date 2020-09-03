import React , { useState } from 'react';
import { StyleSheet, View, Text,Dimensions, 
    TouchableOpacity, 
    Modal} from 'react-native'


    const PreviewListItem = (props) => {
        return(
         <View style={[styles.ListItems, props.style]}>
             <Text style={styles.ListItemsTextLeft}>{props.leftText}</Text>
             <View style={{flexDirection:'row'}}>
             {props.icon}
             <Text style={styles.ListItemsTextRight}>{props.rightText}</Text>
         </View>
     </View>
        )
    }

    export default PreviewListItem


    const styles=StyleSheet.create({
        ListItems:{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:12,
            paddingVertical:15,
            borderColor:'#D6D6D6',
            borderBottomWidth:1,
        },
        ListItemsTextRight:{
            color:'#5D5D5D',
        },
        ListItemsTextLeft:{
            color:'#717171',
            fontWeight:'bold',
        },
    })