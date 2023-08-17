import React from 'react';
import { CharacterScreen } from '../screens/characterScreen';
import { LocationScreen } from '../screens/locationScreen';
import { EpisodeScreen } from '../screens/episodeScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialTopTabNavigator(); 

export default function MainNavigator(){
    return ( 
        <Tab.Navigator tabBarPosition='bottom'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    
                    if (route.name === "Characters"){
                        iconName = "account";
                    } else if (route.name === "Episodes") {
                        iconName = "play";
                    } else if (route.name === "Locations") {
                        iconName = "earth";
                    }
                    return ( <Icon name={ iconName } color={ color } size={26} /> );
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey',
                tabBarShowLabel: false, 
                tabBarShowIcon: true,
                tabBarStyle: { 
                    height: '9%',
                    backgroundColor: '#38445D',
                },
                tabBarIndicatorStyle: {
                    backgroundColor: '#0053FF',
                    height: '1%',
                    marginLeft: '10%',
                    marginRight: '-32%',
                    marginBottom: '2%',
                    marginTop: '-1%',
                    borderRadius: 50,
                },
            })}>
            <Tab.Screen name="Characters" component={CharacterScreen}/> 
            <Tab.Screen name="Episodes" component={EpisodeScreen} /> 
            <Tab.Screen name="Locations" component={LocationScreen} />
        </Tab.Navigator>
    );
}