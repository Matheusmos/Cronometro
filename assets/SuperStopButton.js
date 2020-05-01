import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

function RButton({title}) {
    console.log(title)
   
        return (
            <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
            <View style={styles.RButtonP}>
                <View style={styles.buttonborderP}>
                    <Text style={styles.TextButtonP}>{title}</Text>
                </View>
            </View>
            </TouchableOpacity> 
        )
        
  }
  
export default class SuperStopButton extends Component {
    
    render() {
      return (
        <View>
          <RButton title = 'Stop'/>
        </View>
      );
    }
    
  }

  const styles = StyleSheet.create({
  
   

    
      RButtonP: {
        backgroundColor: 'red',
        width: 140,
        height: 140,
        borderRadius: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
    },

    TextButtonP: {
        color: 'white',
        fontSize: 24,
       
    },

    buttonborderP: {
        width: 132,
        height: 132,
        borderRadius: 66,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
      },
  
    
  })