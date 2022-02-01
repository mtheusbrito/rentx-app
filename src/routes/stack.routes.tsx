import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import { CarDetails } from '../screens/CarDetails';
import { SchedulingDetails } from '../screens/SchedulingDetails';
import { SchedulingComplete } from '../screens/SchedulingComplete';
import { Scheduling } from '../screens/Scheduling';
import { Home } from '../screens/Home';

const {Navigator, Screen } = createNativeStackNavigator()

export function StackRoutes(){
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Home" component={Home} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
      <Screen name="Scheduling" component={Scheduling} />
    </Navigator>
  );
}