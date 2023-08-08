import React from 'react';
import { CharacterScreen } from '../screens/characterScreen';
import { LocationScreen } from '../screens/locationScreen';
import { EpisodeScreen } from '../screens/episodeScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator(); 

export default function MainNavigator(){
    return ( 
        <Tab.Navigator tabBarPosition='bottom'
            screenOptions={{ 
                swipeEnabled: false
            }}>
            <Tab.Screen name="Characters" component={CharacterScreen} /> 
            <Tab.Screen name="Episodes" component={EpisodeScreen} /> 
            <Tab.Screen name="Locations" component={LocationScreen} />
        </Tab.Navigator>
    );
}