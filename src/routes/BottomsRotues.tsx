


import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SvgXml } from "react-native-svg";
import tw from "../lib/tailwind";
import ReceiptHistoryScreen from '../screen/ReceiptHistoryScree';
import profile from '../screen/Profile';


// import Sanctum from "../screens/sanctum/Sanctum";


import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../screen/HomeScreen";
import Profile from "../screen/Profile";

// import { BlurView } from "@react-native-community/blur";

const Tab = createBottomTabNavigator();

function BottomRoutes({ route }) {
  const partner = route?.params;
  console.log("Partner ++++++++=", route);

  // State to manage the visibility of floating buttons
//   const [showFloatingButtons, setShowFloatingButtons] = useState(false);

//   const toggleFloatingButtons = () => {
//     setShowFloatingButtons(!showFloatingButtons);
//   };

//   const CustomAddButton = ({ onPress }, props: any) => {

//     console.log("Props+++++++++++", props)
//     return (

//       <View style={tw`w-20 h-20 rounded-full bg-transparent items-center justify-center`}>
//         <TouchableOpacity
//           {...props}
//           style={tw`absolute bottom-[45px] left-[12%] -translate-x-1/2 w-14 h-14 bg-[#E5F4F2] rounded-full justify-center items-center shadow-lg`}
//           onPress={onPress}
//         >
//           <SvgXml xml={IconPlus} width={24} height={24} />
//         </TouchableOpacity>
//       </View>
//     );
//   }

  // Floating Buttons that will show when the "Add" button is clicked
//   const FloatingButtons = () => {
//     const navigation = useNavigation()
//     return (
//       <View style={tw`flex-row w-[100%] gap-15 absolute bottom-[100px] left-[17%] -translate-x-1/2 z-10
//       `}>
//         <TouchableOpacity
//           onPress={() => navigation?.navigate('LinkDevice')}
//           style={tw`rounded-full p-2 overflow-hidden`}
//         >
//           <BlurView
//             style={tw`rounded-full p-3 justify-center items-center w-6 h-6`}
//             blurType="light" // can be "light", "dark", or "extraLight"
//             blurAmount={20}
//             reducedTransparencyFallbackColor="white"
//           >
//             <Image
//               source={require('../assets/Imgages/Today/linkDevice.png')}
//             // style={tw`w-2 h-2`}
//             />
//           </BlurView>
//         </TouchableOpacity>
//         <View>
//           <TouchableOpacity
//             onPress={() => navigation?.navigate("AddLogs")}
//             style={tw`rounded-full p-2 overflow-hidden -mt-8`}
//           >
//             <BlurView
//               style={tw`w-6 h-6 rounded-full p-3 justify-center items-center`}
//               blurType="light" // options: "light", "dark", "extraLight"
//               blurAmount={20}
//               reducedTransparencyFallbackColor="white"
//             >
//               {/* <View style={tw`bg-[#96CBCB] p-2 rounded-full justify-center items-center`}> */}
//                 <Image source={require('../assets/Imgages/Today/addLog.png')} />
//               {/* </View> */}
//             </BlurView>
//           </TouchableOpacity>
//         </View>
//         <TouchableOpacity
//             onPress={() => navigation?.navigate("AddLogs")}
//             style={tw`rounded-full p-2 overflow-hidden `}
//           >
//             <BlurView
//               style={tw`w-6 h-6 rounded-full p-3 justify-center items-center`}
//               blurType="light" // options: "light", "dark", "extraLight"
//               blurAmount={20}
//               reducedTransparencyFallbackColor="white"
//             >
//               {/* <View style={tw`bg-[#96CBCB] p-2 rounded-full justify-center items-center`}> */}
//               <Image source={require('../assets/Imgages/Today/addNote.png')} />
//               {/* </View> */}
//             </BlurView>
//           </TouchableOpacity>
//         {/* <TouchableOpacity
//           style={tw`bg-[#96CBCB] p-2 rounded-full justify-center items-center`}
//           onPress={() => navigation?.navigate("AddNotes")}
//         >
//           <Image source={require('../assets/Imgages/Today/addNote.png')} />
//         </TouchableOpacity> */}
//       </View>
//     );
//   }

  return (
    <>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: tw`h-[70px] bg-white shadow-md`,
          tabBarItemStyle: tw`py-2`,
          tabBarLabelStyle: ({ focused }) => ({
            ...tw`text-xs font-medium`, // Base styling
            color: focused ? "#4FA8A8" : "gray", // Green if focused, gray otherwise
          }),
          tabBarIcon: ({ focused }) => {
            let icon;

            switch (route.name) {
              case "Today":
                // icon = focused ? IconTodayFocus : IconToday;
                break;

            //   case "Calendar":
            //     icon = focused ? IconCalendarFocus : IconCalendar;
            //     break;

            //   case "Sanctum":
            //     icon = focused ? IconSanctumFocus : IconSanctum;
            //     break;

            //   case "Profile":
            //     icon = focused ? IconProfileFocus : IconProfile;
            //     break;

              default:
                icon = null;
            }

            return icon ? <SvgXml xml={icon} width={24} height={24} /> : null;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Home" }} />
        <Tab.Screen name="Receipts" component={ReceiptHistoryScreen} options={{ tabBarLabel: "Receipts" }} />
       
      
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: "Profile" }} />
      </Tab.Navigator>

      {/* Show floating buttons only when `showFloatingButtons` is true */}
      {/* {showFloatingButtons && <FloatingButtons />} */}
    </>
  );
}

export default BottomRoutes;
