import { IconBack } from '@/src/assets/icon/icon';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';
import React from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { SvgXml } from 'react-native-svg';

const QrcodeScreen = () => {
  const valueToEncode = 'https://yourexample.com/pay/txn123'; // You can customize this

  return (
    <View style={tw`flex-1  bg-white p-4`}>
      <TouchableOpacity onPress={() => router.back()}>
        <SvgXml xml={IconBack} />
      </TouchableOpacity>
      <View style={tw`items-center justify-center flex-1`}>
        <Text style={tw`text-xl font-bold mb-4`}>Scan this QR Code</Text>
        <View style={tw`bg-white p-4 rounded-lg shadow`}>
          <QRCode
            value={valueToEncode}
            size={200}
          />
        </View>
      </View>
      <StatusBar translucent={false}/>
    </View>
  );
};

export default QrcodeScreen;
