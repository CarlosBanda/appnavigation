import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Pagina1 from '../views/Pagina1'
import Pagina2 from '../views/Pagina2'
import Pagina3 from '../views/Pagina3'

const Stack = createStackNavigator();

export const StackNavigation = () => {
    return ( 
        <Stack.Navigator>
            <Stack.Screen name='Pagina1' component={Pagina1}></Stack.Screen>
            <Stack.Screen name='Pagina2' component={Pagina2}></Stack.Screen>
            <Stack.Screen name='Pagina3' component={Pagina3}></Stack.Screen>
        </Stack.Navigator>
     );
}