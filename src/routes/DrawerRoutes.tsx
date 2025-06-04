import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Image,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import tw from '../lib/tailwind';
import { SvgXml } from 'react-native-svg';
// import NormalModal from '../component/NormalModal';
// import Button from '../component/Button';
// import { IconBillingAndSubscription, IconCross, IconDataDownload, IconHelpAndSupport, IconLeftArrow, IconLinkAccount, IconLock, IconLogout, IconReminder, IconRightArrrow, IconRightDrawer } from '../assets/Icons';
// import TButton from '../component/TButton';
// import LinearGradient from 'react-native-linear-gradient';
import { useTheme } from '../context/ThemeContext';
import BottomRoutes from './BottomsRotues';
import { IconBack } from '../assets/icon/icon';
import NormalModal from '../components/NormalModal';
import Button from '../components/Button';


// import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { apiSlice, usePostLogOutMutation } from '../redux/api/apiSlice/apiSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getStorageToken, removeStorageToken } from '../utils/Utils';

function DrawerContent({ navigation, route }: any) {
  console.log("route 21 +++++++++++++", route)
  const [vacationMode, setVacationMode] = useState(true);
  const [logoutConfirmationModalVisible, setLogoutConfirmationModalVisible] =
    useState(false);
  // const [postLogOut, {isLoading, isError}] = usePostLogOutMutation();
  // const handleVacationMode = () => {
  //   setVacationMode(!vacationMode);
  // };

  //   const handleLogout = async () => {
  //     try {
  //       const token = getStorageToken();
  //           console.log("token", token)
  //       // Trigger your logout API call
  //       const response = await postLogOut(token);
  //       console.log('Logout API Response:', response);
  //       removeStorageToken()
  //       // Sign out the user using GoogleSignin
  //       // await GoogleSignin.signOut();
  //       console.log('Google Signout Successful');

  //       // Log success message
  //       console.log('User signed out successfully');

  //       // Navigate to the Login screen
  //       navigation?.replace('LoadingSplash');

  //       // Close the logout confirmation modal
  //       setLogoutConfirmationModalVisible(false);
  //     } catch (error) {
  //       // Handle errors
  //       console.error('Error signing out:', error);
  //     }
  //   };
  //   if (isLoading) {
  //     return (
  //       <View style={tw`flex-1 justify-center items-center`}>
  //         <ActivityIndicator size="large" color="#064145" />
  //         <Text style={tw`text-primary mt-2`}>Loading products...</Text>
  //       </View>
  //     );
  //   }

  //   if (isError) {
  //     return (
  //       <View style={tw`flex-1 justify-center items-center`}>
  //         <Text style={tw`text-red-500 text-lg`}>Failed to load products.</Text>
  //         <TouchableOpacity
  //           style={tw`mt-4 p-2 bg-[#064145] rounded-lg`}
  //           onPress={() => navigation?.goBack()}>
  //           <Text style={tw`text-white`}>Go Back</Text>
  //         </TouchableOpacity>
  //       </View>
  //     );
  //   }
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';
  return (
    <View style={tw`px-4 h-full justify-between rounded-3xl ${isDark ? "bg-black" : "bg-white"} `}>
      <View style={tw`rounded-lg mt-6`}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`flex-row justify-end`}>
          <SvgXml xml={IconBack} />
        </TouchableOpacity>
        <View style={tw`mt-6 gap-y-12`}>
          <TouchableOpacity
            onPress={() =>
              navigation?.navigate('AccountSettings', {
                // products: [...Array(10)],
                // title: 'I miei ordini',
                // from: 'myOrders',
              })
            }>
            <View style={tw`flex-row gap-2 items-center`}>
              {/* <SvgXml xml={IconLock} /> */}
              <View style={tw`flex-row justify-between w-[90%]`}>
                <Text style={tw`text-black font-SatoshiBold`}>
                  Account & security
                </Text>
                {/* <SvgXml xml={IconRightDrawer} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation?.navigate('BillingAndSubscription', {
                // products: [...Array(10)],
                // title: 'I miei ordini',
                // from: 'myOrders',
              })
            }>
            <View style={tw`flex-row gap-2 items-center`}>
              {/* <SvgXml xml={IconBillingAndSubscription} /> */}
              <View style={tw`flex-row justify-between w-[90%]`}>
                <Text style={tw`text-black font-SatoshiBold`}>
                  Billing & subscription
                </Text>
                {/* <SvgXml xml={IconRightDrawer} /> */}
              </View>
            </View>
          </TouchableOpacity>
          {/*    */}
          <TouchableOpacity
            onPress={() =>
              navigation?.navigate('DrawerLinkDeviceScreen', {
                // products: [...Array(10)],
                // title: 'I miei ordini',
                // from: 'myOrders',
              })
            }>
            <View style={tw`flex-row gap-2 items-center`}>
              {/* <SvgXml xml={IconLinkAccount} /> */}
              <View style={tw`flex-row items-center justify-between w-[90%]`}>
                <Text style={tw`text-black font-SatoshiBold`}>
                  Linked accounts
                </Text>
                {/* <SvgXml xml={IconRightDrawer} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation?.navigate('Reminders', {
                // products: [...Array(10)],
                // title: 'I miei ordini',
                // from: 'myOrders',
              })
            }>
            <View style={tw`flex-row gap-2 items-center`}>
              {/* <SvgXml xml={IconReminder} /> */}
              <View style={tw`flex-row items-center justify-between w-[90%]`}>
                <Text style={tw`text-black font-SatoshiBold`}>
                  Reminders
                </Text>
                {/* <SvgXml xml={IconRightDrawer} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation?.navigate('DataAnalytics', {
                // products: [...Array(10)],
                // title: 'I miei ordini',
                // from: 'myOrders',
              })
            }>
            <View style={tw`flex-row gap-2 items-center`}>
              {/* <SvgXml xml={IconDataDownload} /> */}
              <View style={tw`flex-row items-center justify-between w-[90%]`}>
                <Text style={tw`text-black font-SatoshiBold`}>
                  Data download
                </Text>
                {/* <SvgXml xml={IconRightDrawer} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation?.navigate('HelpAndSupport', {
                // products: [...Array(10)],
                // title: 'I miei ordini',
                // from: 'myOrders',
              })
            }>
            <View style={tw`flex-row gap-2 items-center`}>
              {/* <SvgXml xml={IconHelpAndSupport} /> */}
              <View style={tw`flex-row items-center justify-between w-[90%]`}>
                <Text style={tw`text-black font-SatoshiBold`}>
                  Help & support
                </Text>
                {/* <SvgXml xml={IconRightDrawer} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`flex-row items-center gap-4`}
            onPress={() => setLogoutConfirmationModalVisible(true)}>
            {/* <SvgXml xml={IconLogout} /> */}
            <Text style={tw`text-red-500 text-sm font-SatoshiBold`}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`bg-[#E7E7E9] py-6 p-2 flex-row justify-between rounded-2xl my-12`}>
          <View style={tw`w-[30%] items-center justify-center`}>
            <Image style={tw`w-12 h-12`} source={require('../assets/images/logo.png')} />
          </View>
          {/* <View style={tw`items-center w-[70%] `}>
            <Text style={tw`text-black text-xs font-SatoshiRegular py-3`}>Upgrade to access premium features and advanced tools.</Text>
            <LinearGradient
              colors={['#FFA68D', '#FD3A84']} // Purple gradient
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={tw`rounded-lg py-1 px-2`}
            >
              <TouchableOpacity>
                <Text style={tw`text-white text-center`}>Get Premium</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View> */}
        </View>
      
      </View>


      <NormalModal
        layerContainerStyle={tw`justify-end animate-bounce`} // Ensure modal content aligns at the bottom
        containerStyle={tw`bg-white rounded-t-2xl p-6`} // Styling the modal itself
        visible={logoutConfirmationModalVisible}
        setVisible={setLogoutConfirmationModalVisible}
      >
        <View>
          <Text style={tw`text-red-500 text-lg text-center font-SatoshiBold mb-2`}>
            Log out
          </Text>
          <Text style={tw`text-black text-lg text-center font-SatoshiBold mb-2`}>
            Sure you want to log out?
          </Text>

          <View style={tw`mt-2`}>
            <View style={tw` w-full`}>
              <Button
                title="Yes, Log Out"
                style={tw`text-white font-SatoshiBold`}
                containerStyle={tw`bg-[#4FA8A8] px-6`}
                onPress={() => {
                  navigation?.navigate('Login');
                  setLogoutConfirmationModalVisible(false);
                }}
              />
            </View>
            <View style={tw` mt-2`}>
              <Button
                title="No"
                style={tw`text-black px-6`}
                containerStyle={tw`bg-[#EAF5F5]`}
                onPress={() => {
                  setLogoutConfirmationModalVisible(false);
                }}
              />
            </View>
          </View>
        </View>
      </NormalModal>

    </View>
  );
}

function DrawerRoute() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerPosition: 'left',
        drawerType: 'front',
        drawerStyle: tw`rounded-lg`,
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen name="BottomRoutes" component={BottomRoutes} />
    </Drawer.Navigator>
  );
}

export default DrawerRoute;
