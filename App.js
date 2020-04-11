import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import moment from 'moment'
import SuperButton from './assets/SuperButton.js'
import Footer from './assets/Footer.js'



const DATA = {
  timer: 123456, 
}

function Timer({ interval }) {
  const duration = moment.duration(interval)
  const num = Math.floor(duration.milliseconds() / 10)
  return <Text style={styles.textTimer}>
          {duration.minutes()}:{duration.seconds()},{num}
         </Text>
}

/* function RButton({title, color, background}) {
  return (
      <View style={{backgroundColor: background}}>
          <Text style={{color}}>{title}</Text>
      </View>
  )
} */

export default class App extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <StatusBar hidden/>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Cronômetro Nubank</Text>
          </View>
            <View style={styles.crono}>
              <Timer interval = {DATA.timer}/>
        
            <SuperButton/>
            </View>
        </ScrollView>
          
          <Footer/>
      </View>
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#772c9a',
    
    /* backgroundColor: '#772c9a',
    alignItems: 'center',
    paddingTop: 50, */
  },

  header: {
    flex: 1,
    backgroundColor: '#ab50ca',
    justifyContent: 'center',
    alignItems: 'center',
    
  },

  /* footer: {
    flex: 0.3,
    backgroundColor: '#ab50ca',
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  }, */

  textTimer: {
    color: 'white',
    fontSize: 74,
    paddingTop: 30,
    paddingBottom: 20,
    
  },
  
  textHeader: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    
  },
  
  /* textfooter: {
    color: 'white',
    fontSize: 16,
  }, */

  crono: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  

})
