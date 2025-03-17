import { StyleSheet, Text, View, TouchableOpacity , ImageBackground, Image } from 'react-native';
import backgroundImage from '../assets/charger.jpg';

export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
    <View style={styles.container}>
    <View style={styles.textContent}>
      <Text style={styles.title}>Dodge Charger</Text>
      </View>
      <View style= {styles.principal}>
      <Text style={styles.textBtn}>Ele está de volta! Talvez o carro mais icônico de toda a franquia “Velozes e Furiosos”, o Dodge Charger 1970 de Dominic Toretto (Vin Diesel).
</Text>
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContent : {
    margin: 30,
    padding: 10,
    borderWidth: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  principal : {
    margin: 0,
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#add8e6'
  },
  textBtn: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20,
    color: '#fff'
  }, 
});