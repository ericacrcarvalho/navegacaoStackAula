import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const About = ({ route }) => {
    const navigation = useNavigation();
    const { idade, nome } = route.params;

  return (
    <View>
        <Text style={{fontSize: 30}}>About Screen</Text>
        <Text>Idade: {route.params?.idade}</Text>
        <Text>Nome: {route.params?.nome}</Text>
        <Text>Idade: {idade}</Text>
        <Button
            title="Return"
            onPress={() => navigation.goBack()}
        />
        <Button
            title="Go to Contact"
            onPress={() => navigation.navigate("Contact")}
        />
        <Button
            title="Update title"
            onPress={() => navigation.setOptions({title:`About ${route.params?.nome}`})}
        />
    </View>
  );
}
export default About;
