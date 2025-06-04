import { IconDrawer, IconTick } from '@/src/assets/icon/icon';
import tw from '@/src/lib/tailwind';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DrawerActions } from '@react-navigation/native';
import { router, useNavigation } from 'expo-router';
import React, { useState } from 'react';
import { ScrollView, StatusBar, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

const ReceiptHistoryScreen = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView style={tw`p-4 bg-white flex-1`}>
      <View style={tw`flex-row items-center justify-between mt-12`}>
        <TouchableOpacity
          onPress={() => navigation?.dispatch(DrawerActions.openDrawer())}
          style={tw``}>
          <SvgXml color={"white"} xml={IconDrawer} />

        </TouchableOpacity>
        <Text style={tw`text-black text-[30px] font-RobotoBold`}>Receipts history</Text>
        <View></View>
      </View>
      {/* Search */}
      <TextInput
        placeholder="Search by Transaction ID"
        style={tw`border border-gray-300 p-3 mt-6 rounded-xl mb-4 text-black`}
        placeholderTextColor="#666"
      />

      {/* Date Range */}
      <Text style={tw`text-gray-600 mb-1`}>Date Range</Text>
      <View style={tw`w-full flex-row mb-4`}>
        <TouchableOpacity
          onPress={() => setShowStartPicker(true)}
          style={tw`flex-1 border border-gray-300 p-3 rounded-xl mr-2 flex-row justify-between items-center`}
        >
          <Text style={tw`text-black`}>{startDate.toLocaleDateString()}</Text>
          <MaterialIcons name="calendar-today" size={20} />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setShowEndPicker(true)}
          style={tw`flex-1 border border-gray-300 p-3 rounded-xl ml-2 flex-row justify-between items-center`}
        >
          <Text style={tw`text-black`}>{endDate.toLocaleDateString()}</Text>
          <MaterialIcons name="calendar-today" size={20} />
        </TouchableOpacity>
      </View>

      <View style={tw`flex-row`}>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowStartPicker(false);
              if (selectedDate) setStartDate(selectedDate);
            }}
          />
        )}
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              setShowEndPicker(false);
              if (selectedDate) setEndDate(selectedDate);
            }}
          />
        )}
      </View>

      {/* Status Dropdown (placeholder) */}
      <Text style={tw`text-gray-600 mb-1`}>Status</Text>
      <TouchableOpacity style={tw`border border-gray-300 p-3 rounded-xl flex-row justify-between items-center mb-4`}>
        <Text style={tw`text-black`}>All Statuses</Text>
        <Ionicons name="chevron-down" size={20} />
      </TouchableOpacity>

      {/* Amount Range */}
      <Text style={tw`text-gray-600 mb-1`}>Amount Range</Text>
      <View style={tw`flex-row justify-between mb-4`}>
        <TextInput
          placeholder="Min"
          style={tw`flex-1 border border-gray-300 p-3 rounded-xl mr-2 text-black`}
          keyboardType="numeric"
          placeholderTextColor="#666"
        />
        <TextInput
          placeholder="Max"
          style={tw`flex-1 border border-gray-300 p-3 rounded-xl ml-2 text-black`}
          keyboardType="numeric"
          placeholderTextColor="#666"
        />
      </View>

      {/* Card */}
      <TouchableOpacity 
      onPress={()=> router.push("/screen/ReceiptDetails")}
      style={tw`bg-white rounded-2xl p-4 shadow-md flex-row justify-between items-center`}>
        <View>
          <Text style={tw`text-gray-500 mb-1`}>Date: January 12, 2025</Text>
          <Text style={tw`font-bold text-black`}>Transaction ID: TX-T7XXJI</Text>
        </View>
        <View style={tw`flex-row gap-3 items-center`}>
          {/* <MaterialIcons name="check-box" size={28} color="green" style={{ marginRight: 8 }} /> */}
         <SvgXml xml={IconTick}/>
          <Ionicons name="chevron-forward" size={24} />
        </View>
      </TouchableOpacity>
      <View style={tw`bg-white rounded-2xl mt-2 p-4 shadow-md flex-row justify-between items-center`}>
        <View>
          <Text style={tw`text-gray-500 mb-1`}>Date: January 12, 2025</Text>
          <Text style={tw`font-bold text-black`}>Transaction ID: TX-T7XXJI</Text>
        </View>
        <View style={tw`flex-row gap-3 items-center`}>
        <SvgXml xml={IconTick}/>
          <Ionicons name="chevron-forward" size={24} />
        </View>
      </View>
      <StatusBar translucent={false}/>
    </ScrollView>
  );
};

export default ReceiptHistoryScreen;
