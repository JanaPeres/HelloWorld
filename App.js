import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from './src/pages/Home';
import Home from './src/pages/Formacao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Formacao" component={Formacao} />
      </Stack.Navigator>
    </NavigationContainer>
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
