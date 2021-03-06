import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'

function RButton({title}) {
    console.log(title)
    if(title == 'Start'){
    return (
        
       
        <View style={styles.RButtonS}>
            <View style={styles.buttonborder}>
                <Text style={styles.TextButton}>{title}</Text>
            </View>
        </View>  
        
    )
    }

    if(title == 'Stop'){
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
        width: 140,
        height: 140,
        borderRadius: 70,
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
        width: 132,
        height: 132,
        borderRadius: 66,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'coral',
      },

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