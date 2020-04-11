import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import moment from 'moment'
import SuperButton from './assets/SuperButton.js'



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
        <View>
          <Text style={styles.textHeader}>Cronômetro Nubank</Text>
        </View>
        <Timer interval = {DATA.timer}/>
        
          <SuperButton/>
      </View>
      
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#772c9a',
    alignItems: 'center',
    paddingTop: 50,
  },

  textTimer: {
    color: 'white',
    fontSize: 78,
    paddingTop: 50,
    
  },
  
  textHeader: {
    color: 'white',
    fontSize: 24,
  },

})
