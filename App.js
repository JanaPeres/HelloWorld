import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Olá Mundo!</Text>

      <Text>Meu nome é Janaina e este é meu primeiro App em React!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9400D3',
    flexDirection: 'colunm',
    alignItems: 'center',
    justifyContent: 'start',
  },
  titulo: {
    backgroundColor: '#FF69B4',
    padding: 50,
    borderRadius: 10, 
  }
});
