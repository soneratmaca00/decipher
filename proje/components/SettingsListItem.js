import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const SettingsItem = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.listItems}>
                {props.firstIcon}
                <View style={styles.listItemsInner}>                    
                    <Text style={styles.listItemsTextLeft}>{props.firstText}</Text>
                    <Text style={styles.listItemsText}>{props.secondText}</Text>
                </View>
                {props.secondIcon}
            </View>
        </TouchableOpacity>
    );
}


export default SettingsItem 


const styles = StyleSheet.create({
    
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
     
      listItemsTextLeft:{
        color:'#5F5F5F',
        fontWeight:'bold',
      },
      listItemsText:{
          color:'#5F5F5F'
      },
})