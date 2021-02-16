import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from './Screens/Home';
import QRCodeScreen from './Screens/QRCode';


const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="API" component={HomeScreen} 
                options={
                    {
                        tabBarIcon: ({size}) => <MaterialIcons name='api' size={size}/>
                    }
                }/>
                <Tab.Screen name="QRCode" component={QRCodeScreen} 
                options={
                    {
                        tabBarIcon: ({size}) => <MaterialIcons name='dashboard' size={size}/>
                    }
                }/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}