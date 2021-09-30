import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';

const Contact = () => {
    const navigation = useNavigation();

  return (
    <View>
        <Text style={{fontSize: 30}}>Contact Screen</Text>
        <Button
            title="Return"
            onPress={() => navigation.goBack()}
        />
        <Button
            title="Return to Home"
            onPress={() => navigation.navigate("Home")}
        />
        <Button
            title="Go to About"
            onPress={() => navigation.navigate("About")}
        />
        <Button
            title="Return to Home (delete)"
            onPress={() => navigation.dispatch(StackActions.popToTop)}
        />
    </View>
  );
}
export default Contact;
