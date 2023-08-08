import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CharacterScreen } from './src/navigators/characterNavigator';
import { LocationScreen } from './src/navigators/locationNavigator';
import { EpisodeScreen } from './src/navigators/episodeNavigator';


const Tab = createMaterialTopTabNavigator(); 


export default function App() {
 
  return (
    <NavigationContainer >
      
      <Tab.Navigator tabBarPosition='bottom' 
        options={{ 
          swipeEnabled: false,
          
        }}>
        <Tab.Screen name="Characters" component={CharacterScreen} /> 
        <Tab.Screen name="Locations" component={LocationScreen} />
        <Tab.Screen name="Episodes" component={EpisodeScreen} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}

