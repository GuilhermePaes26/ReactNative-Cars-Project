import { StyleSheet, Text, View, TouchableOpacity , ImageBackground } from 'react-native';
import backgroundImage from '../assets/2cars.jpg';

export default function Home(props) {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
    <View style={styles.container}>
    <View style={styles.textContent}>
      <Text style={styles.title}>Velozes e Furiosos</Text>
      <Text style={styles.subtitle}>Os carros mais icônicos da saga!</Text> 
      </View>
      <View>
      <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate('charger')}}><Text style={styles.textBtn}>Charger</Text></TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={()=>{props.navigation.navigate('skyline')}}><Text style={styles.textBtn}>SkyLine R34</Text></TouchableOpacity>
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
  subtitle: {
    fontSize: 15,
    color: '#fff'
  },
  textContent : {
    backgroundColor: '#005d9d',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderWidth: 3,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  btn : {
    padding: 10,
    alignItems: 'center',
    margin: 10,
    justifyContent: 'center',
    backgroundColor: '#add8e6',
    borderRadius: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#fff'
  },
  textBtn: {
    fontSize: 20
  }
});