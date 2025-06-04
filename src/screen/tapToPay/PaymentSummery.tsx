import { IconBack } from '@/src/assets/icon/icon'
import TButton from '@/src/components/TButton'
import tw from '@/src/lib/tailwind'
import { router } from 'expo-router'
import React from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SvgXml } from 'react-native-svg'

type Props = {}

const PaymentSummery = (props: Props) => {
    return (
        <View style={tw`bg-white flex-1 p-[4%]`}>
            <TouchableOpacity onPress={() => router.back()}>
                <SvgXml xml={IconBack} />
            </TouchableOpacity>
            <View style={tw`flex-col justify-between h-[95%]`}>
                <View style={tw`items-center mt-4`}>
                    <Text style={tw`text-black font-RobotoBold text-[28px]`}>Payment Summary </Text>

                    {/* Card 2 */}
                    <View style={tw`bg-white rounded-xl p-4-2 w-full shadow-lg mt-8`}>
                        <Text style={tw`text-black text-[28px] text-center font-RobotoBold`}>Receipt</Text>
                        <Text style={tw`text-[#1BAB1E] text-[38px] py-2 text-center font-RobotoBold`}>$101.77</Text>
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
                </View>

                <View>
                    <TButton onPress={() => router.push('/screen/tapToPay/PaymentSummery')} containerStyle={tw`bg-white w-full border border-gray-200`} title='Download receipt' titleStyle={tw`text-black`} />
                </View>

                <View>
                    <TButton onPress={() => router.push('/screen/DummyInvoice')} containerStyle={tw`bg-black w-full border`} title='Download vendor invoice' />
                </View>
                <View>
                    <TButton onPress={() => router.push('/(drawer)/(tab)')} containerStyle={tw`bg-black w-full`} title='Done' />
                </View>
            </View>
            <StatusBar translucent={false} />
        </View>
    )
}

export default PaymentSummery

const styles = StyleSheet.create({})