
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Alert, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';
import { IconDrawer, IconPlus } from '../assets/icon/icon';

type Props = {}

const Profile = (props: Props) => {
  const [imageUri, setImageUri] = useState()
    const navigation = useNavigation();
//   const selectImage = async () => {
//     console.log("click");
//     try {
//       // Ask for permission
//       const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (!permissionResult.granted) {
//         Alert.alert("Permission Denied", "Permission to access media library is required!");
//         return;
//       }

//       // Launch picker
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true, // basic cropping UI
//         quality: 1,
//       });

//       if (!result.canceled) {
//         const asset = result.assets[0];

//         // Optional: manually crop to 300x300 if needed
//         const manipulatedImage = await ImageManipulator.manipulateAsync(
//           asset.uri,
//           [{ resize: { width: 300, height: 300 } }],
//           { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
//         );

//         const uri = manipulatedImage.uri;
//         const fileName = uri.split('/').pop() || 'photo.jpg';
//         const match = /\.(\w+)$/.exec(fileName);
//         const fileType = match ? `image/${match[1]}` : `image`;

//         setImageUri(uri);

//         // const formData = new FormData();
//         // formData.append("image", {
//         //   uri,
//         //   name: fileName,
//         //   type: fileType,
//         // } as any);

//         // const res = await patchUpdateUserProfile(formData);
//         console.log("Image updated:", res);
//       }
//     } catch (error) {
//       console.error("Image selection error:", error);
//     }
//   };
  return (
    <View style={tw`bg-white flex-1 p-[4%] `}>
      <View style={tw`flex-row items-center justify-between mt-8`}>
        <TouchableOpacity
          onPress={() => navigation?.dispatch(DrawerActions.openDrawer())}
          style={tw``}>
          <SvgXml color={"white"} xml={IconDrawer} />

        </TouchableOpacity>
        <Text style={tw`text-black text-[30px] font-RobotoBold`}>Profile</Text>
        <View></View>
      </View>
      <View style={tw`flex-1 items-center justify-center h-[80%]`}>
        <TouchableOpacity
        //  onPress={selectImage}
         >
          <View style={tw`relative`}>
            <View
              style={tw`w-18 h-18 bg-gray-400 rounded-full overflow-hidden mx-auto justify-center items-center`}>
              {imageUri ? (
                <Image
                  source={{ uri: imageUri }}
                  style={tw`w-full h-full`}
                  resizeMode="cover"
                />
              ) : <Image
                source={{ uri: imageUri }}
                style={tw`w-full h-full`}
                resizeMode="cover"
              />}


            </View>
            <View style={tw`absolute bottom-0 right-0 bg-gray-200 rounded-full p-2`}>
              <SvgXml xml={IconPlus} width={16} height={16} />
            </View>
          </View>
        </TouchableOpacity>
        <Text style={tw`text-center font-RobotoBlack mt-2`}>Name</Text>
        <Text style={tw`text-center font-RobotoBlack mt-2`}>Email</Text>
        <Text style={tw`text-center font-RobotoBlack mt-2`}>Bank account</Text>
      </View>
      <StatusBar translucent={false} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})