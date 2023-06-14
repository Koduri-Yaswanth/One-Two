import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';

import { createStackNavigator } from '@react-navigation/stack';
import Mainscreen from '../Home/Mainscreen';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Mainscreen" component={Mainscreen} />
 

    </Stack.Navigator>
  );
}

export default MyStack