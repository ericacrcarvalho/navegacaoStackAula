import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import About from './src/pages/About';
import Contact from './src/pages/Contact';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          initialParams={{idade: 22, nome: 'Erica Carvalho'}}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            title: "Contato",
            headerStyle: {
              backgroundColor: 'tomato'
            },
            headerTintColor: 'blue',
            headerTitleStyle: {
              fontSize: 30,
              fontWeight: 'bold'
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
