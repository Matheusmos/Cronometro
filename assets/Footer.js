import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const copyright = {
    nome: 'Matheus Imagine',
    tm: 'TM'
}

function FooterT({nome}){
    return (
       <View >
           <Text style={styles.textFooter}>{'\u00A9'}{nome}</Text>
       </View> 
    )
}

export default class Footer extends Component {
    render() {
      return (
        <View style={styles.footer}>

            <FooterT nome = 'MatheusImagine.com'/>
          
        </View>
      );
    }
    
  }

const styles = StyleSheet.create({
  
    footer: {
        flex: 0.2,
        backgroundColor: '#ab50ca',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },

    textFooter: {
        color: 'white',
    },
  
    
  })