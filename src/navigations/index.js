import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard, Report, Setting, SignIn, Splash, Store} from '../screens';

const Stack = createNativeStackNavigator();

const Navigations = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
        cardOverlayEnabled: true,
        headerShadowVisible: false,
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Store" component={Store} />
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default Navigations;
