import * as React from 'react';
import 'react-native-gesture-handler';
import {  StatusBar } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { screenImport } from './Screens';

/**
 * Navigation manager
 *
 * @export 
 * @returns navigation container with all navigation stack
 */
export default function NavigationManager() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <Stack.Navigator initialRouteName="WelcomeScreen">
                <Stack.Screen
                    name="Welcome"
                    component={screenImport.WelcomeScreen}
                />
                <Stack.Screen
                    name="ButtonScreen"
                    component={screenImport.ButtonScreen}
                    options={{
                        headerTintColor: "white",
                        headerStyle: {
                          backgroundColor: "black",
                        },
                        
                      }}
                />
                <Stack.Screen
                    name="InformationScreen"
                    component={screenImport.InformationScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const Stack = createStackNavigator();