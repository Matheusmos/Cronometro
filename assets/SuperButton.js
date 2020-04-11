import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

function RButton({title}) {
    return (
        <View style={styles.RButtonS}>
            <Text style={styles.TextButton}>{title}</Text>
        </View>
    )
  }
  
export default class SuperButton extends Component {
    render() {
      return (
        <View style={styles.container}>
          <RButton title = 'Start'/>
        </View>
      );
    }
    
  }

  const styles = StyleSheet.create({
  
    RButtonS: {
        backgroundColor: 'white',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    TextButton: {
        color: 'coral',
        fontSize: 24,
    },
  
    
  })