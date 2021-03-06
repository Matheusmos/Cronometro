import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'


function REButton({title}) {
   
    
    return (
        
        <TouchableOpacity>
        <View style={styles.ResButtonS}>
            <View style={styles.buttonborder}>
                <Text style={styles.resTextButton}>{title}</Text>
            </View>
        </View>  
        </TouchableOpacity>
    )
    
}
  
export default class ResetButton extends Component {
    render() {
      return (
        <View>
          <REButton title = 'Reset'/>
        </View>
      );
    }
    
  }

  const styles = StyleSheet.create({
    
    ResButtonS: {
        backgroundColor: 'coral',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
        borderWidth: 1,
        alignSelf: 'stretch',
    },

    resTextButton: {
        color: 'white',
        fontSize: 20,
       
    },

    resbuttonborder: {
        width: 74,
        height: 74,
        borderRadius: 36,
        borderWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'white',
      },
    
  })