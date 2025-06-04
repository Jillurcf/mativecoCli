import {
  requestNeededAndroidPermissions,
  useStripeTerminal,
  disconnectReader,
  createPaymentIntent,
  collectPaymentMethod,
  processPayment,
} from '@stripe/stripe-terminal-react-native';
import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  PermissionsAndroid,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import NfcManager, { NfcTech } from 'react-native-nfc-manager';
import { SvgXml } from 'react-native-svg';
import tw from '../../lib/tailwind';
import { IconBack, IconTapToPay } from '../../assets/icon/icon';
import InputText from '../../components/InputText';
import TButton from '../../components/TButton';
import LottieView from 'lottie-react-native';

const TapToPay = ({ navigation }) => {
  const isScanning = useRef(false);
  const [amount, setAmount] = useState('');
  const [readerConnected, setReaderConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDiscovering, setIsDiscovering] = useState(false);

  const {
    initialize,
    discoverReaders,
    connectReader,
  } = useStripeTerminal();

  useEffect(() => {
    const setupTerminal = async () => {
      try {
        if (Platform.OS === 'android') {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'Stripe Terminal requires your location to use Tap to Pay.',
              buttonPositive: 'OK',
            }
          );

          if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
            Alert.alert('Permission Denied', 'Cannot continue without location permission.');
            return;
          }
        }

        await initialize();
        console.log('Stripe Terminal initialized for Tap to Pay');
      } catch (error) {
        console.error('Setup Error:', error);
        Alert.alert('Error', error.message || 'Unexpected error during Stripe Terminal setup');
      }
    };

    setupTerminal();

    return () => {
      disconnectReader().catch(err => console.error('Failed to disconnect:', err));
    };
  }, []);

  useEffect(() => {
    NfcManager.start();
    return () => {
      NfcManager.cancelTechnologyRequest().catch(() => null);
    };
  }, []);

  const handleDiscoverAndConnectReader = async () => {
    if (isDiscovering) return;

    try {
      setIsDiscovering(true);

      const { readers, error } = await discoverReaders({
        discoveryMethod: 'bluetoothScan',
        simulated: false,
      });

      if (error) {
        Alert.alert('Discovery Error', error.message);
        return false;
      }

      if (!readers || readers.length === 0) {
        Alert.alert('No Readers Found', 'Please ensure your reader is on and nearby.');
        return false;
      }

      const { reader, error: connectError } = await connectReader(readers[0]);
      if (connectError) {
        Alert.alert('Connection Error', connectError.message);
        return false;
      }

      setReaderConnected(true);
      console.log('Connected to reader:', reader.label);
      return true;
    } catch (err) {
      console.error('Discovery/Connection Error:', err);
      Alert.alert('Unexpected Error', err.message || 'Something went wrong.');
      return false;
    } finally {
      setIsDiscovering(false);
    }
  };

  const handleTapToPay = async () => {
    if (!amount || isNaN(amount)) {
      Alert.alert('Invalid Amount', 'Please enter a valid numeric amount.');
      return;
    }

    setIsLoading(true);
    try {
      const connected = readerConnected || (await handleDiscoverAndConnectReader());
      if (!connected) return;

      const paymentIntent = await createPaymentIntent({
        amount: parseInt(amount) * 100, // Stripe uses cents
        currency: 'usd',
      });

      const collected = await collectPaymentMethod(paymentIntent.client_secret);
      const processed = await processPayment(collected.paymentIntent.id);

      console.log('Payment successful:', processed);
      Alert.alert('Success', 'Payment completed!');
    } catch (err) {
      console.error('Payment error:', err);
      Alert.alert('Payment failed', err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const handleNfcRead = async () => {
    if (isScanning.current) return;
    isScanning.current = true;

    try {
      await NfcManager.cancelTechnologyRequest().catch(() => null);
      await NfcManager.requestTechnology(NfcTech.Ndef);
      const tag = await NfcManager.getTag();
      console.log('NFC Tag Detected:', tag);

      await handleTapToPay();
    } catch (err) {
      console.warn('NFC Read Error:', err);
      Alert.alert('NFC Error', 'Failed to read NFC. Try again.');
    } finally {
      await NfcManager.cancelTechnologyRequest().catch(() => null);
      isScanning.current = false;
    }
  };

  return (
    <View style={tw`flex-1 bg-white p-[4%]`}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <SvgXml xml={IconBack} />
      </TouchableOpacity>

      <View style={tw`flex-col justify-between h-[90%]`}>
        <View>
          <Text style={tw`text-center text-[25px] font-bold my-8`}>Tap to Pay</Text>
          <InputText
            placeholder="Enter amount"
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            containerStyle={tw`border`}
          />
        </View>

        <View style={tw`items-center`}>
          {isScanning.current ? (
            <LottieView
            source={require('../../assets/images/card.json')}
              autoPlay
              loop
              style={{ width: 400, height: 400 }} // optional: set your preferred size
            />
          ) : (
            <SvgXml xml={IconTapToPay} />
          )}


        </View>

        <TButton
          onPress={handleNfcRead}
          containerStyle={tw`bg-black w-full`}
          title={isLoading ? 'Processing...' : 'Tap to Pay'}
          disabled={isLoading}
        />
      </View>

      <StatusBar translucent={false} />
    </View>
  );
};

export default TapToPay;

const styles = StyleSheet.create({});
