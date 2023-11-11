import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { ArrowLeftCircleIcon, HeartIcon, StarIcon, PlusIcon, MinusIcon, ShoppingBag } from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { themeColors } from '../theme'

export default function ProductScreen (props) {

    const navigation = useNavigation();

    const item = props.route.params;

    const [size, setSize] = useState('small');

    return (
        <View className="flex-1">

            <StatusBar style="light" hidden={true} />
            <Image
                source={require('../assets/images/beansBackground2.png')}
                style={styles.heroImage}
                className="w-full absolute h-[35vh]"
            />

            <SafeAreaView className="space-y-5">
                <View className="mx-4 flex-row justify-between items-center mt-2">

                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <ArrowLeftCircleIcon size={35} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <HeartIcon size={35} color="#FFFFFF" />
                    </TouchableOpacity>
                </View>

                <View className="flex-row justify-center" style={styles.productImageView}>
                    <Image
                        source={item.image}
                        className="h-60 w-60"
                    />

                </View>

                <View
                    style={styles.starIconView}
                    className="flex-row items-center rounded-3xl p-1 px-2 space-x-1 mx-4 w-16"
                >
                    <StarIcon size={16} color="white" />
                    <Text className="text-base font-semibold text-white">
                        {item.stars}
                    </Text>
                </View>

                <View className="flex-row justify-between items-center mx-4">
                    <Text
                        style={styles.textColor}
                        className="text-3xl font-semibold"
                    >
                        {item.name}
                    </Text>

                    <Text
                        style={styles.textColor}
                        className="text-lg font-semibold"
                    >
                        Ksh {item.price}
                    </Text>
                </View>

                <View className="mx-4 space-y-2">
                    <Text
                        style={styles.textColor}
                        className="text-lg font-bold"
                    >
                        Coffee Size
                    </Text>

                    <View className="flex-row justify-between">
                        <TouchableOpacity
                            onPress={() => setSize('small')}
                            className="px-8 p-3 rounded-full" style={{ backgroundColor: size == "small" ? themeColors.bgLight : 'rgba(0, 0, 0, 0.1)' }}>
                            <Text className={size == "small" ? 'text-white' : "text-gray-700"}>
                                Small
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setSize('medium')}
                            className="px-8 p-3 rounded-full" style={{ backgroundColor: size == "medium" ? themeColors.bgLight : 'rgba(0, 0, 0, 0.1)' }}>
                            <Text className={size == "medium" ? 'text-white' : "text-gray-700"}>
                                Medium
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => setSize('large')}
                            className="px-8 p-3 rounded-full" style={{ backgroundColor: size == "large" ? themeColors.bgLight : 'rgba(0, 0, 0, 0.1)' }}>
                            <Text className={size == "large" ? 'text-white' : "text-gray-700"}>
                                Large
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>

                <View className="mx-4 space-y-2 h-28">
                    <Text
                        style={styles.textColor}
                        className="text-lg font-bold"
                    >
                        What's up with a sip of this?
                    </Text>

                    <Text className="text-gray-600">
                        {item.desc}
                    </Text>
                </View>

                <View className="flex-row justify-between items-center px-4 mb-2">
                    <View className="flex-row items-center space-x-1">
                        <Text className="text-base text-gray-700 font-semibold opacity-60">
                            Volume
                        </Text>
                        <Text className="text-base text-black font-semibold"> {item.volume}</Text>
                    </View>

                    <View
                        className="flex-row items-center space-x-4  border rounded-full p-1 px-4"
                        style={{ borderColor: themeColors.bgDark }}>
                        <TouchableOpacity>
                            <MinusIcon size="20" strokeWidth={3} color={themeColors.bgDark} />
                        </TouchableOpacity>
                        <Text style={{ color: themeColors.text }} className="font-extrabold text-lg">2</Text>
                        <TouchableOpacity>
                            <PlusIcon size="20" strokeWidth={3} color={themeColors.bgDark} />
                        </TouchableOpacity>
                    </View>

                    <View className="flex-row justify-between px-4">
                        <TouchableOpacity className="p-4 rounded-full border border-gray-400">
                            <ShoppingBag size="30" color="gray" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ backgroundColor: themeColors.bgLight }}
                            className="p-4 rounded-full flex-1 ml-4">
                            <Text className="text-center text-white text-base font-semibold">Buy now</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    heroImage: {
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50
    },

    productImageView: {
        shadowColor: themeColors.bgDark,
        shadowRadius: 35,
        shadowOffset: { height: 30, width: 0 },
        shadowOpacity: 0.9
    },

    starIconView: {
        backgroundColor: themeColors.bgLight
    },

    textColor: {
        color: themeColors.text
    },

    lightBg: {
        backgroundColor: themeColors.bgLight
    }
})