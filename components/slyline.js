import { StyleSheet, Text, View, TouchableOpacity , ImageBackground, Image } from 'react-native';
import backgroundImage from '../assets/r34.jpg';

export default function App() {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
    <View style={styles.container}>
    <View style={styles.textContent}>
      <Text style={styles.title}>SkyLine R34</Text>
      </View>
      <View style= {styles.principal}>
      <Text style={styles.textBtn}> Nissan Skyline GT-R R34 azul metálico, que o personagem Brian O'Conner (vivido pelo falecido ator Paul Walker) guiou.
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
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#052769'
  },
  textBtn: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    fontSize: 20,
    color: '#000'
  }, 
});