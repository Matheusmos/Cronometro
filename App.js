import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import moment from 'moment'
import SuperButton from './assets/SuperButton.js'
import Footer from './assets/Footer.js'
import Header from './assets/header.js'
import ResetButton from './assets/reset.js'




const DATA = {
  timer: 1234567, 
}

function Timer({ interval }) {
  const duration = moment.duration(interval)
  const num = Math.floor(duration.milliseconds() / 10)
  return (<Text style={styles.textTimer}>
          {duration.minutes()}:{duration.seconds()},{num}
         </Text>
  )
}

function RButton() {
  
 
      return (
          <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.RButtonS}>
            <View style={styles.buttonborder}>
                <Text style={styles.TextButton}>Start</Text>
            </View>
        </View>
          </TouchableOpacity> 
      )
      
}

function REButton() {
   
    
  return (
      
      <TouchableOpacity>
      <View style={styles.ResButtonS}>
          <View style={styles.resbuttonborder}>
              <Text style={styles.resTextButton}>Reset</Text>
          </View>
      </View>  
      </TouchableOpacity>
  )
  
}

export default class App extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <StatusBar hidden/>
        <Header/>
        <ScrollView>
            <View style={styles.crono}>
              <Timer interval = {DATA.timer}/>
              <RButton/>
            </View>
            <View style={styles.resetAlign}>
              <REButton/>
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
  },


  textTimer: {
    color: 'white',
    fontSize: 74,
    paddingTop: 30,
    paddingBottom: 20,
    
  },

  crono: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  resetAlign: {
    paddingHorizontal: 80,
  },

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


