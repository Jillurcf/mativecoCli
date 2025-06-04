
// import { useNavigation, DrawerActions } from 'expo-router'
import { DrawerActions, useNavigation } from '@react-navigation/native'



import React from 'react'
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'
import tw from '../lib/tailwind'
import { IconDrawer } from '../assets/icon/icon'
import TButton from '../components/TButton'


type Props = {}

const HomeScreen = ({route}) => {
  const navigation = useNavigation();
   const  id  = route?.params;
   console.log(id, "id from HomeScreen")
  return (
    <View style={tw`flex-1 bg-white p-[4%] `}>
      <View style={tw`flex-col  justify-between h-full`}>
        <View>
          <View style={tw`flex-row justify-between`}>
            <TouchableOpacity
              onPress={() => navigation?.dispatch(DrawerActions.openDrawer())}
              style={tw`mt-6`}>
              <SvgXml color={"white"} xml={IconDrawer} />

            </TouchableOpacity>
            <View style={tw` mt-24 items-center`}>
              <Image style={tw`w-[77px]  h-[103px]`} source={require('../assets/images/logo.png')} />
              <Text style={tw`text-black font-RoboBold font-bold py-6 text-3xl`}>Hi Jason 👋</Text>
            </View>
            <View style={tw``}>

            </View>
          </View>
          {/* <Text>index</Text> */}
          <View style={tw`mt-12 items-center justify-center bg-white`}>
            {/* Top Row */}
            <View style={tw`flex-row mb-4`}>
              {/* Card 1 */}
              <View style={tw`bg-white rounded-xl p-4 mr-2 w-40 shadow-lg`}>
                <Text style={tw`text-center text-gray-500 text-sm`}>Today's Payment Account</Text>
                <Text style={tw`text-center text-black text-2xl font-bold`}>$100</Text>
              </View>

              {/* Card 2 */}
              <View style={tw`bg-white rounded-xl p-4 ml-2 w-40 shadow-lg`}>
                <Text style={tw`text-center text-gray-500 text-sm`}>Last Payment Amount</Text>
                <Text style={tw`text-center text-black text-2xl font-bold`}>$50</Text>
              </View>
            </View>

            {/* Bottom Card */}
            <View style={tw`bg-white rounded-xl p-4 w-40 shadow-lg`}>
              <Text style={tw`text-center text-gray-500 text-sm`}>Total Payments{'\n'}This Month</Text>
              <Text style={tw`text-center text-black text-2xl font-bold`}>$15,000</Text>
            </View>
          </View>
        </View>
        <View>
          <TButton onPress={()=> navigation?.navigate('TapToPay', {id: id}
          )} containerStyle={tw`bg-black w-full`} title='Tab to pay' />
        </View>
      </View>
      <StatusBar backgroundColor='black' translucent={false} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})