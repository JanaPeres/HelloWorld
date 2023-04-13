import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-web';

const Formacao = ({ navigation}) => {
    return(
        <View>
            <Text>Formação</Text>

            <Button
                title="Voltar"
                onPress={() => navigation.goBack() }
            />
        </View>
    );
}

const estilos = styleSheet.create({

})
    
export default Formacao;