import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Card} from './components/card'

const titleTest = "Hello World!";
const bodyTest = "Testing Testing, 123"

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.title}>
        <Text style={styles.titleText}>Aimify MVP</Text>
      
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
    justifyContent: 'center',

  },

  title: {

    // Anchor title bar to the top of the screen
    position: 'absolute',
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
});
