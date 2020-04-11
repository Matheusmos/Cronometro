import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

function RButton({title}) {
    return (
        
        <View style={styles.RButtonS}>
            <View style={styles.buttonborder}>
                <Text style={styles.TextButton}>{title}</Text>
            </View>
        </View>
        
    )
  }
  
export default class SuperButton extends Component {
    render() {
      return (
        <View>
          <RButton title = 'Start'/>
        </View>
      );
    }
    
  }

  const styles = StyleSheet.create({
  
    RButtonS: {
        backgroundColor: 'white',
        width: 160,
        height: 160,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'coral',
        borderWidth: 1,
    },

    TextButton: {
        color: 'coral',
        fontSize: 24,
       
    },

    buttonborder: {
        width: 144,
        height: 144,
        borderRadius: 72,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'coral',
      },
  
    
  })