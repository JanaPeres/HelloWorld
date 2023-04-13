import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

 
const Home = ({ navigation }) => {  
  return (
    <View>
       <Text>Pagina Inicial</Text>

       <Button
            title="Formação"
            onPress={ () => navigation.navigate('Formacao') }
        />
    </View>
  );
}

const estilos = StyleSheet.create({


});

export default Home;