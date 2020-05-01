import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import moment from 'moment'
import Footer from './assets/Footer.js'
import Header from './assets/header.js'
import SuperStopButton from './assets/SuperStopButton.js'



const DATA = {
  timer: 1234567, 
  laps: [12345, 2345, 34567, 98765,12313,1313,123131,123123,123123,12313,123123],
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

function Lap({number, interval}){
  return (
    <View style={styles.lap}>
      <Text style={styles.lapText}>Tempo {number}</Text>
      <Text style={styles.lapText}>{interval}</Text>
    </View>
  )
}

function LapsTable({laps}){
  return(
    <ScrollView>
      {laps.map((lap, index) => (
        <Lap 
          number={laps.length - index} 
          key={laps.length - index} 
          interval = {lap} 
        />
      ))}
    </ScrollView>
  )
}

export default class App extends Component {
  render() {
    return (
      
      <View style={styles.container}>
        <StatusBar hidden/>
        <Header/>
        <View style={styles.spaceF}>
            <View style={styles.crono}>
              <Timer interval = {DATA.timer} />
              <RButton/>
            </View>
              <View style={styles.resetAlign}>
                <REButton/>
              </View>
              <ScrollView style={styles.scrollView}>
                <LapsTable laps={DATA.laps}/>
              </ScrollView>
            
        </View>
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
    paddingBottom: 10,
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
  
lap: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderColor: 'coral',
  borderTopWidth: 0.5,
  paddingTop: 5,
  paddingBottom: 9,
},

lapText: {
  color: 'coral',
  fontSize: 14,
},

scrollView: {
  flex: 1,
  alignSelf: 'stretch',
  paddingTop: 10,
  paddingHorizontal: 10,
  paddingVertical: 20,
  paddingBottom: 110,
  
},

spaceF: {
  paddingBottom: 1,
  
  paddingTop: 10,
},

})


