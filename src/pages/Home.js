import React from 'react';
import { View, Text, Button } from 'react-native';
import {useNavigation } from '@react-navigation/native';

const Home = () => {

    const navigation = useNavigation();

  return (
    <View>
        <Text style={{fontSize: 30}}>Home Screen</Text>
        <Button
            title="Go to About"
            onPress={() => navigation.navigate("About", {idade: 19, nome: 'Erica'})}
        />
         <Button
            title="Go to Contact"
            onPress={() => navigation.navigate("Contact")}
        />
    </View>
  );
}
export default Home;
