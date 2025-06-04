import { IconBack } from '@/src/assets/icon/icon'
import TButton from '@/src/components/TButton'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

type Props = {}

const ReceiptDetails = (props: Props) => {
    return (
        <View style={tw`bg-white flex-1 p-[4%]`}>
            <TouchableOpacity onPress={() => router.back()}>
                <SvgXml xml={IconBack} />
            </TouchableOpacity>
            <View>
                <View style={tw`bg-white rounded-xl p-4-2 w-full shadow-lg mt-8`}>
                    <Text style={tw`text-black text-[28px] text-center font-RobotoBold`}>Receipt details</Text>
                    <Text style={tw`text-[#5E5E5E] text-[14px] py-4 text-center font-RobotoBold`}>Transaction Information</Text>
                    <View>
                        <View style={tw`flex-row justify-between`}>
                            <Text style={tw`text-center text-[#5E5E5E] text-lg`}>Transaction ID:</Text>
                            <Text style={tw`text-center text-[#5E5E5E] text-lg font-bold`}>TX-T7XXJI</Text>
                        </View>
                        <View style={tw`flex-row justify-between mt-1`}>
                            <Text style={tw`text-center text-[#5E5E5E] text-lg`}>Payment method:</Text>
                            <Text style={tw`text-center text-[#5E5E5E] text-lg font-bold`}>NFC</Text>
                        </View>
                        <View style={tw`flex-row justify-between mt-1`}>
                            <Text style={tw`text-center text-[#5E5E5E] text-lg`}>Date & time:</Text>
                            <Text style={tw`text-center text-[#5E5E5E] text-lg font-bold`}>May 12, 2025</Text>
                        </View>
                        <View style={tw`flex-row justify-between mt-1`}>
                            <Text style={tw`text-center text-[#5E5E5E] text-lg`}>Status:</Text>
                            <Text style={tw`text-center text-[#048506] text-lg font-bold`}>Completed</Text>
                        </View>
                        {/* <View style={tw`flex-row justify-between mt-1`}>
                                <Text style={tw`text-center text-[#5E5E5E] text-lg`}>Item:</Text>
                                <Text style={tw`text-center text-[#048506] text-lg font-bold`}>Completed</Text>
                            </View>
                            <View style={tw`flex-row justify-between mt-1`}>
                                <Text style={tw`text-center text-[#5E5E5E] text-lg`}>Status:</Text>
                                <Text style={tw`text-center text-[#048506] text-lg font-bold`}>Completed</Text>
                            </View> */}
                    </View>
                    <View style={tw`border border-gray-100 my-4`}></View>
                    <View style={tw`flex-row justify-between`}>
                        <Text style={tw`text-center text-[#5E5E5E] text-lg`}>Total amount:</Text>
                        <Text style={tw`text-center text-[#5E5E5E] text-lg font-bold`}>$50</Text>
                    </View>
                    <View style={tw`flex-row justify-between mt-1`}>
                        <Text style={tw`text-center text-[#5E5E5E] text-lg`}>Platform Fee:</Text>
                        <Text style={tw`text-center text-[#5E5E5E] text-lg font-bold`}>$50</Text>
                    </View>
                    <View style={tw`flex-row justify-between mt-1`}>
                        <Text style={tw`text-center text-[#5E5E5E] text-lg`}>Stripe Fee (1.4% + $0.25):</Text>
                        <Text style={tw`text-center text-[#5E5E5E] text-lg font-bold`}>$50</Text>
                    </View>
                    <View style={tw`flex-row justify-between mt-1`}>
                        <Text style={tw`text-center text-[#5E5E5E] text-lg`}>Total Charged:</Text>
                        <Text style={tw`text-center text-[#5E5E5E] text-lg font-bold`}>$50</Text>
                    </View>

                </View>
                <View>
                    <View style={tw`mt-2`}>
                        <TButton onPress={() => router.push('/screen/tapToPay/PaymentSummery')} containerStyle={tw`bg-black w-full `} title='Download receipt'  />
                    </View>

                    <View style={tw`mt-2`}>
                        <TButton onPress={() => router.push('/screen/QrcodeScreen')} containerStyle={tw`bg-black w-full border`} title='Show QR code' />
                    </View>
                    <View style={tw`mt-2`}>
                        <TButton onPress={() => router.push('/(drawer)/(tab)')} containerStyle={tw`bg-black w-full`} title='Done' />
                    </View>
                </View>
            </View>
            <StatusBar translucent={false} />
        </View>
    )
}

export default ReceiptDetails

const styles = StyleSheet.create({})