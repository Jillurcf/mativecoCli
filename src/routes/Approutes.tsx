// import 'react-native-url-polyfill/auto'; // ✅ Polyfill URL and URLSearchParams early
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemeProvider } from '../context/ThemeContext';
import Routes from './Routs';
import { StripeTerminalProvider } from '@stripe/stripe-terminal-react-native';
// import { Provider } from 'react-redux';
// import store from '../redux/store';

const AppRoutes = () => {
  const fetchTokenProvider = async () => {
    try {
      const response = await fetch('http://10.0.80.13:8084/api/stripe/terminal/connection_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch secret key');
      }

      const { secret} = await response.json();
      console.log(secret, "secret++++++++++++++++++++")
      return secret;
    } catch (error) {
      console.error('Stripe terminal token fetch error:', error);
      return ''; // return empty string to prevent crashes
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StripeTerminalProvider tokenProvider={fetchTokenProvider}>
        <ThemeProvider>
          {/* <Provider store={store}> */}
          <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
              <Routes />
            </SafeAreaView>
          </NavigationContainer>
          {/* </Provider> */}
        </ThemeProvider>
      </StripeTerminalProvider>
    </GestureHandlerRootView>
  );
};

export default AppRoutes;
