import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

import ScreenOne from '../pages/index/ScreenOne';
import ScreenTwo from '../pages/index/ScreenTwo';
import ScreenTre from '../pages/index/ScreenTre';

//
import LoginScreen from '../pages/logins/LoginScreen';
import Dashboard from '../pages/dashboard/Dashboard';
import DetailPagesAktifity from "../pages/dashboard/DetailPagesAktivity";

 const Navigation = () => {
    return(
        <Stack.Navigator> 
            <Stack.Screen  name="ScreenOne"
                component={ScreenOne}
                options={{ headerShown: false, headerTitle: '' }}/>
                 <Stack.Screen  name="ScreenTwo"
                component={ScreenTwo}
                options={{ headerShown: false, headerTitle: '' }}/>

                <Stack.Screen  name="ScreenTre"
                component={ScreenTre}
                options={{ headerShown: false, headerTitle: '' }}/>

                 <Stack.Screen  name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false, headerTitle: '' }}/>

                <Stack.Screen  name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false, headerTitle: '' }}/>

<Stack.Screen  name="DetailPagesAktifity"
                component={DetailPagesAktifity}
                options={{ headerShown: false, headerTitle: '' }}/>
        </Stack.Navigator>
    )
}

export default Navigation;

