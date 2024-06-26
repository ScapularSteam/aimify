import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView} from 'react-native';
import {Card} from './components/card'
import { useState } from 'react';

const titleTest = "Hello World!";
const bodyTest = "Testing Testing, 123"

export default function App() {

  // Learning how to use react hooks to change states
  const [record, updateRecord] = useState({date: 'test', trainingType: 'test', score: 0,})

  return (

    


    <View style={styles.container}>

      <View style={styles.title}>
        <Text style={styles.titleText}>Aimify MVP</Text>
      </View>

      
      <View style={styles.card}>
          <Text style={styles.cardText}>{record.date}</Text>
          <Text style={styles.cardText}>{record.trainingType}</Text>
          <Text style={styles.cardText}>{record.score}</Text>
      </View>

      <View style={styles.card}>
          
      </View>
      
        
      

    <StatusBar hidden = {true}/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#1f2123', // Same background colour as www.fletchworks.dev
    alignItems: 'center',
    

  },

  title: {

    // Anchor title bar to the top of the screen
    position: 'relative',
    top: 0,

    // Set dimensions of title bar
    width: '100%',
    height: '8%',

    // Anchor contents to the centre
    alignItems: 'center',
    justifyContent: 'center',

    // Change colour of title bar
    backgroundColor: 'rgba(255, 255, 255, 0.023)',

  },

  titleText: {

    // Change text styling
    fontSize: 22,
    color: 'white',
  },

  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.023)',
    borderRadius: 20,

    height: '50%',
    width: '90%',

    marginTop: 50,

  },

  cardText: {
    fontSize: 15,
    color: 'white',
  }


});
