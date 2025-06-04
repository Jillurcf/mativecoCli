import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import { useDeviceContext } from 'twrnc';
import tw from '../lib/tailwind';
import LoadingSplash from '../screen/LoadingSplash';
import StripeAuthScreen from '../screen/auth/authenticationScreen';
import TapToPay from '../screen/tapToPay/TapToPay';
import ReceiptHistoryScreen from '../screen/ReceiptHistoryScree';
import Profile from '../screen/Profile';
import HomeScreen from '../screen/HomeScreen';
import DrawerRoute from './DrawerRoutes';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
export default function Routes() {
  const [partner, setPartner] = useState(false)
  useDeviceContext(tw);
  return (
    // <StripeProvider publishableKey="pk_test_51QKAtBKOpUtqOuW1x5VdNqH3vG7CZZl1P6V3VuV1qsRUmPLNk26i34AXeu2zCO3QurFJAOZ9zfb0EkWeCVhqBYgH008X41cXr6">
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      // initialRouteName="LoadingSplash"
    >
      <Stack.Screen name="LoadingSplash" component={LoadingSplash}
         />
 <Stack.Screen name="Drawer" component={DrawerRoute} />
{/*==================================== */}
     <Stack.Screen name="Authenticate" component={StripeAuthScreen} />
     <Stack.Screen name="Home" component={HomeScreen} />
     <Stack.Screen name="TapToPay" component={TapToPay} />
     <Stack.Screen name="Receipts" component={ReceiptHistoryScreen} />
     <Stack.Screen name="Profile" component={Profile} />
      
    </Stack.Navigator>
    // </StripeProvider>
  );
}
